const path = require('path');
const db = require('diskdb');

const pathToFolder = path.join(__dirname, '/db');
db.connect(pathToFolder, ['listings'])

const food1 = {
    item_name: "Tacos",
    item_picture: "images/tacos",
    item_description: "Tacos! And it's not even tuesday!",
    item_price: 12.20,
    item_ingreds: "Corn Tortilla, Beef",
};
const food2 = {
    item_name: "TPumps",
    item_picture: "images/tpumps",
    item_description: "So many flavors!",
    item_price: 6.25,
    item_ingreds: "Tapioca Pearls, Milk, Tea",
};

const example = {
    seller: "ACM Student Organization",
    bio: "A student organization encouraging the knowledge of computation.",
    address: "E2-180",
    hours: "Wednesdays: 4:00PM - 6:00PM",
    picture: "images/acm.png",
    location: [36.989920, -122.064790],
    items: [food1, food2],
};

db.listings.save(example);
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

