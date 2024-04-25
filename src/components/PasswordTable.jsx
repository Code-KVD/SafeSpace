import React from "react";
import copy from "../assets/copy.svg"

function PasswordTable({ savedData , handleCopy}) {
  return (
    <table className="table-auto w-full rounded-md overflow-hidden">
      <thead className=" text-center bg-[#8277b9] opacity-70">
        <tr className=" font-extralight">
          <th className="py-2 text-white font-semibold">Website URL</th>
          <th className="py-2 text-white font-semibold">Username</th>
          <th className="py-2 text-white font-semibold">Password</th>
        </tr>
      </thead>
      <tbody className=" bg-violet-50">
        {savedData.map((items , index) =>(
            <tr key={index}>
            <td className="py-2 text-center w-32 underline"><a href={items.site} target="_blank">{items.site}</a>
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
          </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default PasswordTable;
