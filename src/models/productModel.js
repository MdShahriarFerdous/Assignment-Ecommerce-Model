const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //same as: mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: ture },
		description: { type: String },
		price: { type: Number, required: ture, min: 0.01 }, // Assuming a minimum price of 0.01 (positive value)
		stock: { type: Number, required: ture, min: 0 }, // Ensures stock is a non-negative integer.
		category: { type: String, required: ture },
		imageURL: { type: String },
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
