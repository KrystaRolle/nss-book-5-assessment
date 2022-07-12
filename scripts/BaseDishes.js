import { getBaseDishes, setBaseDishes } from "./database.js"
//import basedishes array
const baseDishes = getBaseDishes()
//create click event 
//create radio button for all options
//link the click event to printed html list funciton
//create and export html list 


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "baseDishes") {
            setBaseDishes(parseInt(event.target.value))
        }
    }
)

//create and export html list funciton
export const BaseDishes = () => {
    let html = "<ul>"

    //what is value?
    // This is how you have been converting objects to <li> elements
    //create radio button for all options
    //link the click event to printed html list funciton
    for (const baseDish of baseDishes) {
        html += `<li>
            <input type="radio" name="baseDish" value="${baseDish.id}" /> ${baseDish.type}
        </li>`
    }

    html += "</ul>"
    return html
}