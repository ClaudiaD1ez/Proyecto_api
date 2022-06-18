const {Router} = require("express")
const adicionalCtrl = require("../controller/adicionales.controller");

const router = Router();

router.get("/adicional", adicionalCtrl.getAdicional);

router.get("/apuntadas", adicionalCtrl.getAdicional2);

// router.get("/apuntadas", adicionalCtrl.getAdicional3);

router.get("/impartidas", adicionalCtrl.getAdicional4);

module.exports = router
