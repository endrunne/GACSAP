import {Application} from "https://deno.land/x/denotrain@v0.5.0/mod.ts"

import route from './routes.ts';

const app = new Application();

app.use("/api/posts", route);

await app.run();
