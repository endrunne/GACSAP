import {Application} from "https://deno.land/x/denotrain@v0.5.0/mod.ts"
import {example} from './example/index.js'
import route from './routes.ts';

const app = new Application();

const ExecuteRoutine = 
    example().then((data:any) => {
        console.log(data);
    })    

app.use("/api/v1/classrooms", route);

await app.run();
