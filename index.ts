import Elysia from "elysia"
import { cors } from "@elysiajs/cors";
import { plugin as usersPlugin } from "./users"


const app = new Elysia()
  .use(cors())
  .use(usersPlugin)



app.listen(3000)
