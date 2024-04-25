import React from "react";

function PasswordTable({ savedData }) {
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
            <td className="py-2 text-center w-32">{items.site}</td>
            <td className="py-2 text-center w-32">{items.username}</td>
            <td className="py-2 text-center w-32">{items.password}</td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default PasswordTable;
