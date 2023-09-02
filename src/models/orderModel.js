const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //same as mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
	user: { type: ObjectId, ref: "User", required: true },
	items: [
		{
			product: { type: ObjectId, ref: "Product", required: true },
			quantity: { type: Number, required: true, min: 1 },
		},
	],
	totalAmount: { type: Number, required: true, min: 0 },
	shippingAddress: { type: String, required: true },
	status: { type: String, required: true, default: "Pending" },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
