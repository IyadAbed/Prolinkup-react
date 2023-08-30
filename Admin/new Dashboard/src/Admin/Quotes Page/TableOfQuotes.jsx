
import { AiOutlineDelete } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

export const TableOfQuotes = ({ refresh, setRefresh }) => {
  const [quotes, setQuotes] = useState([]);
  console.log(quotes);
  const [quoteUpdate, setQuoteUpdate] = useState({
    _id: "",
    name: "",
    quote: "",
    list: ""
  });
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  // get all quotes
  useEffect(() => {
    axios
      .get("http://localhost:8800/allquotes")
      .then((response) => {
        setQuotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    Swal.fire({
      title: `Are you sure to delete this User ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` User was Deleted Successfully`, "", "success");

        axios
          .patch("http://localhost:8800/deleteUser/" + id)
          .then((response) => {
            console.log(response.data);
            setRefresh(!refresh);
          })

          .catch((error) => console.log(error.message));
      } else Swal.fire("Cancel", "", "error");
    });
  };

  const handleUnDelete = (id) => {
    Swal.fire({
      title: `Are you sure to Return this User ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` User was returned Successfully`, "", "success");

        axios
          .patch("http://localhost:8800/returnUser/" + id)
          .then((response) => {
            console.log(response.data);
            setRefresh(!refresh);
          })

          .catch((error) => console.log(error.message));
      } else Swal.fire("Cancel", "", "error");
    });
  };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setQuoteUpdate((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const handleSubmitUpdate = async (event) => {
  //   try {
  //     event.preventDefault();

  //     const data = await axios.patch(
  //       `http://localhost:8800/updatequote/${quoteUpdate._id}`,
  //       quoteUpdate
  //     );
  //     notifySuccess("Author updated success");
  //     setRefresh(!refresh);

  //     console.log("added success", data.data);
  //   } catch (err) {
  //     console.log(err);
  //     notifyError(err.message);
  //   }
  // };

  const tableRows = quotes.map((quote) => {
    return (
      <tr key={quote._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {quote.name}
        </th>
        <td className="px-4 py-3">{quote.email}</td>
        <td className="px-4 py-3">{quote.projects.length}</td>
        <td className="px-4 py-3">{quote.projectTodo.length}</td>

        <td className="px-4 py-3 flex items-center justify-start gap-2 flex-row-reverse">
          {/* <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-info text-white" data-tip="Edit">
              <button
                // onClick={() => handleUpdate(book._id)
                // }
                onClick={() => {
                  window.my_modal_3.showModal();
                  setQuoteUpdate((prev) => ({
                    ...prev,
                    _id: quote._id,
                    name: quote.name,
                    quote: quote.quote,
                    list: quote.list,
                   
                  }));
                }}
                className="btn bg-white hover:bg-info shadow-lg hover:shadow-xl border-none "
              >
                <BiSolidMessageSquareEdit className="text-neutral text-[18px]" />
              </button>
            </div>
          </div> */}
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
              {quote.blocked?(<>
            <div className="tooltip tooltip-success text-white" data-tip="Restore">
              <button
                onClick={() => handleUnDelete(quote._id)}
                className="btn bg-white hover:bg-green-200 shadow-lg hover:shadow-xl border-none "
              >
                <IoRefreshSharp className="text-green-500 text-[18px]" />
              </button>
              </div>
              </>):(
                <>
                <div className="tooltip tooltip-error text-white" data-tip="Delete">
              <button
                onClick={() => handleDelete(quote._id)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[18px]" />
              </button>
              </div>
                </>
              )}

          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">User's</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-[#70acc7]">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    UserName
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Project
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Project ToDo
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no User's</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <dialog id="my_modal_3" className="modal">
        <form
          onSubmit={handleSubmitUpdate}
          method="dialog"
          className="modal-box"
        >
          <div className="grid grid-cols-1  gap-4 ">
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Quote Writer</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-sm  border-[#70acc7] w-full max-w-xs"
                value={quoteUpdate.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Quote Content</span>
              </label>
              <input
                type="text"
                name="quote"
                placeholder="Type here"
                className="input input-sm  border-[#70acc7] w-full max-w-xs"
                value={quoteUpdate.quote}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="list"
                placeholder="Type here"
                className="input input-sm  border-[##70acc7] w-full max-w-xs"
                value={quoteUpdate.list}
                onChange={handleChange}
              />
            </div>
          
            <div className="form-control w-full max-w-xs mx-auto">
              
              <button type="submit" className="btn btn-sm btn-primary">
                update
              </button>
            </div>
          </div>
        </form>
      </dialog> */}
    </section>
  );
};


