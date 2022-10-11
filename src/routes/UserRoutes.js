const router = require("express").Router();
const controller = require("../controllers/UserController");

router.post("/create", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
