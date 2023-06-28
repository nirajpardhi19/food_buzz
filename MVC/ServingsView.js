import { anotherRecipeObject } from "./model.js"

export class ServingsView
{
    rightContainer

    render()
    {
        this.rightContainer = document.getElementById("right-container")
        this.handleServings()
    }

    handleServings()
    {
        this.rightContainer = document.getElementById("right-container")
        //Logic which will identify INCREASE AND DECREASE buttons
        this.rightContainer.addEventListener("click",function(e)
        {
            const btnName = e.target.innerText

            if(btnName == "INCREASE")
            { 
                this.rightContainer = document.getElementById("right-container")
                //Logic to increase the count of the servings
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings

                anotherRecipeObject.recipeObject.servings = myServings + 1

                anotherRecipeObject.recipeObject.ingredients.map(function(i)
                {
                    //newQuantity = (oldQuantity * servings) / 5

                    i.quantity = Math.floor((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                const recievedData = anotherRecipeObject.recipeObject

                this.rightContainer.innerText = ""

                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
    <img class="right-image" src="${recievedData.imageUrl}"/>
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
        )}
            else if(btnName == "DECREASE")
            {
                //Logic to decrease the count of the servings
                this.rightContainer = document.getElementById("right-container")
                //Logic to increase the count of the servings
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings

                anotherRecipeObject.recipeObject.servings = myServings - 1

                anotherRecipeObject.recipeObject.ingredients.map(function(i)
                {
                    //newQuantity = (oldQuantity * servings) / 5

                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                const recievedData = anotherRecipeObject.recipeObject

                this.rightContainer.innerText = ""

                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
    <img class="right-image" src="${recievedData.imageUrl}"/>
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
        )}
            
        })
    }
}