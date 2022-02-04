const router = require("express").Router();

const { login, register } = require("../Auth/auth");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
