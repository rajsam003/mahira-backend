const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
        maxlength : 32
    },
    size: {
      type: String,
        trim: true,
        maxlength : 32
    },
    type: {
        type:String,
        trim: true,
        maxlength : 32
    },
    color: {
      required : true,
      type:String,
      trim: true,
      maxlength : 32
    },
    price:{
      type: Number,
      trim: true,
      required: true,
      default: 0,
      validate(value){
          if(value<0){
              throw new Error('Price must be positive number')
          }
      }
    },
    description : {
        type: String,
        maxlength : 2000
    },
    category : {
        type: ObjectId,
        ref : 'Category',
        required: true
    },
    quantity: {
        type: Number
    },
    sold:{
        type: Number,
        default: 0
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    shipping: {
        required: false,
        type: Boolean
    }
}, 
{timestamps: true}
);


module.exports = mongoose.model("Product", productSchema);