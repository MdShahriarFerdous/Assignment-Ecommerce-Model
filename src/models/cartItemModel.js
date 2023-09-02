const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //same as mongoose.Schema.Types.ObjectId

const cartItemSchema = new mongoose.Schema({
	user: { type: ObjectId, ref: "User", required: true },
	product: { type: ObjectId, ref: "Product", required: true },
	quantity: {
		type: Number,
		required: true,
		min: 1, // Assuming quantity must be a positive integer.
	},
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
