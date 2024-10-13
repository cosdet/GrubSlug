const path = require('path');
const db = require('diskdb');

const pathToFolder = path.join(__dirname, '/db');
db.connect(pathToFolder, ['listings'])

//db.listings.save(example);

const jsonFile = path.join(pathToFolder, '/listings.json');
const data = jsonFile;
console.log(data);

function addToCart() {
    const item_text_id = document.getElementById('item_name')
    const item_text = item_text_id.textContent || item_text_id.innerText
}
/*
Example Listing:
const krabbypatty = {
    item_name: "Krabby Patty",
    item_description: "Made by THE Bo le Ponge",
    item_price: 10.00,
    item_ingreds: "Crabs, Bread, Secret Formula",
};
const kelpshake = {
    item_name: "Kelp Shake",
    item_description: "Ya like Kelp?",
    item_price: 5.25,
    item_ingreds: "Kelp, Water, Salt",
};

const example = {
    seller: "Spongebob",
    bio: "I'm secretly freakbob.",
    picture: "/images/Spongebob.png",
    location: [34.052235, -118.243683],
    items: [krabbypatty, kelpshake],
};
const example = {
    seller: "",
    bio: "",
    picture: "",
    location: [0.0, 0.0],
    items: [{
        item_name: ""
        item_description: ""
        item_price: 0.00
        item_ingreds: ""
    }],
};
db.lisitngs.save(example);
const seller_items = db.listings.find({seller: ???}).items;
*/ 

