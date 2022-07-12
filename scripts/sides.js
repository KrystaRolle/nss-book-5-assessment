import { getSides, setSides } from "./database.js"
//import sides array
//save function to variable
const sides = getSides()
//create click event 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "sides") {
            setSides(parseInt(event.target.value))
        }
    }
)

//create and export html list funciton
export const Sides = () => {
    let html = "<ul>"

    //what is value?
    // This is how you have been converting objects to <li> elements
    //create radio button for all options
    //link the click event to printed html list funciton
    for (const side of sides) {
        html += `<li>
            <input type="radio" name="side" value="${side.id}" /> ${side.type}
        </li>`
    }

    html += "</ul>"
    return html
}

