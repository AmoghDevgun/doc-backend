import { Schema, model } from "mongoose"

// 👇 Use type assertion to completely bypass inference
const doctorSchema = new (Schema as any)({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    rating: { type: Number, default: 0 },
    experience: { type: Number, default: 0 },
    available: { type: Boolean, default: true },

    availability: {
        specificDates: [
            {
                date: { type: Date, required: true },
                timeSlots: [
                    {
                        start: { type: String, required: true },
                        end: { type: String, required: true }
                    }
                ]
            }
        ],
        recurring: [
            {
                dayOfWeek: {
                    type: String,
                    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    required: true
                },
                timeSlots: [
                    {
                        start: { type: String, required: true },
                        end: { type: String, required: true }
                    }
                ]
            }
        ]
    }
})

export default (model as any)("Doctor", doctorSchema)
