import Elysia from "elysia"
import { cors } from "@elysiajs/cors";
import { plugin as usersPlugin } from "./routes/users"
import { plugin as packagesPlugin } from "./routes/packages";


const app = new Elysia()
  .use(cors())
  .use(packagesPlugin)
  .use(usersPlugin)

app.listen(3000)
