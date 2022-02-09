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
        const img = document.createElement("img")
        img.src = "http://localhost:3000/ramens/1"
        ramenMenu.appendChild(img)
        img.innerHTML = data[0].image
        ramenMenu.append(img)

        console.log(img)
       

    }
  //getData();

