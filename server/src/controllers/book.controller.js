const createError = require("http-errors");
const Books = require("../models/book.model");

const postBook = async (req, res, next) => {
  try {
    const newBooks = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const bookData = await Books.create(newBooks);
    return res.status(201).send(bookData);
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    const books = await Books.find({});
    return res.status(201).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

const getBookByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const books = await Books.findById(id);
    return res.status(201).send(books);
  } catch (error) {
    next(error);
  }
};

const updateBookByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const books = await Books.findByIdAndUpdate(id, req.body);
    return res.status(201).send({ message: "Book is updated successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteBookByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const books = await Books.findByIdAndDelete(id);
    return res.status(201).send({ message: "Book is deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBook,
  getBook,
  getBookByID,
  updateBookByID,
  deleteBookByID,
};
