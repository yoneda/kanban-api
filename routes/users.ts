import { Router } from "express";
import asyncHandler from "express-async-handler";
// ハンドラをインポート

const router = Router();

router.get("/", asyncHandler(function (req, res, next) {
  res.send("GET /api/users");
}))

router.post("/", asyncHandler(function (req, res, next) {
  res.send("POST /api/users");
}))

router.put("/", asyncHandler(function (req, res, next) {
  res.send("PUT /api/users");
}));

router.delete("/", asyncHandler(function (req, res, next) {
  res.send("DELETE /api/users");
}));

export default router;
