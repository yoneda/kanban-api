import { Router } from "express";
import asyncHandler from "express-async-handler";
// ハンドラをインポート

const router = Router();

router.get("/", async (req, res, next) => {
  res.send("GET /api/tasks");
});

router.post("/", async function (req, res, next) {
  res.send("POST /api/tasks");
});

router.put("/", async function (req, res, next) {
  res.send("PUT /api/tasks");
});

router.delete("/", async function (req, res, next) {
  res.send("DELETE /api/tasks");
});

export default router;
