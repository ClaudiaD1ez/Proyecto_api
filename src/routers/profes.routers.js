const {Router} = require("express")
const profesCtrl = require("../controller/alumnos.controller");

const router = Router();

router.get("/profes", profesCtrl.getProfe);

router.post("/profes", profesCtrl.postProfe);

router.put("/profes", profesCtrl.putProfe);

router.delete("./profes", profesCtrl.deleteProfe);


module.exports = router