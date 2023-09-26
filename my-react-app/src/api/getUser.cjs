const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get("/page/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apiUrl = `https://reqres.in/api/users?page=${id}`;

    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ error: "Không thể lấy dữ liệu" });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const apiUrl = `https://reqres.in/api/users/${id}`;

    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({});
  }
});

module.exports = router;
