import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
	apiKey: process.env.SHIVAAY_API_KEY, 
	baseURL: 'https://api.futurixai.com/api/shivaay/v1'
});

export async function analyzeSymptomsWithAI(symptomData: string)
{
	const prompt = `
	You are a healthcare assistant AI.
	Analyze the following anonymized symptoms and provide:
	1. A simple medical summary.
    2. Give simple text output.
	3. At the last line provide The most relevant doctor specialization to consult. strictly in the format "Doctor: [doctor specialization]"
    4. Give the result in the same language as promt is given using english alphabets. ex -> Muje 3 dino se khassi aur zukhaam h, thoda sa fever bhi aata h"  output -> Tumhe kai dino se khaansi aur zukhaam hai, saath hi halka bukhaar bhi hai. Yeh sambhav hai ki yeh ek viral respiratory infection ho, jaise common cold ya flu. Aaram karo, zyada paani piya karo, aur zarurat pade toh market mein milne wali dawaayein lo. Agar lakshan badhte hain ya ek hafte se zyada tikte hain, toh doctor se salah lo.
    5. DON NOT give placeholders like [NUM] in the output.


	Symptoms: ${symptomData}
	`;

	const completion = await openai.chat.completions.create({
		model: 'shivaay',
		messages: [
			{ role: 'system', content: 'You are a medical assistant AI for healthcare analysis.' },
			{ role: 'user', content: prompt }
		],
	});

	return completion.choices[0]?.message.content;
}
