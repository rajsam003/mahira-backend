const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    type: {
        type:String,
        trim: true,
        maxlength : 32
    },
    description: {
        type: String,
        maxlength: 10000
    },
    specifications: [{
        required : true,
        type:String,
        trim: true,
        maxlength : 500
      }],
    pros: [{
        type: String,
        trim: true,
        maxlength: 200,
    }],
    cons: [{
        type: String,
        required : true,
        maxlength: 5000
    }],
    overallRating: {
        type: String,
        maxlength: 16
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    amazonLink: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    }
},
    { timestamps: true }
);


module.exports = mongoose.model("Product", productSchema);