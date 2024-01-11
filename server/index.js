import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

