import { recipe } from "./model.js"

export class AddRecipeView
{
    right
    addBtn

    displayAddRecipeForm()
    {
        this.right = document.getElementById("right-container")
        this.addBtn = document.getElementById("add-recipe")

        this.addBtn.addEventListener("click", ()=>
        {
            const addRecipeForm = `<form class="formcontainer" method="POST">
                <label>Title:</label>
                <input type="text" placeholder="Enter the Title..." name="title" value="TITLE 1" /><br></br>

                <label>Image URL:</label>
                <input type="text" placeholder="Enter the image url..." name="imageurl" value="https://tse2.mm.bing.net/th?id=OIP.f5_NQm3s_Hkxogg32MIVcgHaEo&pid=Api&P=0&h=180"/><br></br>

                <label>Cooking Time:</label>
                <input type="text" placeholder="Enter cooking time..." name="cookingtime" value="40"/></br></br>

                <label>Servings:</label>
                <input type="text" placeholder="Enter the servings..." name="servings" value="4"/><br></br>

                <label>Publisher:</label>
                <input type="text" placeholder="Enter the publisher..." name="publisher" value="PUBLISHER 1"/><br></br>

                <label>Ingredient 1:</label>
                <input type="text" placeholder="Enter the ingredient 1..." name="ingredient 1" value="2,kg,Rice" /><br></br>

                <label>Ingredient 2:</label>
                <input type="text" placeholder="Enter the ingredient 2..." name="ingredient 2" value="4,kg,Dal" /><br></br>

                <label>Source URL:</label>
                <input type="text" placeholder="Enter the source url..." name="source url" value="https://123.com" /><br></br>

                <input type="button" value="Add" id="add"/>

            </form>  `

            this.right.innerText = ""
            return this.right.insertAdjacentHTML("afterbegin", addRecipeForm)
        })
    }

    collectRecipeData()
    {
        //Logic to collect thr recipe details that is entered
        this.right = document.getElementById("right-container")

        this.right.addEventListener("click", (event)=>
        {
            event.preventDefault()
            //Collect the data from the form

            const title = event.target.form[0].value
            const iamgeUrl = event.target.form[1].value
            const cookingTime = event.target.form[2].value
            const servings = event.target.form[3].value
            const publisher = event.target.form[4].value
            const ingredient1 = event.target.form[5].value
            const ingredient2 = event.target.form[6].value
            const sourceUrl = event.target.form[7].value


            const newRecipeData = {
                title: title,
                iamgeUrl: iamgeUrl,
                cookingTime: cookingTime,
                servings: servings,
                publisher: publisher,
                ingredient1: ingredient1,
                ingredient2: ingredient2,
                sourceUrl: sourceUrl    
            }

                // console.log(newRecipeData)

                recipe(newRecipeData)
        })
        
    }

    displayData(myId, myTitle, myPublisher, myImageUrl)
    {

        this.leftContainer = document.getElementById("left-container")

        return this.leftContainer.insertAdjacentHTML("afterbegin",`
           
        <a href="#${myId}">
        <div class="left-food-container">
          <img src="${myImageUrl}" id="myimage"/>
          <h2 id="mypublisher">${myPublisher}</h2>
          <h3 id="mytitle">${myTitle}</h3>
        </div>
        </a>
        `)
    }
}