import { AiOutlineMenu } from "react-icons/ai";
import { USER_PIC, YOUTUBE_LOGO } from "../utils/constants";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 w-[100%] px-6 py-2">
      <div className="flex space-x-4 items-center">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={YOUTUBE_LOGO} alt="logo" className="w-28 cursor-pointer" />
      </div>

      <div className="flex w-[35%] items-center">
        <div className="w-[100%] px-4 py-2 border border-gray-700 rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border rounded-r-full bg-gray-200 hover:bg-gray-300 duration-200">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img
          className="w-8 h-8 border border-black rounded-full"
          src={USER_PIC}
        />
      </div>
    </div>
  );
};

export default Navbar;
