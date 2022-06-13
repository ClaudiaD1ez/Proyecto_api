const {Router} = require("express")
const gruposCtrl = require("../controller/grupos.controller");

const router = Router();

router.get("/grupos", gruposCtrl.getGrupo);

router.post("/grupos", gruposCtrl.postGrupo);

router.put("/grupos", gruposCtrl.putGrupo);

router.delete("./grupos", gruposCtrl.deleteGrupo);


module.exports = router