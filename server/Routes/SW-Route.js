const StarWarsController = require("../Controllers/SW-Controller")


module.exports = (app) => {
    app.get("/", StarWarsController.index)
    app.get("/StarWars", StarWarsController.allPadawans) //show all Padawans
    app.post("/StarWars/create", StarWarsController.createPadawan)
    app.put("/StarWars/edit/:id", StarWarsController.updatePadawan);
    app.get("/StarWars/detail/:id", StarWarsController.findOnePadawan);
    app.delete("/StarWars/delete/:id", StarWarsController.deletePadawan);
};

