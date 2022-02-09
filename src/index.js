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
    


function arrayObj(data) {
        const ramenMenu = document.querySelector("#ramen-menu")
        const img1 = document.createElement("img")
        img1.src = "./assets/ramen/shoyu.jpg"
        ramenMenu.appendChild(img1)

        const img2 = document.createElement("img")
        img2.src = "./assets/ramen/naruto.jpg"
        ramenMenu.appendChild(img2)

        const img3 = document.createElement("img")
        img3.src = "./assets/ramen/nirvana.jpg"
        ramenMenu.appendChild(img3)

        const img4 = document.createElement("img")
        img4.src = "./assets/ramen/gyukotsu.jpg"
        ramenMenu.appendChild(img4)

        const img5 = document.createElement("img")
        img5.src = "./assets/ramen/kojiro.jpg"
        ramenMenu.appendChild(img5)
       
       // img.innerHTML = data[0].image
        //ramenMenu.append(img)

       // console.log(img)
       

    }
  //getData();

