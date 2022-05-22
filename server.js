import 'dotenv/config';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import session from 'express-session';
import cors from 'cors';
import bodyParser from "body-parser";
import homePageController from "./controllers/home-page-controller.js";
import cartController from "./controllers/cart-controller.js";
import searchController from "./controllers/search-controller.js";
import productController from "./controllers/product-controller.js";
import userController from "./controllers/user-controller.js";
import authController from "./controllers/auth-controller.js";
import profileController from "./controllers/profile-controller.js";
import categoryController from "./controllers/category-controller.js"
import featureController from "./controllers/feature-controller.js"

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
dotenv.config();

const CONNECTION_STRING=process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

app.use(cors({
  origin: 'https://rentronics.netlify.app',
  credentials: true
}));

app.use(session({
  secret: process.env.SESSION_KEY,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false,
    maxAge: 60000 * 30,
    domain: 'rentronics.netlify.app',
  },
}));


userController(app);
authController(app);
profileController(app);
productController(app);
categoryController(app);
featureController(app);
homePageController(app);
cartController(app);
searchController(app);


app.get('/', (request, response) => {
    response.send("Welcome to Rentronics");
});

app.listen(process.env.PORT || 4000);
