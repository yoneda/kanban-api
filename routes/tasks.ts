import { Router } from "express";
import asyncHandler from "express-async-handler";
// ハンドラをインポート

const router = Router();

router.get("/", asyncHandler(function (req, res, next) {
  res.send("GET /api/tasks");
}))

router.post("/", asyncHandler(function (req, res, next) {
  res.send("POST /api/tasks");
}))

router.put("/", asyncHandler(function (req, res, next) {
  res.send("PUT /api/tasks");
}));

router.delete("/", asyncHandler(function (req, res, next) {
  res.send("DELETE /api/tasks");
}));

export default router;
