import { storeRecipeData } from "./MVC/model.js"
import { OneRecipeView } from "./MVC/OneRecipeView.js"
import { API_URL } from "./MVC/helpers/helpers.js"
import { getJSON } from "./MVC/config.js/config.js"
import { getAllData } from "./MVC/model.js"
import { AllRecipeView } from "./MVC/AllRecipeView.js"
import { allData } from "./MVC/model.js"
import { paginationData } from "./MVC/model.js"
import { MyPaginationView } from "./MVC/MyPaginationView.js"
import { ServingsView } from "./MVC/ServingsView.js"
import { BookmarkView } from "./MVC/BookmarkView.js"
import { AddRecipeView } from "./MVC/AddRecipeView.js"


const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")

// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")
const Text = document.getElementById("text")



searchBtn.addEventListener("click", function()
{
    getRecipeData()
})

async function getRecipeData()
{
   try
   {
       const searchItem = searchInput.value
       await getAllData(searchItem)
 
       const arv = new AllRecipeView()
       //arv.render(allData.allRecipeData)

       arv.render(paginationData(1))

       //Pagination Concept to get executed

       const mpv = new MyPaginationView()
       mpv.render(allData)
    }
   
   catch(e)
   {
     alert(e)
   }
}

//getRecipeData()

async function loadParticularRecipe()
{
  //Logic to collect the Hash ID
  const hashID = window.location.hash.slice(1)
  console.log(hashID)

 await storeRecipeData(hashID)

 const rv = new OneRecipeView()
 rv.render()
  
 
}

loadParticularRecipe()

function callHashChangeEventHandler()
{
  const r = new OneRecipeView()
  r.hashChangeEventHandler(loadParticularRecipe)
}

callHashChangeEventHandler()



function controlPagination(number)//number = 8
{
  const arv = new AllRecipeView()
 arv.render(paginationData(number))

 const mpv = new MyPaginationView()
  mpv.render(allData)
}


function callIt()
{
  const view = new MyPaginationView()
  view.getPageNumberFromButton(controlPagination)
}
callIt()



function servings()
{
  const sv = new ServingsView()
  sv.render()
}

servings()



function bookmark()
{
  const bv = new BookmarkView()
  bv.handleBookmarks()
}

bookmark()




function addRecipe()
{
  const arv = new AddRecipeView()
  arv.displayAddRecipeForm()
  arv.collectRecipeData()
}

addRecipe()






// window.addEventListener("hashchange",loadParticularRecipe)




/////////////////////////////////////////////////////////////////////////////////////////////////////

// const searchBtn = document.getElementById("search")
// const searchInput = document.getElementById("searchinput")

// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")
// const Text = document.getElementById("text")



// searchBtn.addEventListener("click", function()
// {
//     getRecipeData()
// })

// async function getRecipeData()
// {
//    try
//    {
//     const searchItem = searchInput.value

//     const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=16e30797-5f71-4a2a-8672-4788bafbac62`)
//     const recipeData = await response.json()
//     const recipeArray = recipeData.data.recipes
   
//     recipeArray.map(function(i)
//     {
//        const myPublisher = i.publisher 
//        const myTitle = i.title
//        const myImageUrl = i.image_url
//        const myId = i.id
//        console.log(myId)


       
//        return leftContainer.insertAdjacentHTML("afterbegin",`
       
//        <a href="#${myId}">
//        <div class="left-food-container">
//          <img src="${myImageUrl}" id="myimage"/>
//          <h2 id="mypublisher">${myPublisher}</h2>
//          <h3 id="mytitle">${myTitle}</h3>
//        </div>
//        </a>
//        `)
//        })
//    }
   
//    catch(e)
//    {
//      alert(e)
//    }
// }

// //getRecipeData()

// async function loadParticularRecipe()
// {
//   //Logic to collect the Hash ID
//   const hashID = window.location.hash.slice(1)
//   console.log(hashID)

//   // const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hashID}`)
//   // const recipeData = await response.json()
//   // //console.log(recipeData.data.recipe)
//   // const recipeObject = {
//   //   publisher: recipeData.data.recipe.publisher,
//   //   title: recipeData.data.recipe.title,
//   //   imageUrl: recipeData.data.recipe.image_url,
//   //   servings: recipeData.data.recipe.servings,
//   //   cookingTime: recipeData.data.recipe.cooking_time,
//   //   ingredients: recipeData.data.recipe.ingredients,
//   // }
//  //console.log(recipeObject)

  
//   rightContainer.innerText = ""
//   const rightData = `<div class="right-food-container">
//     <img class="right-image" src="${recipeObject.imageUrl}"/>
//     <h2 class="right-title">Title: ${recipeObject.title}</h2>
//     <h3 class="right-publisher">Publisher: ${recipeObject.publisher}</h3>
//     <h3 class="right-servings">Servings: ${recipeObject.servings}</h3>
//     <h3 class="right-cooking-time">Cooking Time: ${recipeObject.cookingTime} Min</h3>
    
//     <div class="ingredients">
//     ${recipeObject.ingredients.map(function(i)
//       {
//         //console.log(i)
//         return`<div>
//             <span>${i.description}</span> --
//             <span>${i.quantity}</span>
//             <span>${i.unit}</span>
//         </div>`
//       }).join("")}
//     </div>
//   </div>`

//   rightContainer.insertAdjacentHTML("afterbegin",rightData)
// }

// loadParticularRecipe()

// window.addEventListener("hashchange",loadParticularRecipe)