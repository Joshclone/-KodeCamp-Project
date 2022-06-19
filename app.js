import bodyParser from "body-parser"
import express from "express"
import { config } from "dotenv"
import routes from "./src/routes.js"
import rapidAPI from "./src/services/rapidAPI.js"

config('.env')
const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(routes)

app.get('/', (req, res) => {
    res.json({ info: "Node.js, Express, and Postgres API", ip: req.ip})
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
    rapidAPI.getLocationByIp()
})
