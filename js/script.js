const userAction = async () => {
    const response = await fetch('https://api.spoonacular.com/recipes/random?limitLicense=true&number=10&apiKey=17aacff51e834c24acb4cd2dcdea4cce');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
    
    var portfolio = document.getElementById("portfolio-items")
    console.log(portfolio)
    
    for (var i = 0; i<myJson["recipes"].length; i++) {
        var card = document.createElement('div')
        card.className = "col-lg-6"
        var a = document.createElement('a')
        a.className = "portfolio-item"
        a.href = `recipe.html?${myJson["recipes"][i]["title"]}=${myJson["recipes"][i]["id"]}`
        var caption = document.createElement('div')
        caption.className = "caption"
        var captionContent = document.createElement('div')
        captionContent.className = "caption-content"
        var header = document.createElement('div')
        header.className = "h2"
        header.innerHTML = myJson["recipes"][i]["title"]
        var text = document.createElement('p')
        text.className = "mb-0"
        text.innerHTML = ""
        var img = document.createElement('img')
        img.className = "img-fluid"
        img.src = myJson["recipes"][i]["image"]
        card.append(a)
        a.append(caption)
        a.append(img)
        caption.append(captionContent)
        captionContent.append(header)
        captionContent.append(text)
        portfolio.append(card)
    }
    
}

userAction()

