import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const client = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await client.user.findMany({});
  res.json({
    users,
  });
});
app.post("/", async (req, res) => {
    const user = await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
  res.json({
    message: "user created",
  });
});
