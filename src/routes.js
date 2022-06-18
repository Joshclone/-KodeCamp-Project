import { Router } from "express";
import queries from "./database/queries.js"

const routes = Router();

routes.get('/api/locations', queries.getLocations)
routes.post('/api/locations', queries.createLocation)
routes.put("/api/locations/{id}", queries.updateLocation)
routes.delete("/api/locations/{id}", queries.deleteLocation)



export default routes;