var ingredientsList = ["spice powder","acorn squash","adobo sauce","agave nectar","ahi tuna","alfredo pasta sauce","almond extract","almond flour","almond milk","almonds","amaretto","ancho chiles","anchovies","andouille sausage","angel food cake mix","angel hair pasta","angostura bitters","apple","apple butter spread","apple cider","apple juice","apple pie spice","apricot preserves","apricots","arborio rice","arrowroot powder","artichoke heart quarters","artichokes","arugula","asafoetida","asafoetida powder","asiago cheese","asian pear","asparagus spears","avocado","avocado oil","baby bell peppers","baby bok choy","baby carrots","baby corn","baby spinach leaves","baby-back ribs","baby-back ribs","bacon","bacon fat","baguette","baking bar","baking powder","baking soda","balsamic glaze","balsamic vinegar","bamboo shoots","banana","basmati rice","bay leaves","bbq sauce","beans","beef","beef brisket","beef broth","beef chuck roast","beef stock","beef tenderloin","beer","beer","beets","bell pepper","berries","biscuit mix","biscuits","bittersweet chocolate","black bean sauce","black beans","black olives","black pepper","black sesame seeds","blackberries","blanched almonds","blood orange","blue cheese","blueberries","bok choy","boneless skinless chicken breast","bourbon","brandy","bread","bread flour","breakfast links","brie","broccoli","broccoli florets","brown rice","brown rice flour","brown sugar","brownie mix","brussel sprouts","bulgur","butter","butterhead lettuce","buttermilk","butternut squash","butterscotch chips","cabbage","caesar dressing","cajun seasoning","cake flour","candy canes","candy coating","candy melts","canned black beans","canned diced tomatoes","canned garbanzo beans","canned green chiles","canned kidney beans","canned mushrooms","canned pinto beans","canned red kidney beans","canned tomatoes","canned tuna","canned white beans","canned white cannellini beans","cannellini beans","cantaloupe","capers","caramel sauce","caramels","caraway seed","cardamom","cardamom pods","carp","carrots","cat fish filets","cauliflower","cauliflower florets","cauliflower rice","celery","celery ribs","celery root","celery salt","celery seed","cereal","champagne","chana dal","cheddar","cheese","cheese curds","cheese dip","cheese soup","cheese tortellini","cherry","cherry pie filling","cherry tomatoes","chestnuts","chia seeds","chicken base","chicken bouillon","chicken bouillon granules","chicken breasts","chicken broth","chicken drumsticks","chicken legs","chicken pieces","chicken sausage","chicken stock","chicken tenders","chicken thighs","chicken wings","chickpea","chile garlic sauce","chili paste","chili peppers","chili powder","chili sauce","chipotle chiles in adobo","chipotle chilies","chipotle peppers in adobo","chive & onion cream cheese spread","chocolate","chocolate chip cookies","chocolate chunks","chocolate ice cream","chocolate milk","chocolate sandwich cookies","chocolate syrup","chocolate wafer cookies","chorizo sausage","cider vinegar","cilantro","cinnamon roll","cinnamon stick","cinnamon sugar","cinnamon swirl bread","clam juice","clams","clarified butter","clove","coarse salt","coarsely ground pepper","cocoa nibs","cocoa powder","coconut","coconut aminos","coconut butter","coconut cream","coconut extract","coconut flour","coconut milk","coconut oil","coconut water","cod","coffee","cognac","cola","colby jack","collard greens","condensed cream of celery soup","condensed cream of mushroom soup","confectioner's swerve","cooked bacon","cooked brown rice","cooked chicken breast","cooked ham","cooked long grain rice","cooked pasta","cooked polenta","cooked quinoa","cooked wild rice","cookies","coriander","corn","corn bread mix","corn chips","corn flakes cereal","corn flour","corn kernels","corn oil","corn tortillas","cornbread","corned beef","cornish hens","cornmeal","cornstarch","cotija cheese","cottage cheese","country bread","courgettes","couscous","cow pea","crabmeat","cracked pepper","cranberries","cranberry juice","cream","cream cheese","cream cheese block","cream of chicken soup","cream of tartar","creamed corn","creamy peanut butter","creme fraiche","cremini mushrooms","creole seasoning","crisp rice cereal","croutons","crystallized ginger","cucumber","cumin seeds","cup cake","currants","curry leaves","dairy free milk","dark brown sugar","dark chocolate","dark chocolate candy bars","dark chocolate chips","dark sesame oil","dates","deep dish pie crust","deli ham","deli turkey","dessert oats","dessert wine","diced ham","diet pop","dijon mustard","dill","dill pickles","hot dog","double cream","dried apricots","dried basil","dried cherries","dried chorizo","dried cranberries","dried dill","dried onion","dried porcini mushrooms","dried rubbed sage","dried thyme","dried tomatoes","dry bread crumbs","dry milk","dry mustard","dry red wine","dry roasted peanuts","duck fat","dutch process cocoa powder","edamame","egg substitute","egg vermicelli","egg whites","egg yolk","eggnog","eggplant","elbow macaroni","enchilada sauce","english cucumber","english muffin","erythritol","escarole","espresso","evaporated milk","extra firm tofu","extra virgin olive oil","farfalle","farro","fat free mayo","fat-free less-sodium chicken broth","fennel","fennel seeds","fenugreek leaf","fenugreek seeds","feta cheese","fettuccine","fire roasted tomatoes","fish","fish sauce","fish stock","flank steak","flax seeds","fleur de sel","flour","flour tortillas","fontina cheese","food dye","frank's redhot sauce","free range eggs","french bread","fresh basil","fresh bean sprouts","fresh chives","fresh corn","fresh corn kernels","fresh figs","fresh fruit","fresh herbs","fresh mint","fresh mozzarella","fresh rosemary","fresh thyme leaves","fried onions","frosting","froyo bars","frozen corn","frozen spinach","fudge","fudge topping","fun size almond joy bar","garam masala","garbanzo bean flour","garlic","garlic paste","garlic powder","garlic powder","garlic salt","gelatin","gf chocolate cake mix","gin","ginger","ginger ale","ginger paste","ginger-garlic paste","gingersnap cookies","gnocchi","goat cheese","golden raisins","gorgonzola","gouda cheese","graham cracker crumbs","graham cracker pie crust","graham crackers","grain blend","grand marnier","granny smith apples","granola","granulated garlic","grape tomatoes","grapefruit","grapeseed oil","gravy","great northern beans","greek yogurt","green beans","green bell pepper","green chili pepper","green food coloring","green grapes","green olives","green onions","greens","grill cheese","grill seasoning","ground allspice","ground ancho chili","ground beef","ground chicken","ground chipotle chile pepper","ground cinnamon","ground cinnamon","ground cloves","ground coriander seeds","ground cumin","ground flaxseed","ground ginger","ground lamb","ground mace","ground nutmeg","ground pork","ground pork sausage","ground veal","gruyere","guacamole","half n half","halibut fillet","ham","hamburger buns","hard cooked eggs","harissa","hash brown potatoes","hazelnuts","healthy request cream of celery soup","hemp seeds","herbes de provence","herbs","hershey's kisses brand milk chocolates","hoisin sauce","honey mustard","horseradish","hot sauce","hummus","ice","ice cream","instant chocolate pudding mix","instant coffee powder","instant espresso powder","instant lemon pudding mix","instant yeast","irish cream","italian bread","italian cheese blend","italian sausages","italian seasoning","jaggery","jalapeno","jasmine rice","jelly","jicama","jimmies","juice","jumbo shell pasta","kaffir lime leaves","kahlua","kalamata olives","kale","ketchup","kitchen bouquet","kiwis","kosher salt","ladyfingers","lamb","lasagna noodles","lb cake","lean ground beef","lean ground turkey","lean pork tenderloin","leeks","leg of lamb","lemon","lemon curd","lemon extract","lemon juice","lemon peel","lemon pepper","lemon wedges","lemongrass","lettuce","lettuce leaves","light butter","light coconut milk","light corn syrup","light cream cheese","light mayonnaise","light olive oil","light soy sauce","lime","lime juice","lime wedges","lime zest","linguine","liquid smoke","liquid stevia","liquor","live lobster","long-grain rice","low fat buttermilk","low fat milk","low fat milk","low fat plain yogurt","low fat ricotta cheese","low fat sour cream","low sodium chicken broth","low sodium soy sauce","low-sodium chicken stock","lower sodium beef broth","lump crab","m&m candies","macadamia nuts","macaroni and cheese mix","madras curry powder","malt drink mix","mandarin orange sections","mandarin oranges","mango","maple syrup","maraschino cherries","margarine","marinara sauce","marjoram","marsala wine","marshmallow fluff","marshmallows","masa harina","mascarpone","mat beans","matcha tea","mayonnaise","meat","meat","meatballs","medjool dates","mexican cream","meyer lemon juice","milk","milk chocolate chips","mint chutney","minute rice","miracle whip","mirin","miso","molasses","monterey jack cheese","mushroom","mussels","mustard","mustard seeds","napa cabbage","navel oranges","nectarine","new potatoes","non-fat greek yogurt","nonfat cool whip","nonfat milk","nori","nut butter","nut meal","nutella","nutritional yeast","oat flour","oats","oil","oil packed sun dried tomatoes","okra","old bay seasoning","olive oil","olives","onion","onion powder","onion soup mix","orange","orange bell pepper","orange juice","orange juice concentrate","orange liqueur","orange marmalade","orange oil","orange zest","oregano","oreo cookies","orzo","oyster sauce","oysters","palm sugar","pancetta","paneer","panko","papaya","paprika","parmigiano reggiano","parsley","parsley flakes","parsnip","part-skim mozzarella cheese","pasta","pasta salad mix","pasta sauce","pastry flour","peach","peanut butter","peanut butter chips","peanut butter cups","peanut oil","peanuts","pear liqueur","pearl barley","pearl onions","peas","pecan","pecan pieces","pecorino","penne","peperoncino","pepper jack cheese","peppercorns","peppermint baking chips","peppermint extract","pepperoni","peppers","pesto","pickle relish","pickles","pico de gallo","pie crust","pimento stuffed olives","pimientos","pine nuts","pineapple","pineapple chunks","pineapple in juice","pineapple juice","pink himalayan salt","pinto beans","pistachios","pita","pizza crust","pizza mix","plain greek yogurt","plain nonfat yogurt","plain yogurt","plantain","plum","plum tomatoes","poblano peppers","polenta","polish sausage","pomegranate juice","pomegranate molasses","pomegranate seeds","popcorn","poppy seeds","pork","Pork & Beans","pork belly","pork butt","pork chops","pork links","pork loin chops","pork loin roast","pork roast","pork shoulder","pork tenderloin","port","portabella mushrooms","pot roast","potato chips","potato starch","potatoes","poultry seasoning","powdered sugar","pretzel sandwiches","processed american cheese","prosciutto","provolone cheese","prunes","puff pastry","pumpkin","pumpkin pie filling","pumpkin pie spice","pumpkin puree","pumpkin seeds","queso fresco","quick cooking oats","quinoa","quinoa flour","radicchio","radishes","raisins","rajma masala","ramen noodles","ranch dressing","ranch dressing mix","raspberries","raspberry jam","raw cashews","raw shrimp","ready-to-serve Asian fried rice","real bacon recipe pieces","red apples","red bell peppers","red cabbage","red chilli","red delicious apples","red food coloring","red grapefruit juice","red grapes","red kidney beans","red lentils","red onion","red pepper flakes","red pepper powder","red potatoes","red velvet cookie","red wine","red wine vinegar","reduced fat shredded cheddar cheese","refried beans","refrigerated crescent rolls","refrigerated pizza dough","refrigerated sugar cookie dough","rhubarb","rib tips","rice","rice flour","rice krispies cereal","rice milk","rice noodles","rice paper","rice syrup","rice vinegar","rice wine","ricotta salata","ritz crackers","roast beef","roasted chicken","roasted nuts","roasted peanuts","roasted red peppers","roma tomatoes","romaine lettuce","root vegetables","rosemary","rotini pasta","rotisserie chicken","round steak","rub","rum extract","runny honey","russet potatoes","rutabaga","rye bread","rye meal","saffron threads","sage","sage leaves","salad dressing","salami","salmon fillet","salsa","salsa verde","salt","salt and pepper","salted butter","saltine crackers","sandwich bun","sauerkraut","sausage","sausage links","scotch bonnet chili","sea salt","sea scallops","seasoned bread crumbs","seasoned rice vinegar","seasoned salt","seasoning","seasoning blend","seeds","self-rising flour","semi sweet chocolate chips","serrano chile","sesame oil","sesame seed hamburger buns","sesame seeds","shallot","sharp cheddar cheese","sheeps milk cheese","shells","sherry","sherry","sherry vinegar","shiitake mushroom caps","short grain rice","short pasta","short ribs","shortbread cookies","shortcrust pastry","shortening","shredded cheddar cheese","shredded cheese","shredded chicken","shredded coconut","shredded mexican cheese blend","shredded mexican cheese blend","shredded mozzarella","silken tofu","sirloin steak","skim milk ricotta","skim vanilla greek yogurt","skin-on bone-in chicken leg quarters","skinless boneless chicken breast halves","skinless boneless chicken thighs","skinned black gram","slaw dressing","slaw mix","slivered almonds","smoked paprika","smoked salmon","smoked sausage","smooth peanut butter","snapper fillets","snow peas","soda water","sour cream","sourdough bowl","sourdough bread","soy milk","soy protein powder","soy sauce","spaghetti","spaghetti squash","sparkling wine","spelt flour","spicy brown mustard","spinach","sprite","sprouts","squash","sriracha sauce","steaks","steel cut oats","stevia","stew meat","stew vegetables","stock","store-bought phyllo","stout","strawberries","strawberry jam","strawberry jello","stuffing","stuffing mix","sub rolls","sugar","sugar snap peas","sugar syrup","sukrin sweetener","summer savory","summer squash","sunflower oil","sunflower seeds","sweet chilli sauce","sweet onion","sweet paprika","sweet pickle juice","sweet pickle relish","sweet potato","sweet tea","sweetened coconut","sweetened condensed milk","sweetened shredded coconut","swiss chard","swiss cheese","taco seasoning mix","taco shells","tahini","tamari","tapioca flour","tarragon","tart apple","tea bags","tequila","teriyaki sauce","thai basil","thai chiles","thai red curry paste","thick-cut bacon","tilapia fillets","toast","toffee bits","tofu","tomatillos","tomato juice","tomato paste","tomato puree","tomato sauce","tomato soup","tomatoes","top blade steak","top round steak","Top Sirloin","tortilla","tortilla chips","triple sec","truffle oil","tuna","turbinado sugar","turkey","turkey breast","turkey kielbasa","turmeric","turnips","unbleached flour","unsalted butter","unsmoked back bacon","unsweetened applesauce","unsweetened coconut milk","unsweetened shredded coconut","vanilla bean","vanilla bean paste","vanilla essence","vanilla extract","vanilla frosting","vanilla instant pudding mix","vanilla protein powder","vanilla wafers","vanilla yogurt","vegan cheese","vegan chocolate chips","vegan margarine","vegetable broth","vegetable oil","vegetarian bacon","vermouth","vinaigrette","vinegar","vodka","walnuts","water","water chestnuts","water-packed tuna","watercress","watermelon chunks","wheat bran","wheat germ","whipped cream","whipped topping","whipping cream","whiskey","white balsamic vinegar","white bread","white cake mix","white cheddar","white chocolate","white chocolate chips","white onion","white pepper","white whole wheat flour","white wine","white wine vinegar","whole allspice berries","whole chicken","whole coriander seeds","whole cranberry sauce","whole kernel corn","whole star anise","whole wheat bread","whole wheat flour","whole wheat tortillas","whole-grain mustard","wine","wine vinegar","winter squash","won ton wraps","worcestershire sauce","wraps","xanthan gum","yeast","yellow bell pepper","yellow cake mix","yellow onion","yogurt","yukon gold potato"];

