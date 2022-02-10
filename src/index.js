// write your code here
//CODE ALONG WITH LANTZ
//================================

//Global Variables
const baseURL= "http://localhost:3000"
const ramensURL = "http://localhost:3000/ramens"

//DOM selectors
const menu = document.querySelector('#ramen-menu')
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')

//Listeners
form.addEventListener("submit", handleAddRamen)

//Fetchers
function getAllRamens () {
    return fetch(ramensURL)
    .then(resp => resp.json())
}

//Render Functions
function renderAllRamen (ramenArr){
    ramenArr.forEach(ramenObj => renderOneMenu(ramenObj))

}


function renderOneMenu(ramenObj) {
   // console.log('ramenObj; ', ramenObj);
    const img=document.createElement("img")
    img.src = ramenObj.image
    menu.appendChild(img)

    img.addEventListener("click", () => renderDetail(ramenObj))


}

function renderDetail(ramenObj) {
    //console.log('ramObj: ', ramenObj);
    detail.innerHTML = `
     <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj}" />
    <h2 class="name">${ramenObj.name}</h2>
    <h3 class="restaurant">I${ramenObj.restaurant}</h3>
    `
    rating.textContent = ramenObj.rating
    comment.textContent = ramenObj.comment

}

//Event Handlers

function handleAddRamen(e) {
    e.preventDefault()
    //console.log('e: ', e); //=>test to see if it logs input from the log
    const name = e.target.name.value
    const restaurant = e.target.restaurant.value
    const image = e.target.image.value
    const rating = e.target.rating.value
    const comment = e.target["new-comment"].value
    const newRamenObj = {
        name: name,
        image: image,
        restaurant: restaurant,
        rating: rating,
        comment: comment

    }

    renderOneMenu(newRamenObj) //need to call the newRamenObj and put it through the function 
    form.reset() // this resets the form once something is inputted 
    //could also do e.target(reset)

}

//Initialize functions
getAllRamens().then(ramenArr => renderAllRamen(ramenArr))


//FIRST DELIVERABLE
//first we are fetching and returning as a json, which will be an array of objects.
//ew then initialize that function of fetch, take the ramen array and pass it to the function renderAllRamen
//function renderAllRamen, takes each object of the array and for each object it sends it to the functoin renderOneMenu
// function renderOneMenu takes each object that goes through it and console logs it.
  // it creates an image element and give the image a src. the src is going to come from the ramen object key "image"
  // it then appends the img to the menu div in the document

//SECOND DELIVERABLE
// we want to click on all the images, so we should keep it in the renderOneMenu because that does it with each one
//we create an event listener so when it image is click, we have a function we send it to to do soemthign
// sent to renderDetail function when the picture is clicked
//render detail takes the object puts an inner HTML to the id of detail. we copied the html document for how it should be and used interpolation so it changes iwht each
// we then added the rating and comment underneath  by getting the id of each and putting it in global scale
    // and then assignin the object key to the text content of each section

//THIRD DELIVERABLE
// grab the form element and delcare to variable in global 
// need to create listener for click, and then put in function that happens once clicked
// then create a event handler, which is our function for when clicked. function handleAddRamen
// the function takes in the event
// for forms/ submit we need to prevent the default on the event
// we create variables for the form. form layout is in html of what we need to include 
// we use the name attributes to create values and assign it to the that elements value ??
//we then create the cont newRamenObj, which is an object that has all the value. we then pass that object into the renderOneMenu
// the renderOneMenu already is created to go through the objects to add the image and then send it to the other function renderDetail which inputs the rest of the data
//we can then reset the form after it has been submitted by putting form.reset() since we already grabbe the form 




// ------------------------------------------------------
//MY ATTEMPT

// const url = "http://localhost:3000/ramens"

// function getData() {
//  fetch (url)
// .then (resp => resp.json())
// .then (data => 
//    (arrayObZj(data)))
//    //console.log (data))
// }
// getData();
    

// function arrayObj(data){
//     //console.log(data)
//     const ramenMenu = document.querySelector("#ramen-menu")
//     const imgOne = data[0].image
//     const img1 = document.createElement("img")
//     img1.src = imgOne
//     ramenMenu.append(img1)
//     img1.append(imgOne)

//     const imgTwo = data[1].image
//     const img2 = document.createElement("img")
//     img2.src = imgTwo
//     ramenMenu.append(img2)
//     img2.append(imgTwo)

//     const imgThree = data[2].image
//     const img3 = document.createElement("img")
//     img3.src = imgThree
//     ramenMenu.append(img3)
//     img3.append(imgThree)

//     const imgFour = data[3].image
//     const img4 = document.createElement("img")
//     img4.src = imgFour
//     ramenMenu.append(img4)
//     img4.append(imgFour)

//     const imgFive = data[4].image
//     const img5 = document.createElement("img")
//     img5.src = imgFive
//     ramenMenu.append(img5)
//     img5.append(imgOne)

//     img1.addEventListener("click", (e) => {
//         console.log (e.target)
//         const bigImg = document.querySelector('#ramen-detail')
//         bigImg.append(e.target)
//        // bigImg = document.querySelector('.detail-image')
        
       

//     }
//     )
// }

// ----------------------------------------------------------------------//
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