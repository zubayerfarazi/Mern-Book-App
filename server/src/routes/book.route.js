const express = require("express");
const {
  postBook,
  getBook,
  getBookByID,
  updateBookByID,
  deleteBookByID,
} = require("../controllers/book.controller");

const bookRouter = express.Router();

bookRouter.post("/books", postBook);
bookRouter.get("/books", getBook);
bookRouter.get("/books/:id", getBookByID);
bookRouter.put("/books/:id", updateBookByID);
bookRouter.delete("/books/:id", deleteBookByID);

module.exports = bookRouter;
