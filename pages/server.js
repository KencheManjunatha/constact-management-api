const express = require("express");
const next = require("next");
const authRoutes = require("./pages/api/auth");
const contactRoutes = require("./pages/api/contacts");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.use("/api/auth", authRoutes);
  server.use("/api/contacts", contactRoutes);

  server.all("*", (req, res) => handle(req, res));

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
