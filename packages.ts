import Elysia from "elysia"


export const plugin = new Elysia()
  .get("/packages/:id", () => {
    // get zip for package with id
  })
  .get("/packages", () => {
    // get packages with lots of filter options
  })
  .post("/packages", () => {
    // create a new package
    // protected
  })
  .patch("/packages/:id", () => {
    // update package with id
    // protected
  })
  .delete("/packages/:id", () => {
    // delete package with id
    // protected
  })
