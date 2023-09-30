const mongoose = require('../database/db');
const Schema = mongoose.Schema;

var property_schema = new Schema({
    property_name: {
        type: String,
        maxlength: [50, "product_name cannot exceed 30 charactor"],
        min: [4, "product_name should be more than 4 charactor"],
        unique: true
    },
    description: {
        type: String,
        maxlength: [200, "description cannot exceed 200 charactor"],
    },
    price: {
        type: Number,
        trim: true
    },
    rating: {
        type:Number,
        default:1
    },
    photo:{
        type: String,
    },
    address:{
        type: Object,
    },
    aminites:[],
    property_type:{
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
    available_date: {
        type: Date
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Property', property_schema);
module.exports = Product;