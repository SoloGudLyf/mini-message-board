import { Pool } from "pg";
import "dotenv/config";

// Again, this should be read from an environment variable
export default new Pool({
  connectionString: process.env.DATABASE_URL,
});
