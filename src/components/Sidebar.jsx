import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "History",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Playlists",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 3,
      name: "Your Videos",
      icon: <PiLightbulbLight />,
    },
    {
      id: 4,
      name: "Watch later",
      icon: <SiTrendmicro />,
    },
    {
      id: 5,
      name: "Liked videos",
      icon: <SiYoutubestudio />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 6,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 3,
      name: "Movies",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 4,
      name: "Live",
      icon: <MdWatchLater />,
    },
    {
      id: 5,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sports",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  return (
    <div className="px-4 w-[16%] h-[calc(100vh-1rem)] overflow-y-scroll overflow-x-hidden">
      <div className="mt-2 space-y-2 items-center">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-3 hover:bg-gray-300 duration-300 p-1 rounded-xl cursor-pointer"
          >
            <div className="text-xl ">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      <div className="mt-2 space-y-2 items-center">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 hover:bg-gray-300 duration-200 p-1 rounded-md cursor-pointer"
          >
            <div className="text-xl ">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />

      <div className="mt-2 space-y-2 items-center">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold">Explore</h1>
          <FaChevronRight />
        </div>
        {sidebarItems3.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 hover:bg-gray-300 duration-200 p-1 rounded-md cursor-pointer"
          >
            <div className="text-xl ">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <span className="text-xs font-semibold text-gray-500">
        About Press Copyright <br /> Contact us Creators Advertise Developers
        <p>
          <br />
          Terms Privacy Policy & Safety <br /> How YouTube works <br />
          Test new features
        </p>
        <br />
        <p className="text-xs text-gray-700">© 2025 Google LLC</p>
      </span>
    </div>
  );
};

export default Sidebar;
