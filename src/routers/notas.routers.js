const {Router} = require("express")
const notasCtrl = require("../controller/alumnos.controller");

const router = Router();

router.get("/notas", notasCtrl.getNota);

router.post("/notas", notasCtrl.postNota);

router.put("/notas", notasCtrl.putNota);

router.delete("./notas", notasCtrl.deleteNota);


module.exports = router