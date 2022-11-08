import React from "react";

const ReviewTable = ({ review }) => {
  const { service, text } = review;
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
              <button className="btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
