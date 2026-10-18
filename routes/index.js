const router = require("express").Router();

const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");

const clothingItems = require("./clothingItem");
const userRouter = require("./users");

const { login, createUser } = require("../controllers/users");
const { getItems } = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");

// Public routes
router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);
router.get("/items", getItems);

// Protected routes
router.use("/items", auth, clothingItems);
router.use("/users", auth, userRouter);

module.exports = router;
