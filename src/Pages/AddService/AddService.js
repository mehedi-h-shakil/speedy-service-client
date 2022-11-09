import React from "react";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddService = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const imgURL = form.img.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const service = {
      title: title,
      img: imgURL,
      description: description,
      price: price,
      rating: rating,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Service Added");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-9/12 mx-auto">
      <Helmet>
        <title>Add Service</title>
        <meta name="description" content="AddService component" />
      </Helmet>
      <h2 className="text-4xl text-center py-5">Add service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Service Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="textarea"
            name="description"
            placeholder="Description"
            className="input input-bordered h-40"
          />
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control my-6">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
