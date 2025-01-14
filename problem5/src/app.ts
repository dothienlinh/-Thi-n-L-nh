import express from "express";
import bodyParser from "body-parser";
import resourceRoutes from "./routes/resourceRoutes";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import connectDB from "./db";

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts);
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/resources", resourceRoutes);

app.get("/", (req, res) => {
  res.render("resources/index", { resources: [] });
});

export default app;
