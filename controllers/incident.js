const incidentModel = require("../models/incident");

function holaMundo(req, res) {
    console.log("hola mundo");
}

async function createIncident(req, res) {
    const incident = new incidentModel();
    const params = req.body;

    incident.title = params.title;
    incident.description = params.description;
    incident.user = params.user;
    incident.severity = params.severity;

    console.log(`title dev is: ${incident.title}`);
    try {
        const incidentStore = await incident.save();
        if (!incidentStore) {
            res.status(400).send({ msg: "dont save incident" });
        } else {
            res.status(200).send({ incident: incidentStore });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidents(req, res) {
    try {
        const incidents = await incidentModel.find().sort({ create_at: 1 });
        if (!incidents) {
            res.status(400).send({ msg: "error al obtener las incidencias" });
        } else {
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsBySeverity(req, res) {
    try {
        const params = req.query;
        const severity = params.severity;
        const incidents = await incidentModel
            .find({ severity: severity })
            .sort({ create_at: 1 });
        if (!incidents) {
            res
                .status(400)
                .send({
                    msg: "error al obtener las incidencias en getIncidentsBySeverity",
                });
        } else {
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsByCompleted(req, res) {
    try {
        const params = req.query;
        const completed = params.completed;
        const incidents = await incidentModel
            .find({ completed: completed })
            .sort({ create_at: 1 });
        if (!incidents) {
            res
                .status(400)
                .send({
                    msg: "error al obtener las incidencias en  getIncidentsByCompleted",
                });
        } else {
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateIncident(req, res) {
    try {
        const params = req.body;
        const idIncident = params.id;
        const incidents = await incidentModel.findByIdAndUpdate(idIncident, params);
        if (!incidents) {
            res
                .status(400)
                .send({ msg: "error al obtener las incidencias en updateIncident" });
        } else {
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteIncident(req, res) {
    try {
        const params = req.body;
        const idIncident = params.id;
        const incidents = await incidentModel.findByIdAndDelete(idIncident);
        if (!incidents) {
            res
                .status(400)
                .send({ msg: "error al eliminar las incidencias en deleteIncident" });
        } else {
            res.status(200).send({ msg: `Eliminacion completada correctamente con id:${idIncident}` });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    holaMundo,
    createIncident,
    getIncidents,
    getIncidentsBySeverity,
    getIncidentsByCompleted,
    updateIncident,
    deleteIncident
};
