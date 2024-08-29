const mongoose = require('mongoose');

const PopularSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    category : {
        type : String,
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    discountedPrice: {
        type: String,
        required: true
    },
    originalPrice: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    assuredBadge: {
        type: Boolean,
      
    },
    freeDelivery: {
        type: Boolean,
        
    }
})

const Popular = mongoose.model('Popular', PopularSchema);

module.exports = Popular;