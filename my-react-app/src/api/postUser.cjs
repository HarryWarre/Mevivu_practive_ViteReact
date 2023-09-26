var express = require("express");
var router = express.Router();
const { default: axios } = require("axios");
router.post("/", async (req, res) => {
  try {
    const response = await axios.post("https://reqres.in/api/users", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: "Unable to post data" });
  }
});

module.exports = router;
