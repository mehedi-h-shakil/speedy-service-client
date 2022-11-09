import React from "react";

const ReviewTable = ({ review, handleDelete, handleUpdate }) => {
  const { service, text, _id } = review;
  //   console.log(review);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    // console.log(text);
    handleUpdate(_id, text);
  };
  return (
    <div className="overflow-x-auto w-9/12 mx-auto py-5">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Service</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>{service}</td>
            <td>{text}</td>
            <td className="flex gap-5">
              <label htmlFor="my-modal" className="btn">
                Edit
              </label>
              <button
                onClick={() => handleDelete(_id)}
                className="modal-button btn"
                type="button"
                data-modal-toggle="defaultModal"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <form onSubmit={handleSubmit} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit your review.</h3>
            <p className="py-4">
              <input
                type="textarea"
                name="text"
                className="input input-bordered w-full h-40"
              />
            </p>
            <div className="modal-action">
              <button type="submit" htmlFor="my-modal" className="btn">
                Update
              </button>
              <label htmlFor="my-modal" className="btn">
                Close
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewTable;
