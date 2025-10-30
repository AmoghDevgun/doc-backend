import mongoose from "mongoose"
import Doctor from "../models/Doctor.ts"
import dotenv from "dotenv"

dotenv.config()

const specializations = [
	"Cardiology",
	"Neurology",
	"Dermatology",
	"Pediatrics",
	"Orthopedics"
]

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]
const randomTime = () =>
{
	const hours = 9 + Math.floor(Math.random() * 8) // 9 AM - 5 PM
	const end = hours + 2
	return {
		start: `${hours}:00 AM`,
		end: `${end > 12 ? end - 12 : end}:00 ${end >= 12 ? "PM" : "AM"}`
	}
}

async function populateDoctors()
{
	try
	{
		await mongoose.connect("mongodb+srv://amoghdevguntech_db_user:7J2H3wjDR6A7Td6c@cluster0.fydfpyt.mongodb.net/")
		console.log("✅ Connected to MongoDB")

		await Doctor.deleteMany({})
		console.log("🧹 Cleared existing doctors")

		const doctors = []

		for (let i = 1; i <= 50; i++)
		{
			const spec = random(specializations)
			const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1)
			const exp = Math.floor(Math.random() * 20) + 1

			// Create 2 random recurring days
			const recurringDays = Array.from({ length: 2 }, () => ({
				dayOfWeek: random(daysOfWeek),
				timeSlots: [randomTime()]
			}))

			// Create 2 specific dates
			const specificDates = Array.from({ length: 2 }, (_, idx) =>
			{
				const date = new Date()
				date.setDate(date.getDate() + (idx + 1) * 2)
				return {
					date,
					timeSlots: [randomTime()]
				}
			})

			doctors.push({
				name: `Dr. ${["Aarav", "Aasha", "Rohan", "Kavya", "Ishaan", "Meera", "Vikram", "Nisha"][Math.floor(Math.random() * 8)]} ${["Sharma", "Verma", "Mehta", "Kapoor", "Singh", "Gupta"][Math.floor(Math.random() * 6)]}`,
				specialization: spec,
				rating: Number(rating),
				experience: exp,
				availability: {
					recurring: recurringDays,
					specificDates
				}
			})
		}

		await Doctor.insertMany(doctors)
		console.log("✅ 50 Doctors populated successfully")
		mongoose.connection.close()
	}
	catch (err)
	{
		console.error("❌ Error populating doctors:", err)
		mongoose.connection.close()
	}
}

populateDoctors()
