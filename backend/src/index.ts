import express, { Application, Request, Response } from "express"

const app: Application = express()
const port: number = 3001

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`)
})
