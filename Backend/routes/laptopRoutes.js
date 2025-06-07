const { fetchLaptop, addLaptop, deleteLaptop, editLaptop, fetchSingleLaptop } = require("../controllers/laptopController")
// const laptopModel = require("../database/models/laptopModel")


const router= require("express").Router()
router.route("/laptop").get(fetchLaptop).post(addLaptop)
router.route("/laptop/:id").delete(deleteLaptop).patch(editLaptop).get(fetchSingleLaptop)


module.exports =router






