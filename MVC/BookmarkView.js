import { anotherRecipeObject } from "./model.js"
import { collectAndStoreBookmark } from "./model.js"

export class BookmarkView
{
    handleBookmarks()
    {
        //Logic to perform click on that button and.....
        this.right = document.getElementById("right-container")
        this.right.addEventListener("click", function(e)
        {
             const btnName = e.target.innerText
             if(btnName == "Mark as Bookmark")
             {     
                 //Logic to get the title amd store
                const MyTitle = anotherRecipeObject.recipeObject.title
                let titleArray = collectAndStoreBookmark(MyTitle)
                
                this.bookmark = document.getElementById("childbookmark")
                //console.log(this.bookmark)
                this.bookmark.innerText = ""

                titleArray.map((i)=>
                {
                   
                   this.bookmark.insertAdjacentHTML("afterbegin",`<h3>${i}</h3>`)

                })
  

             }

        })
    }
}