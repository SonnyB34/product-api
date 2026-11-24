import mongoose from 'mongoose';

// The bluprint for every product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    //the price must be more than 0 not equal to 0
    validate: {
      validator: (value) => value > 0,
      message: 'Price must be greater than 0',
    },
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
