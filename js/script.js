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
        a.href = "#!"
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
