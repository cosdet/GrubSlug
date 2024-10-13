const path = require('path');
const db = require('diskdb');

const pathToFolder = path.join(__dirname, '/db');
db.connect(pathToFolder, ['listings'])

const krabbypatty = {
    item_name: "Fries",
    item_description: "Fried to crispy perfection",
    item_price: 3.95,
    item_ingreds: "Potatoes, Peanut Oil, Salt",
};
const kelpshake = {
    item_name: "Dr. Pepper",
    item_description: "The king of all sodas.",
    item_price: 1.25,
    item_ingreds: "It's a secret...",
};

const example = {
    seller: "Oakes Cafe",
    bio: "A serene cafe serving only the finest delicacies on UCSC Campus.",
    address: "Oakes Cafe",
    hours: "Weekdays: 9:00AM - 11:30PM",
    picture: "/images/oakescafe.png",
    location: [36.989920, -122.064790],
    items: [krabbypatty, kelpshake],
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

