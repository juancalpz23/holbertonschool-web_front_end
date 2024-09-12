
const stock = {
    macbook: 2,
    iphone: 4,
};

function processPayment(itemName) {
    stock[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName}  in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    let itemNameFormated = itemName.toLowerCase();
    if (!stock[itemNameFormated]) {
        return;
    }

    stock[itemNameFormated] == 0 ?
        callbackError(itemNameFormated) :
        callbackPayment(itemNameFormated);
}

let text = prompt(
    "Please enter the item you would like to purchase (Macbook, iPhone)"
);
processOrder(text, processPayment, processError);
