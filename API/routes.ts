import {Router} from "https://deno.land/x/denotrain@v0.5.0/mod.ts"
import {getClassrooms, saveClassroom, getSingleClassroom, updateClassroom, deleteClassroom} from "./src/controller/index.ts"

const router = new Router();

router.get('/', getClassrooms)
      .get('/:id', getSingleClassroom)
      .post('/', saveClassroom)
      .put('/:id', updateClassroom)
      .delete('/:id', deleteClassroom)

export default router;
