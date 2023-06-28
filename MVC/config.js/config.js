//functions
import { OneRecipeView } from "../OneRecipeView.js"

export async function getJSON(url)
{
    const response = await fetch(url)
    const data = await response.json()
   console.log(data)

   if(data.status === "success")
   {
    return data
   }
   else if (data.status == "fail")
   {
    //Entered a invalid hash id
    //'Dispaly the message telling that "please enter the valid id"
    const rv = new OneRecipeView()
    rv.handleError()
   }
}

export async function sendJSON(url, uploadData)
{
    const response = await fetch(url, {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify(uploadData) 
    })
    const data = await response.json()
   console.log(data)

   if(data.status === "success")
   {
    return data
   }
   else if (data.status == "fail")
   {
    //Entered a invalid hash id
    //'Dispaly the message telling that "please enter the valid id"
    
    const rv = new OneRecipeView()
    rv.handleError()
   }
}