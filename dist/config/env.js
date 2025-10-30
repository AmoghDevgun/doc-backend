import dotenv from "dotenv";
dotenv.config();
function requireEnv(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}
export const config = {
    port: Number(process.env.PORT || 5000),
    mongoUri: requireEnv("MONGO_URI"),
    jwtSecret: requireEnv("JWT_SECRET"),
    supabaseUrl: requireEnv("SUPABASE_URL"),
    supabaseServiceKey: requireEnv("SUPABASE_SERVICE_KEY"),
    supabaseBucket: process.env.SUPABASE_BUCKET || "voice-audio",
};
export default config;
//# sourceMappingURL=env.js.map