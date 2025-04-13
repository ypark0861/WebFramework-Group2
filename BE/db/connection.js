import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGO_URI || "";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("sm").command({ ping: 1 });
  console.log("DB connection-ping");
} catch (err) {
  console.error(err);
}

let db = client.db("sm");

export default db;