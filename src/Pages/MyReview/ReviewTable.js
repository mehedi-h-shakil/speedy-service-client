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
      <div className="grid lg:grid-cols-8 sm:grid-cols-1  gap-5 shadow-md p-2">
        <div className="col-span-3">
          <p className="font-semibold">
            <span className="lg:hidden sm:block font-semibold mr-2">
              Service Name:
            </span>
            {service}
          </p>
        </div>
        <div className="col-span-3">
          <p>
            <span className="lg:hidden sm:block font-semibold mr-2">
              Review:
            </span>
            {text}
          </p>
        </div>
        <div className="flex gap-3">
          <label htmlFor="my-modal" className="btn">
            Edit
          </label>
          <button
            onClick={() => handleDelete(_id)}
            className="modal-button btn bg-black"
            type="button"
            data-modal-toggle="defaultModal"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <form onSubmit={handleSubmit} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit your review.</h3>
            <p className="py-4">
              <input
                defaultValue={text}
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
