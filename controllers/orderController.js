
//renders home
const homepageView = (req, res) => {
    res.render("home", {
    } );
}


//renders menu
const menuView = (req, res) => {
    res.render("menu", {
        drink: [
        {drinkname: 'Champa Champagne', drinkInfo: "Cognac, angostura bitters, champagne with a cherry on top", },
        {drinkname: 'Beerus', drinkInfo: "Bodega cat whiskey, gin, grapefruit beer, and a mix of spices"}
        ]
    } );
}
module.exports =  {
    homepageView,
    menuView
};