var express = require("express");
var router = express.Router();
const { default: axios } = require("axios");
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apiUrl = `https://reqres.in/api/users/${id}`;

    const response = await axios.put(apiUrl, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({});
  }
});

module.exports = router;
