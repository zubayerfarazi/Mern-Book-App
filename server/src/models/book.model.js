const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "title is required"],
    },
    author: {
      type: String,
      trim: true,
      required: [true, "title is required"],
    },
    publishYear: {
      type: Number,
      trim: true,
      required: [true, "title is required"],
    },
  },
  { timestamps: true }
);

const Books = model("books", bookSchema);

module.exports = Books;
