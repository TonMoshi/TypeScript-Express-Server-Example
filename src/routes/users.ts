import express from "express";
const router = express.Router();

import { checkQueryParam } from "../interceptor/checks";

// List all games
router.get("/user", function (req, res) {
  res.send("Birds home page");
});

module.exports = router;
