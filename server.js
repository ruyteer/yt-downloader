const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const router = require("./src/routes/routes");
app.use(router);

app.listen(3000);
