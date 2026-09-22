const router = require("express").Router();

const clothingItems = require("./clothingItem");
const userRouter = require("./users");

const { login, createUser } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

router.post("/signin", login);
router.post("/signup", createUser);

router.get("/items", getItems);

router.use(auth);

router.use("/items", clothingItems);
router.use("/users", userRouter);

module.exports = router;
