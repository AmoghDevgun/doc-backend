import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js"
import fs from "fs"
import path from "path"
import { Readable } from "stream"
import dotenv from "dotenv"

dotenv.config()

const elevenlabs = new ElevenLabsClient({
	apiKey: process.env.ELEVENLABS_API_KEY
})

export async function textToSpeech(text: string)
{
	try
	{
		const voiceId = "MF4J4IDTRo0AxOO4dpFR"

		const audio = await elevenlabs.textToSpeech.convert(voiceId, {
			text,
			modelId: "eleven_multilingual_v2",
			outputFormat: "mp3_44100_128"
		})

		// Convert stream to buffer
		const reader = audio.getReader()
		const stream = new Readable({
			async read()
			{
				const { done, value } = await reader.read()
				if (done)
				{
					this.push(null)
				}
				else
				{
					this.push(value)
				}
			}
		})

		// Save file locally
		const outputDir = path.resolve("./tmp")
		if (!fs.existsSync(outputDir))
		{
			fs.mkdirSync(outputDir)
		}

		const filePath = path.join(outputDir, `aasha-${Date.now()}.mp3`)
		const writeStream = fs.createWriteStream(filePath)

		await new Promise<void>((resolve, reject) =>
		{
			stream.pipe(writeStream)
			stream.on("end", resolve)
			stream.on("error", reject)
		})

		return filePath
	}
	catch (err)
	{
		console.error("Error generating speech:", err)
		throw err
	}
}
