const router = require("express").Router()

router.get("/api",function(req, res){
    res.json({message: "you have hit this route"})
})
router.post("/api",function(req, res){
    console.log(req.body)
    res.json({message: "you have sent this"})
})
module.exports = router