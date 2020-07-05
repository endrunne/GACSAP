import {MongoClient} from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const mongoClient = new MongoClient();

mongoClient.connectWithUri("mongodb://localhost:27017");

const dataBase = mongoClient.database("csap_db");

export default dataBase
