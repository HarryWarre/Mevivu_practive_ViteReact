const express = require("express");
const app = express();
const cors = require('cors');
const port = 3001;
const getUser = require("./getUser.cjs");
const postUser = require("./postUser.cjs");
const updateUser = require("./updateUser.cjs");
const deleteUser = require("./deleteUser.cjs");

app.use(cors({
  origin: '*',
}));
app.use(express.json());

app.use("/getUser", getUser);
app.use("/postUser", postUser);
app.use("/updateUser", updateUser);
app.use("/deleteUser", deleteUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
