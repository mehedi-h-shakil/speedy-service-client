import React from "react";

const ReviewTable = ({ review, handleDelete }) => {
  const { service, text, _id } = review;
  //   console.log(review);
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
              <button className="btn">Edit</button>
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
    </div>
  );
};

export default ReviewTable;
