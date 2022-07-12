import { getOrders, getVegetables, getBaseDishes, getSides, addCustomOrder } from "./database.js"

//store choices in database
//prints order to screen
//clear users choice
//do pricing here
//import all map functions

const baseDishes = getBaseDishes()
const vegetables = getVegetables()
const sides = getSides()


const buildOrderListItem = (order) => {
    // const sizePricing = sizesPrice()
    // const stylesPricing = stylesPrice()
let totalCost = 0 

    let dish = baseDishes.find(
        (baseDish) => {
            if (baseDish.id === order.baseDishesId)
           return totalCost += baseDish.price 
        }
    )

    let veg = vegetables.find(
        (vegetable) => {
            if (vegetable.id === order.vegetablesId)
           return totalCost += vegetable.price
        }
    )

    
    let sid = sides.find(
        (side) => {
            if (side.id === order.sidesId) {
               return totalCost += side.price
            }
        }
    )


 
// add all pricing together
    
    
    return `<li>
    Order# ${order.id} costs $${totalCost}
    </li>`
    // Order #${order.id} was placed on ${order.timestamp}
}





export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



//add click event here to orders button. this will be part 1
//link event by the id is orderButton
//for creating new data

document.addEventListener(
    'click',
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === 'orderButton') {
            //create new object to save in the database
            addCustomOrder()
           
        }
     
    })