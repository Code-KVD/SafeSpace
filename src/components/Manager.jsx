import React, { useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import Invisible from "../assets/Invisible.png";
import View from "../assets/View.png";
import PasswordTable from "./PasswordTable";

export const Manager = () => {
  const [toggleEye, setToggleEye] = useState(View);
  const [toggleType, setToggletype] = useState("password");
  // here this state is used to handle the form data.
  // always use this approach which provides a clean coding and development experience.
  // here the state is in the form of an object.
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
  });

  // this is the saved data in local storage.
  // here we are using a callback function inside use state such that if the data exists inside the local storage then put this on the savedData state.
  const [savedData, setSavedData] = useState(() => {
    if (!localStorage.getItem("password")) {
      return [];
    }

    return JSON.parse(localStorage.getItem("password"));
  });

  // The above process to get items from local storage can be achieved using useEffect when the component gets rendered.
  // useEffect(() => {

  //   if(localStorage.getItem("password")){
  //     setSavedData(JSON.parse(localStorage.getItem("password")));
  //   }
  // }, []);

  // when we submit the form we push the form data into the already exisiting data of savedData variable.
  // also we change the values of form data so that we can enter new values for next password.

  const handleSubmit = () => {
    if (
      formData.site === "" ||
      formData.username === "" ||
      formData.password === ""
    ) {
      setSavedData([...savedData]);
      alert("Add required fields");
    } else {
      setSavedData([...savedData, { ...formData, id: uuidv4() }]);
      setFormData({
        site: "",
        username: "",
        password: "",
      });
    }
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // whenever we change the value of savedData then use effect is called to store the data into the local storage.
  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(savedData));
  }, [savedData]);

  // This function is used to handle the eye of the password field.
  const handleToggleEye = () => {
    if (toggleEye === View) {
      setToggleEye(Invisible);
      setToggletype("text");
    } else {
      setToggleEye(View);
      setToggletype("password");
    }
  };

  // this is the basic approach to handle the input field in any react application.
  // always use this approach only.
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (id) => {
    setFormData(savedData.filter((items) => items.id === id)[0]);
    setSavedData(savedData.filter((items) => items.id !== id));
  };

  // deleting a password entry from the table/list.
  const handleDelete = async (id) => {
    setSavedData(prevSavedData => prevSavedData.filter(item => item.id !== id));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container my-20 mx-auto h-72 border-2 w-1/2 flex flex-col items-center bg-gray-100 rounded-xl">
        <div className="my-8">
          <h1 className="text-3xl text-center font-light">Safe Space</h1>
        </div>
        <div className="flex flex-col gap-4 items-center ">
          <input
            value={formData.site}
            className=" border-2 border-slate-300 rounded-lg w-full px-1 py-1 focus:border-gray-500 outline-none"
            type="text"
            placeholder="Enter website url"
            onChange={handleInputChange}
            name="site"
            required
          />
          <div className=" flex gap-8">
            <input
              value={formData.username}
              className=" border-2 border-slate-300 rounded-lg w-1/2 px-1 py-1 focus:border-gray-500 outline-none"
              type="text"
              placeholder="Enter username"
              onChange={handleInputChange}
              name="username"
              required
            />

            <div className="relative">
              <input
                type={toggleType}
                value={formData.password}
                className=" border-2 border-slate-300 rounded-lg w-full px-1 py-1 focus:border-gray-500 outline-none"
                placeholder="Enter password"
                onChange={handleInputChange}
                name="password"
                required
              />

              <span className="absolute  right-[0.5rem] top-[0.5rem] ">
                <img
                  className="w-5 cursor-pointer"
                  src={toggleEye}
                  alt=""
                  onClick={handleToggleEye}
                />
              </span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="flex justify-center w-fit  rounded-full items-center px-3 py-2 border-2 border-neutral-50 bg-[#8277b9] bg-opacity-60 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "2.5rem", height: "2.3rem" }}
            />
            <h1 className="font-semibold">Save</h1>
          </button>
        </div>
        <div className=" container mt-14 w-full">
          <h2 className="mb-4 font-light text-xl">Your Passwords</h2>
          {savedData.length === 0 && (
            <div>
              No passwords to show
              <p className="my-2">
                Click{" "}
                <span className="border-2 border-neutral-50 bg-[#8277b9] bg-opacity-60 rounded-full items-center px-3 py-2 font-semibold">
                  Save
                </span>{" "}
                to add one
              </p>
            </div>
          )}
          {savedData.length != 0 && (
            <PasswordTable
              savedData={savedData}
              handleCopy={handleCopy}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};
