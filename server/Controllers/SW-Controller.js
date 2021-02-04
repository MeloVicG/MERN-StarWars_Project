const { Padawans } = require("../Models/SW-Model")

//controller handles creation
module.exports.index = (request, response) => {
    response.json({
        message:"HELLLOOOO!"
    })
}
module.exports.createPadawan = (request, response) => {
    Padawans.create(request.body) //goes to db
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(err => {
            console.log('this is createPadawan Error', err)
            response.status(400).json(err) //err is an object
        });
}
module.exports.allPadawans = (request, response) => {
    Padawans.find() //{}), null, {sort:{name:1}})  //find() is not an option??
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(err => {
            console.log('this is allPadawans Error', err)
            response.status(400).json(err) //err is an object
        });
}
module.exports.findOnePadawan = (request, response) => {
    Padawans.findOne({ _id: request.params.id })
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(err => {
            console.log('this is findOnePadawan Error', err)
            response.status(400).json(err) //err is an object
        });
}
module.exports.updatePadawan = (request, response) => {                        // {runValidators: true}
    Padawans.findOneAndUpdate({ _id: request.params.id }, request.body, {new:true, runValidators: true}) //dont forget to manually turn on update
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(err => {
            console.log('this is updatePadawan Error', err)
            response.status(400).json(err) //err is an object
        });
}
module.exports.deletePadawan = (request, response) => {
    Padawans.deleteOne({ _id: request.params.id })
        .then(data => {
            console.log(data)
            response.json(data)
        })
        .catch(err => {
            console.log('this is deletePadawan Error', err)
            response.status(400).json(err) //err is an object
        });
}

