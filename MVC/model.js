import { API_URL } from "./helpers/helpers.js"
import { getJSON, sendJSON } from "./config.js/config.js"
import { AddRecipeView } from "./AddRecipeView.js"

//Storing/handling the data

export const anotherRecipeObject = 
{
    recipeObject: {}
}

export async function storeRecipeData(id)
{
    const recipeData = await getJSON(`${API_URL}/${id}`)

//   const response = await fetch(`${API_URL}/${id}`)
//   const recipeData = await response.json()
  //console.log(recipeData.data.recipe)

  anotherRecipeObject.recipeObject = 
  {
    publisher: recipeData.data.recipe.publisher,
    title: recipeData.data.recipe.title,
    imageUrl: recipeData.data.recipe.image_url,
    servings: recipeData.data.recipe.servings,
    cookingTime: recipeData.data.recipe.cooking_time,
    ingredients: recipeData.data.recipe.ingredients,
  }
  //console.log(anotherRecipeObject)
}

export const allData = {
  allRecipeData: [],
  page: 1,
  dataPerPage: 10
}

export async function getAllData(searchItem)
{
    const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=16e30797-5f71-4a2a-8672-4788bafbac62`)
    console.log(recipeData)
    const recipeArray = recipeData.data.recipes
    allData.allRecipeData = recipeArray


  console.log(allData)
}

export function paginationData(page = allData.page)//1,2,3,4,5
{
  allData.page = page
  const start = (page - 1) * allData.dataPerPage
  const stop = page * allData.dataPerPage
  return allData.allRecipeData.slice(start, stop)
}


let bookmarksArray = []

export function collectAndStoreBookmark(title)
{
  //Collect the title and store it
  bookmarksArray.push(title)

  // stringify()--> convert Javascript data --> JSON
  localStorage.setItem("bookmark", JSON.stringify(bookmarksArray))
//parse()---> convert JSON to javascript
  const titleData = JSON.parse(localStorage.getItem("bookmark"))
  
  return titleData

}

export async function recipe(data)
{
  console.log(data)
  //data (javascript object --> array)

 console.log(Object.entries(data))

  const ingredients = Object.entries(data).filter(function(i)
  {
    return i[0].startsWith("ingredient")
  }).map(function(j)
  {
    const data = j[1].split(",")
    const [ quantity, unit, description] = data

    return {quantity, unit, description}

  })
 // console.log(ingredients)

 const newData = {
  title: data.title,
  image_url: data.imageUrl,
  ingredients: ingredients,
  cooking_time: data.cookingTime,
  servings: data.servings,
  publisher: data.publisher,
  source_url: data.sourceUrl
 }
//console.log(newData)

// newData -->send to an API(POST) --> collect --> add

   const output = await sendJSON("https://forkify-api.herokuapp.com/api/v2/recipes?key=33f66abb-c3c6-41b0-a3f6-b5211a034b6d", newData)
   const outputData = (output.data.recipe)

    const myId = outputData.id
    const myTitle = outputData.title
    const myPublisher = outputData.publisher
    const myImageUrl = outputData.image_url

    const arv = new AddRecipeView()
    arv.displayData(myId, myTitle, myPublisher, myImageUrl)

    console.log(myId, myTitle, myPublisher)
}