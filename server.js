require("dotenv").config();
const express = require("express");
const ImageRouter = require("./routers/imageRouter");
const UserRouter = require("./routers/userRouter");
const AuthRouter = require("./routers/authRouter");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use("/images", ImageRouter);
app.use("/users", UserRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
