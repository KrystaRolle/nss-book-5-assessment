import { getVegetables, setVegetables } from "./database.js"

const vegetables = getVegetables()

//import vegetables array
//create click event 
//create radio button for all options
//link the click event to printed html list funciton
//create and export html list 


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vegetable") {
            setVegetables(parseInt(event.target.value))
        }
    }
)

//create and export html list funciton
export const Vegetables = () => {
    let html = "<ul>"

    //what is value?
    // This is how you have been converting objects to <li> elements
    //create radio button for all options
    //link the click event to printed html list funciton
    for (const vegetable of vegetables) {
        html += `<li>
            <input type="radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.type}
        </li>`
    }

    html += "</ul>"
    return html
}