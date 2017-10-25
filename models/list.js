const mongoose = require('mongoose');

//Define BeerListSchema with productName, productType, productRating
const BeerListSchema = mongoose.Schema({
    productName: {type: String},
    productType: {type: String},
    productRating:{type: Number}
});

const BeerList = module.exports = mongoose.model('BeerList', BeerListSchema);

//BeerList.find() returns all the lists
module.exports.getAllLists = (callback) =>{
    BeerList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
    newList.save(callback);
}


//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListById = (id, callback) => {
    let query = {_id: id};
    BeerList.remove(query, callback);
}