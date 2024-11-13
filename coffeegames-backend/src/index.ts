/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRoutes = require("./routes/index");
const {onRequest} = require("firebase-functions/v2/https");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(testRoutes.routes);

exports.api = onRequest(app);
