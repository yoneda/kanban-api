"use strict";
exports.__esModule = true;
var express = require("express");
var cookieParser = require("cookie-parser");
var asyncHandler = require("express-async-handler");
var server = express();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// api を定義
server.get("/api/helth", function (req, res) {
    res.send({ val: "ok" });
});
var port = process.env.PORT;
server.listen(port || 3000, function (err) {
    if (err)
        throw err;
    console.log("ready on localhost:" + port);
});
