const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //same as: mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: ture },
		lastName: { type: String, required: ture },
		email: { type: String, required: ture, unique: true },
		password: { type: String, required: ture },
		address: { type: String },
		phoneNumber: { type: String },
		cart: [{ type: ObjectId, ref: "CartItem" }],
		orders: [{ type: ObjectId, ref: "Order" }],
	},
	{ timestamps: true, versionKey: false }
);

userSchema.pre("remove", async function (next) {
	try {
		// Removing associated cart items
		await mongoose.model("CartItem").deleteMany({ user: this._id });

		// Removing associated orders
		await mongoose.model("Order").deleteMany({ user: this._id });
		next();
	} catch (error) {
		next(error);
	}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