var ingredients = document.getElementById("ingredients-items")
console.log(ingredients)

for (var i = 0; i<ingredientsList.length; i++) {
    var card = document.createElement('div')
    card.className = "col-6 col-md-4"
    card.id = ingredientsList[i]
    card.style.padding = "5px"
    var a = document.createElement('a')
    a.className = "portfolio-item"
    a.href = "#!"
    var caption = document.createElement('div')
    caption.className = "caption"
    var captionContent = document.createElement('div')
    captionContent.className = "caption-content"
    var header = document.createElement('div')
    header.className = "h2"
    header.innerHTML = ingredientsList[i]
    var text = document.createElement('p')
    text.className = "mb-0"
    text.innerHTML = ""
    var img = document.createElement('img')
    img.className = "img-fluid"
    img.src = "https://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?size=626&ext=jpg"
    card.append(a)
    a.append(caption)
    a.append(img)
    caption.append(captionContent)
    captionContent.append(header)
    captionContent.append(text)
    ingredients.append(card)
}

var list = document.querySelectorAll('.col-6');
var ingredientsArray = []
for(var i = 0;i<list.length; i++) {
    list[i].addEventListener('click', function(ev) {
        console.log(`${this.id}`)
        ev.target.classList.toggle('checked');
        console.log(this)
        
        if (ev.target.classList.contains('checked')) {
            ingredientsArray.push(this.id)
        } else {
            for(var j = 0; j<ingredientsArray.length; j++) {
                if (ingredientsArray[j] == this.id) {
                    ingredientsArray.pop(j)
                }
            }
        }
        console.log(ingredientsArray)

    }, false);

}

