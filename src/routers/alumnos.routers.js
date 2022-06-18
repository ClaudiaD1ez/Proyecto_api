const {Router} = require("express")
const alumnoCtrl = require("../controller/alumnos.controller");

const router = Router();

router.get("/alumnos", alumnoCtrl.getAlumno);

// router.get("/alumnos/id", alumnoCtrl.getAlumno);

router.post("/alumnos", alumnoCtrl.postAlumno);

router.put("/alumnos/", alumnoCtrl.putAlumno);

router.delete("/alumnos", alumnoCtrl.deleteAlumno);


module.exports = router