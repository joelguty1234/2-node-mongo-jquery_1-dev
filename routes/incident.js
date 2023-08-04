const express = require("express")
const incidentController = require("../controllers/incident")

const api = express.Router();

api.get("/holaMundo", incidentController.holaMundo)
api.post("/createIncident", incidentController.createIncident)
api.get("/getIncidents", incidentController.getIncidents)
api.get("/getIncidentsBySeverity", incidentController.getIncidentsBySeverity)
api.get("/getIncidentsByCompleted", incidentController.getIncidentsByCompleted)
api.put("/updateIncident", incidentController.updateIncident)
api.delete("/deleteIncident", incidentController.deleteIncident)

module.exports = api