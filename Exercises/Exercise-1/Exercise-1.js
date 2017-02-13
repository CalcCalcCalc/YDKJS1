const TAX_RATE = 0.08;
const PHONE_PRICE = 119.99;
const ACCESSORY_PRICE = 19.99;
const SPENDING_THRESHOLD = 2000;

var bankAccountBalance = 5000;

function PurchasePhone(){
    var totalPrice = PHONE_PRICE;
    totalPrice = AddAccessory(totalPrice);
    totalPrice = CalculateTax(totalPrice);
    bankAccountBalance -= totalPrice;
    console.log("-" + FormatPrice(totalPrice));
}

while (bankAccountBalance > PHONE_PRICE){
    console.log(FormatPrice(bankAccountBalance));
    PurchasePhone();
}
console.log(FormatPrice(bankAccountBalance));

function CalculateTax(price){
    price += price * TAX_RATE;
    return price;
}

function FormatPrice(price){
    return "£" + price.toFixed(2);
}

function AddAccessory(price){
    return price + ACCESSORY_PRICE;
}