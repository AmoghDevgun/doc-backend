import dotenv from "dotenv";

dotenv.config();

type AppConfig = {
	port: number;
	mongoUri: string;
	jwtSecret: string;
};

function requireEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

export const config: AppConfig = {
	port: Number(process.env.PORT || 5000),
	mongoUri: requireEnv("MONGO_URI"),
	jwtSecret: requireEnv("JWT_SECRET"),
};

export default config;


