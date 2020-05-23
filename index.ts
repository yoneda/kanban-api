const express = require("express");
import { Request, Response } from "express";
import cookieParser from "cookie-parser";
import asyncHandler from "express-async-handler";

const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// api を定義
server.get("/api/helth", (req: Request, res: Response) => {
  res.send({ val: "テスト" });
});

const port = process.env.PORT;
server.listen(port || 3000, (err) => {
  if (err) throw err;
  console.log(`ready on localhost:${port}`);
});
