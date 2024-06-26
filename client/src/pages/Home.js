import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data.data))
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl pb-5">Book List</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox className="text-3xl" />
        </Link>
      </div>
      <table className="w-full border-separate border-spacing-2 text-2xl">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md">Author</th>
            <th className="border border-slate-600 rounded-md">Publish Year</th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-600 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-600 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-600 rounded-md text-center">
                {book.author}
              </td>
              <td className="border border-slate-600 rounded-md text-center">
                {book.publishYear}
              </td>
              <td className="border border-slate-600 rounded-md text-center">
                <div className="flex justify-center flex-row gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600"></AiOutlineEdit>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600"></MdOutlineDelete>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
