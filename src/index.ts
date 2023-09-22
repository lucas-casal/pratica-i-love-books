import express, { json } from "express";
import "express-async-errors";

import bookRouter from "./routers/books-router";
import errorHandler from "./middlewares/error-middleware";

const app = express();

app.use(json());

app.use(bookRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));