const mongoose = require("mongoose");
const db =mongoose .connect("mongodb://0.0.0.0:27017/ecommerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
 mongoose.set('strictQuery', true);





const userschema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      Password: {
        type: String,
        required: true,
        // minlength: 5,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phonenumber:{
        type:String,
        // index:true,
        // minlength:10,
        unique:true,
      },
      blocked:{
        type:Boolean,default:false
      },
      CreatedAt:{
      type:Date,
      default:Date.now,
      },
   
})
const categorySchema= new mongoose.Schema({
  CategoryName:{
    type:String
  },

  categoryblocked:{
    type:Boolean,
    default:false
  },

})

 const productSchema=new mongoose.Schema({
    Productname:{
      type:String
    },
    ProductDescription:{
      type:String
    },
    Quantity:{
      type:Number
    },
    Image:{
      type:Array,
     

    },
    Price:{
  type:Number
    },
    category:{
      type:String
    },

    blocked:{
      type:Boolean,
      default:false
    },

    oldPrice:{
      type:Number
    },

    offerpercentage:{
      type:Number
    }
    

 })





const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  cartItems: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      Quantity: { type: Number, default: 1 },
      Price: { type: Number },
    },
  ],
});



const addressSchema = new mongoose.Schema({


  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  Address: [
    {
      fname: { type: String },
      lname: { type: String },
      street: { type: String },
      apartment: { type: String },
      city: { type: String },
      state: { type: String },
      pincode: { type: Number },
      mobile: { type: Number },
      email: { type: String }
    }
  ]


})

const wishSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  wishitems: [{
    productId: { type: mongoose.Schema.Types.ObjectId },
  }],
  addedAt: {
    type: Date,
    default: Date.now
  }
});



module.exports={
 user :mongoose.model('user',userschema),
category:mongoose.model('Category',categorySchema),
product:mongoose.model('product',productSchema),
cart:mongoose.model('cart',CartSchema),
wishlist: mongoose.model("wishlist", wishSchema),
address: mongoose.model('address', addressSchema),
};
