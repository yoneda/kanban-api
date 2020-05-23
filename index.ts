import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import router from "./routes";
import asyncHandler from "express-async-handler";

const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// api を定義
server.get("/api/helth", (req: Request, res: Response) => {
  res.send({ val: "テスト" });
});

server.use("/api", router);

console.log(server.routes);
const port = process.env.PORT;
server.listen(port || 3000, function () {
  console.log(`ready on localhost:${port}`);
})
