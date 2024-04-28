import React from "react";
import copy from "../assets/copy.svg";
import pencil from "../assets/pencil.png";
import deleteIcon from "../assets/delete.png"

function PasswordTable({ savedData , handleCopy, handleDelete , handleEdit}) {
  return (
    <table className="table-auto w-full rounded-md overflow-hidden">
      <thead className=" text-center bg-[#8277b9] opacity-70">
        <tr className=" font-extralight">
          <th className="py-2 text-white font-semibold">Website URL</th>
          <th className="py-2 text-white font-semibold">Username</th>
          <th className="py-2 text-white font-semibold">Password</th>
          <th className="py-2 text-white font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody className=" bg-violet-50">
        {savedData.map((items) =>(
            <tr key={items.id}>
            <td className="py-2 text-center w-32 underline"><a className="font-normal" href={items.site} target="_blank">{items.site}</a>
            </td>
            <td className="py-2 text-center w-32">
              <div className=" flex justify-center items-center gap-4">
              {items.username}
            <div className="cursor-pointer">
              <img className=" w-4" src={copy} alt=""  onClick={() => handleCopy(items.username)}/>
            </div>
            </div>
            </td>
            <td className="py-2 text-center w-32">
              <div className=" flex justify-center items-center gap-4">
              {items.password}
            <div className="cursor-pointer">
              <img className=" w-4" src={copy} alt="" onClick={() => handleCopy(items.password)}/>
            </div>
            </div>
            </td>
            <td className="py-2 text-center w-32">
              <div className=" flex justify-center items-center gap-3">
              <img className=" cursor-pointer w-4" src={pencil} onClick={() => handleEdit(items.id)} alt="" />
            <div className="cursor-pointer">
              <img onClick={() => handleDelete(items.id)}  className=" w-4" src={deleteIcon} alt="" />
            </div>
            </div>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default PasswordTable;
