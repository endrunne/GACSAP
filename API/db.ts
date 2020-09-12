import {init, MongoClient} from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import {connectionDatabase, user, password, dockerImage} from "./credentials.js"

const mongoClient = new MongoClient();

mongoClient.connectWithUri(`mongodb://${user}:${password}@${dockerImage}/${connectionDatabase}`);

const dataBase = mongoClient.database("csap_db");

export default dataBase
