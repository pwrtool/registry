import Elysia from "elysia"

export const plugin = new Elysia()
  .get("/users/:id", () => {
    // return information on user with id
  })
  .post("/users", () => {
    // create a new user
  })
  .put("/users/:id", () => {
    // update user with id
  })
  .delete("/users/:id", () => {
    // delete account
  })
