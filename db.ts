import {init, MongoClient} from "https://deno.land/x/mongo@v0.8.0/mod.ts";

const mongoClient = new MongoClient();

mongoClient.connectWithUri("mongodb://root:rootpassword@gacsap_mongodb_1/admin");

const dataBase = mongoClient.database("csap_db");

export default dataBase
