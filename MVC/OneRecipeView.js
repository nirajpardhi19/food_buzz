import { anotherRecipeObject } from "./model.js";

export class OneRecipeView
{

    rightContainer;
    rightData;


render()
{
    this.rightContainer = document.getElementById("right-container")
    this.clear()
   let collectedData = anotherRecipeObject.recipeObject
   this.rightData = this.actualLogic(collectedData)
    this.addDataToContainer()
} 

clear()
{
   this.rightContainer.innerText = ""
}

actualLogic(recievedData)
{
   return`<div class="right-food-container">
    <img class="right-image" src="${recievedData.imageUrl}"/>
    <button>Mark as Bookmark</button>
    <h2 class="right-title">Title: ${recievedData.title}</h2>
    <h3 class="right-publisher">Publisher: ${recievedData.publisher}</h3>
    <h3 class="right-servings">Servings: ${recievedData.servings}</h3>
    <button id="inc">INCREASE</button>
    <button id="dec">DECREASE</button>
    <h3 class="right-cooking-time">Cooking Time: ${recievedData.cookingTime} Min</h3>
    
    <div class="ingredients">
       ${recievedData.ingredients.map(function(i)
        {
         //console.log(i)
         return`<div>
                  <span>${i.description}</span> --
                  <span>${i.quantity}</span>
                  <span>${i.unit}</span>
                </div>`
          }).join("")}

    </div>
</div>`
}

addDataToContainer()
{
    this.rightContainer.insertAdjacentHTML("afterbegin", this.rightData)
}

hashChangeEventHandler(data) //data = loadParticularRecipe
{
    window.addEventListener("hashchange", data)
}

handleError()
{
    this.rightContainer = document.getElementById("right-container")
    this.rightContainer.innerText =""
    this.rightContainer.innerText = "Please enter a valid ID!"
}


}