window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 || i == 75 || i == 84 ) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 74 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
    }
} );

var ingredientsArrayFilter = []

function setLetter( letter ) {
    var div = document.getElementById( "name" );
    div.innerHTML = letter;
    const filteredIngredientsList = ingredientsList.filter((ingredient) => ingredient.startsWith(letter.toLowerCase()));
    console.log(filteredIngredientsList);

    var div = document.getElementById('ingredients-items');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }

    var ingredients = document.getElementById("ingredients-items")
    console.log(ingredients)

    for (var i = 0; i<filteredIngredientsList.length; i++) {
        var card = document.createElement('div')
        card.className = "col-6 col-md-4"
        card.id = filteredIngredientsList[i]
        card.style.padding = "5px"
        var a = document.createElement('a')
        a.className = "portfolio-item"
        a.href = "#!"
        var caption = document.createElement('div')
        caption.className = "caption"
        var captionContent = document.createElement('div')
        captionContent.className = "caption-content"
        var header = document.createElement('div')
        header.className = "h2"
        header.innerHTML = filteredIngredientsList[i]
        var text = document.createElement('p')
        text.className = "mb-0"
        text.innerHTML = ""
        var img = document.createElement('img')
        img.className = "img-fluid"
        img.src = "https://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?size=626&ext=jpg"
        card.append(a)
        a.append(caption)
        a.append(img)
        caption.append(captionContent)
        captionContent.append(header)
        captionContent.append(text)
        ingredients.append(card)
    }


    var list = document.querySelectorAll('.col-6');
    for(var i = 0;i<list.length; i++) {
        list[i].addEventListener('click', function(ev) {
            console.log(`${this.id}`)
            ev.target.classList.toggle('checked');
            console.log(this)

            if (ev.target.classList.contains('checked')) {
                ingredientsArrayFilter.push(this.id)
            } else {
                for(var j = 0; j<ingredientsArrayFilter.length; j++) {
                    if (ingredientsArrayFilter[j] == this.id) {
                        ingredientsArrayFilter.pop(j)
                    }
                }
            }
            console.log(ingredientsArrayFilter)

        }, false);

    }
}

