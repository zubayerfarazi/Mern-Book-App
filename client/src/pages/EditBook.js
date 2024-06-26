import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackHome from "../components/BackHome";

function EditBook() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
    });
  }, [id]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const changePublishYear = (e) => {
    setPublishYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooks = { title, author, publishYear };
    axios.put(`http://localhost:5000/api/books/${id}`, newBooks).then((res) => {
      navigate("/");
    });
  };
  return (
    <div className="p-10">
      <BackHome></BackHome>
      <div>
        <h1 className="text-3xl">Edit Book</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
        <div className="p-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={changeTitle}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="p-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={changeAuthor}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="p-4">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            type="number"
            name="publishYear"
            id="publishYear"
            value={publishYear}
            onChange={changePublishYear}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button type="submit" className="p-2 bg-sky-300 m-8">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBook;
