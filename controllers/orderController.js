



//renders home
const homepageView = (req, res) => {
    res.render("home", {
    } );
}
//renders queue page
const queueView = (req, res) => {
    var orderArr = require('../models/orderModel');
    res.render("queue", {
        orderArr
    } );
}

//renders menu
const menuView = (req, res) => {
    var drink = require('../models/drinks');
    var orderArr = require('../models/orderModel');
   // console.log(drink);
    res.render("menu", {
        orderArr,
        drink /*drink: [
        {drinkname: 'Champa Champagne', drinkInfo: "Cognac, angostura bitters, champagne with a cherry on top", },
        {drinkname: 'Beerus', drinkInfo: "Bodega cat whiskey, gin, grapefruit beer, and a mix of spices"}
        ]*/
    } );
}
module.exports =  {
    homepageView,
    menuView,
    queueView
};