var filterResetButton = document.createElement("button");
filterResetButton.innerHTML = "Filter Reset";

document.getElementById("filterResetButton").addEventListener("click", function()  {
  // var ingredients = document.getElementById("filterResetButton")
  // console.log(ingredientsArrayFilter)
  console.log('filterResetButton')
  var ingredients = document.getElementById("ingredients-items")
  console.log(ingredients)

  var div = document.getElementById('ingredients-items');
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }

  for (var i = 0; i<ingredientsList.length; i++) {
      var card = document.createElement('div')
      card.className = "col-6 col-md-4"
      card.id = ingredientsList[i]
      card.style.padding = "5px"
      var a = document.createElement('a')
      a.className = "portfolio-item"
      a.href = "#!"
      var caption = document.createElement('div')
      caption.className = "caption"
      var captionContent = document.createElement('div')
      captionContent.className = "caption-content"
      var header = document.createElement('div')
      header.className = "h2"
      if (ingredientsArrayFilter.includes(ingredientsList[i])) {
        header.className = "checked"
      }
      header.innerHTML = ingredientsList[i]
      var text = document.createElement('p')
      text.className = "mb-0"
      text.innerHTML = ""
      var img = document.createElement('img')
      img.className = "img-fluid"
      img.src = "https://img.freepik.com/free-vector/white-background-with-3d-hexagonal-pattern-design_1017-28443.jpg?size=626&ext=jpg"
      card.append(a)
      a.append(caption)
      a.append(img)
      caption.append(captionContent)
      captionContent.append(header)
      captionContent.append(text)
      ingredients.append(card)
  }

  var list = document.querySelectorAll('.col-6');
  for(var i = 0;i<list.length; i++) {
      list[i].addEventListener('click', function(ev) {
          console.log(`${this.id}`)
          console.log(this.id)
          console.log(ingredientsArrayFilter)

          if (ingredientsArrayFilter.includes(this.id)) {
            console.log('inarray')
              if (ev.target.classList.contains('checked')) {
                console.log('checked')
                ev.target.classList.toggle('checked')
              }
              for(var j = 0; j<ingredientsArrayFilter.length; j++) {
                  if (ingredientsArrayFilter[j] == this.id) {
                      delete ingredientsArrayFilter[j]
                      ingredientsArrayFilter = ingredientsArrayFilter.filter(function(item){ return item != undefined; });
                  }
              }
          } else {
            ingredientsArrayFilter.push(this.id)
            ev.target.classList.toggle('checked')
          }
          console.log(ingredientsArrayFilter)

      }, false);

  }

});


document.getElementById("search-button").addEventListener("click", function() {
    for(var i = 0; i<ingredientsArray.length; i++) {
        if (i>0) {
            ingredientsArray[i] = "+" + ingredientsArray[i]
        }
    }
    sessionStorage.setItem('ingredients', ingredientsArray);
});

// var card = document.createElement('div')
// card.className = "col-lg-6"
// var a = document.createElement('a')
// a.className = "portfolio-item"
// a.href = "#!"
// var caption = document.createElement('div')
// caption.className = "caption"
// var captionContent = document.createElement('div')
// captionContent.className = "caption-content"
// var header = document.createElement('div')
// header.className = "h2"
// header.innerHTML = ""
// var text = document.createElement('p')
// text.className = "mb-0"
// text.innerHTML = ""
// var img = document.createElement('img')
// img.className = "img-fluid"
// img.src = ""
