import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackHome from "../components/BackHome";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleDeleteBook = () => {
    axios.delete(`http://localhost:5000/api/books/${id}`).then(() => {
      console.log(`Book with id ${id} deleted successfully`);
      navigate("/");
    });
  };

  return (
    <div className="p-4">
      <BackHome></BackHome>
      <h1 className="text-3xl my-4">Delete Book</h1>

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
