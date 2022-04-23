import http from "http";
import app from "./app.js";
import throng from "throng";

const server = http.createServer(app);
const PORT = process.env.PORT || 5001;
const WORKERS = process.env.WEB_CONCURRENCY || 1;

throng({
  workers: WORKERS,
  lifetime: Infinity,
  start: start,
});

function start() {
  server.listen(PORT, () => onListen());
  const onListen = () => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Server is running on port`, PORT);
    }
  };
}
