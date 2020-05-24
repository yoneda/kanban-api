import { Router } from "express";
import asyncHandler from "express-async-handler";
// ハンドラをインポート

const router = Router();

router.get("/", async function (req, res, next) {
  res.send("GET /api/users");
})

router.post("/", async function (req, res, next) {
  res.send("POST /api/users");
})

router.put("/", async function (req, res, next) {
  res.send("PUT /api/users");
});

router.delete("/", async function (req, res, next) {
  res.send("DELETE /api/users");
});

export default router;
