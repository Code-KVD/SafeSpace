import React, { useEffect, useState } from "react";
import Invisible from "../assets/Invisible.png";
import View from "../assets/View.png";

export const Manager = () => {
  const [toggleEye, setToggleEye] = useState(View);

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
  const handleSubmit = () =>{
    setSavedData([...savedData , formData]);
    setFormData({
      site: "",
      username: "",
      password: "",
    })
  }

    // whenever we change the value of savedData then use effect is called to store the data into the local storage.
    useEffect(() => {
      localStorage.setItem("password" , JSON.stringify(savedData));
    
    }, [savedData])
  
  // This function is used to handle the eye of the password field.
  const handleToggleEye = () => {
    if (toggleEye === View) {
      setToggleEye(Invisible);
    } else {
      setToggleEye(View);
    }
  };
  
  // this is the basic approach to handle the input field in any react application.
  // always use this approach only.
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
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
          />
          <div className=" flex gap-8">
            <input
              value={formData.username}
              className=" border-2 border-slate-300 rounded-lg w-1/2 px-1 py-1 focus:border-gray-500 outline-none"
              type="text"
              placeholder="Enter username"
              onChange={handleInputChange}
              name="username"
            />

            <div className="relative">
              <input
                value={formData.password}
                className=" border-2 border-slate-300 rounded-lg w-full px-1 py-1 focus:border-gray-500 outline-none"
                type="text"
                placeholder="Enter password"
                onChange={handleInputChange}
                name="password"
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
            className="flex justify-center w-fit  rounded-full items-center px-1 py-2"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: "2.5rem", height: "2.3rem" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};
