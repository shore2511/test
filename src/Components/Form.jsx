import React, { useState } from "react";

const Form = (props) => {
  let [row, setRow] = useState({
    item_id: "",
    brand: "",
    name: "",
    size: "",
    price: "",
    image: "",
  });

  let onUrlNameChangeHandler = (event) => {
    setRow({ ...row, image: event.target.value });
    console.log(row);
  };
  let onIdChangeHandler = (event) => {
    setRow({ ...row, item_id: event.target.value });
    console.log(row);
  };
  let onBrandChangeHandler = (event) => {
    setRow({ ...row, brand: event.target.value });
    console.log(row);
  };
  let onNameChangeHandler = (event) => {
    setRow({ ...row, name: event.target.value });
    console.log(row);
  };
  let onSizeChangeHandler = (event) => {
    setRow({ ...row, size: event.target.value });
    console.log(row);
  };
  let onPriceChangeHandler = (event) => {
    setRow({ ...row, price: event.target.value });
    console.log(row);
  };

  return (
    <div>
      <div className="shadow-md p-6 mt-5 rounded-lg flex flex-col w-1/3 justify-evenly shadow-slate-800 hover:shadow-lg hover:duration-300 hover:shadow-slate-700">
        <div>
          <label>
            <span className="text-slate-400 text-sm">Image Url</span>
            <input
              onChange={onUrlNameChangeHandler}
              type="url"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" Image url"
            />
          </label>
          <label>
            <span className="text-slate-400 text-sm">Item Id</span>
            <input
              onChange={onIdChangeHandler}
              type="url"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" brand"
            />
          </label>
          <label>
            <span className="text-slate-400 text-sm">Brand</span>
            <input
              onChange={onBrandChangeHandler}
              type="url"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" brand"
            />
          </label>
          <label>
            <span className="text-slate-400 text-sm">name</span>
            <input
              onChange={onNameChangeHandler}
              type="url"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" name"
            />
          </label>
          <label>
            <span className="text-slate-400 text-sm">size</span>
            <input
              onChange={onSizeChangeHandler}
              type="size"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" size"
            />
          </label>
          <label>
            <span className="text-slate-400 text-sm">price</span>
            <input
              onChange={onPriceChangeHandler}
              type="price"
              className="mt-1 block w-full px-1 rounded-md bg-slate-300 border-transparent focus:border-slate-500 focus:bg-slate-400 focus:ring-0"
              placeholder=" price"
            />
          </label>
        </div>
        <div className="flex space-x-5">
          <div className="flex mt-8 text-red-500 border-slate-400 shadow-md rounded-sm shadow-slate-700 hover:shadow-lg hover:shadow-slate-800 border-2 py-2 w-1/2 justify-center">
            <button onClick={() => props.updateProps(row)}>
              ADD <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex mt-8 text-red-500 border-slate-400 shadow-md rounded-sm shadow-slate-700 hover:shadow-lg hover:shadow-slate-800 border-2 py-2 w-1/2 justify-center">
            <button onClick={() => props.updateCard(row)}>
              UPDATE<i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
