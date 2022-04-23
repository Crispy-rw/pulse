import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "dotenv";
import morgan from "morgan";
import path from 'path'
import 'pug'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pkg from 'rss-to-json'


const { parse } = pkg;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
env.config();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.json({ limit: "50mb" }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req.user)
  res.send("Welcome to Template App");
});

app.get("/index", async(req, res) => {
  const rss = await parse('https://www.pulse.com.gh/news/rss');
  // console.log(JSON.stringify(rss, null, 3));
  // return res.json(rss)
  return res.render("index", { title: "Home", rss });
});


app.get('/rss', async (req, res) => {
  const rss = await parse('https://www.pulse.com.gh/news/rss');
  // console.log(JSON.stringify(rss, null, 3));
  return res.json(rss)
})


app.use((req, res, next) => {
  const err = new Error("Endpoint not found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  return res.status(status).json({
    status,
    error: error.message,
  });
});

export default app;
