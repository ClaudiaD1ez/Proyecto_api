const {Router} = require("express")
const asignaturaCtrl = require("../controller/asignatura.controller");

const router = Router();

router.get("/asignatura", asignaturaCtrl.getAsignatura);

router.post("/asignatura", asignaturaCtrl.postAsignatura);

router.put("/asignatura", asignaturaCtrl.putAsignatura);

router.delete("./asignatura", asignaturaCtrl.deleteAsignatura);

module.exports = router