const database = {
    baseDishes: [
        { id: 1, type: "Hummus and Hot Sauce", price: 5.00 },
        { id: 2, type: "Chicken Fried Lamb Kabob", price: 7.10 },
        { id: 3, type: "Hot Chicken Greek Salad", price: 9.65 },
        { id: 4, type: "Brussel SProut Moussaka", price: 9.65 },
        { id: 5, type: "Okrakopita", price: 9.65 },
        { id: 6, type: "Fried Onion and Grape Leaves", price: 9.65 },
        { id: 7, type: "Chess Baklava", price: 5.65 },
        { id: 8, type: "Gyro Biscuits", price: 4.65 },
        { id: 9, type: "Black Eye Pea Falafel", price: 3.65 },
        { id: 10, type: "Pecan Pastitsio", price: 2.65 },

    ],
    vegetables: [
        { id: 1, type: 'Okra',  price: 4.05 },
        { id: 2, type: 'Collard Greens', price: 7.82 },
        { id: 3, type: 'Swiss Chard', price: 14.70 },
        { id: 4, type: 'Corn', price: 19.97 },
        { id: 5, type: 'Brussel Sprouts', price: 12.38 },
        { id: 6, type: 'Sweet Potatoes', price: 9.38 },
        { id: 7, type: 'Grits', price: 3.38 },
        { id: 8, type: 'Friend Green Tomatoes', price: 6.38 },

    ],
    sides: [
        { id: 1, type: "Chicken Fried Steak", price: 12.42 },
        { id: 2, type: "Bacon", price: 73.04 } ,
        { id: 3, type: "Turkey Leg", price: 12.59 },
        { id: 4, type: "Ribs", price: 79.45 },
        { id: 5, type: "Catfish", price: 11.00 },
        { id: 6, type: "Souvlaki", price: 17.00 },

    ],
    customOrders: [
        {
            id: 1,
            sidesId: 3,
            vegetablesId: 2,
            baseDishesId: 3,
            price: 16.10
        }

    ],
    orderBuilder: {
    },
}


//export function return values

export const getBaseDishes = () => {
    return database.baseDishes.map(dish => ({ ...dish }))
}

export const getVegetables = () => {
    return database.vegetables.map(vegetable => ({ ...vegetable }))
}

export const getSides = () => {
    return database.sides.map(side => ({ ...side }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}


//setter functions

export const setBaseDishes = (id) => {
    database.baseDishes.baseDishesId = id
}

export const setVegetables = (id) => {
    database.vegetables.vegetablesId = id
}

export const setSides = (id) => {
    database.sides.sidesId = id
}

//take the temp choices and make them permanent

//this is part 2 
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
