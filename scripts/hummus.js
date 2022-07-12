import { Vegetables } from "./vegetables.js"
import { BaseDishes } from "./BaseDishes.js"
import { Sides } from "./sides.js"
import { Orders } from "./customOrder.js"

//html 
//create 3 radion button options
//export function to main
//import all function results

export const Hummus = () => {
    return `
        <h1>Laura Kathryn's House of Hummus</h1>

        <article class="choices">
            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${Vegetables()}
            </section>
            <section class="choices__baseDishes options">
                <h2>BaseDishes</h2>
                ${BaseDishes()}
            </section>
            <section class="choices__sides options">
                <h2>Sides</h2>
                ${Sides()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Orders</h2>
          ${Orders()}
        </article>
    `
}