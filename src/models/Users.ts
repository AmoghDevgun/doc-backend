import { Schema, model } from "mongoose"

const userSchema = new (Schema as any)(
{
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, index: true },
	password: { type: String, required: true },
	age: { type: Number },
	gender: { type: String },
	address: { type: String },
	phone: { type: String },
},
{
	timestamps: true,
	versionKey: false,
	toJSON:
	{
		transform(_doc: any, ret: any)
		{
			delete ret.password
			return ret
		}
	}
})

export default (model as any)("User", userSchema)
