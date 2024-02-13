import * as React from "react";



function header() {
  return (
    <div className="w-full h-[50px] bg-blue-400 border-b border-gray-400 text-[20px] flex justify-between pt-2 px-20">
      <div className="w-[50%]">
        <ul className="flex ">
          <li className="ml-5">home
          </li>
          <li className="ml-5">article
          </li>
          <li className="ml-5">exit</li>
        </ul>
      </div>
      <div className="w-[20%] text-center">
        {false ? (
          <p className="bg-green-600 text-[20px] font-black rounded-lg px-5 py-1">
            {" "}
            راضیه مرادی{" "}
          </p>
        ) : (
          <p className="bg-red-500 text-[20px] font-black rounded-lg px-5 py-1">
            نام کاربری
          </p>
        )}
      </div>
    </div>
  );
}

export default header;
