// write your code here

const url = "http://localhost:3000/ramens"

function getData() {
 fetch (url)
.then (resp => resp.json())
.then (data => 
   (arrayObj(data)))
   //console.log (data))
}
getData();
    

function arrayObj(data){
    //console.log(data)
    const ramenMenu = document.querySelector("#ramen-menu")
    const imgOne = data[0].image
    const img = document.createElement("img")
    img.src = imgOne
    ramenMenu.append(img)
    img.append(imgOne)

    const imgTwo = data[1].image
    const img2 = document.createElement("img")
    img2.src = imgTwo
    ramenMenu.append(img2)
    img2.append(imgTwo)

    const imgThree = data[2].image
    const img3 = document.createElement("img")
    img3.src = imgThree
    ramenMenu.append(img3)
    img3.append(imgThree)

    const imgFour = data[3].image
    const img4 = document.createElement("img")
    img4.src = imgFour
    ramenMenu.append(img4)
    img4.append(imgFour)

    const imgFive = data[4].image
    const img5 = document.createElement("img")
    img5.src = imgFive
    ramenMenu.append(img5)
    img5.append(imgOne)
}


// with the code below right now I'm not getting it from the server!! Need to revise the code so it pulls from the object

// function arrayObj(data) {
//         const ramenMenu = document.querySelector("#ramen-menu")
//         const img1 = document.createElement("img")
//         img1.src = "./assets/ramen/shoyu.jpg"
//         ramenMenu.appendChild(img1)

//         const img2 = document.createElement("img")
//         img2.src = "./assets/ramen/naruto.jpg"
//         ramenMenu.appendChild(img2)

//         const img3 = document.createElement("img")
//         img3.src = "./assets/ramen/nirvana.jpg"
//         ramenMenu.appendChild(img3)

//         const img4 = document.createElement("img")
//         img4.src = "./assets/ramen/gyukotsu.jpg"
//         ramenMenu.appendChild(img4)

//         const img5 = document.createElement("img")
//         img5.src = "./assets/ramen/kojiro.jpg"
//         ramenMenu.appendChild(img5)

//         img1.addEventListener("click", () => {
//             bigImg = document.querySelector('.detail-image')
//             bigImg.src = img1.src
//             bigImg.append(img1)
    
//         })
//         img2.addEventListener("click", () => {
//             bigImg = document.querySelector('.detail-image')
//             bigImg.src = img2.src
//             bigImg.append(img2)
//             ramenMenu.append(img2)
    
//         })
//         }
  
// arrayObj()