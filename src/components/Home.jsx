import { useAuth } from "../context/AuthProvider";
import Sidebar from "./Sidebar";
import Video from "./Video";

const Home = () => {
  const { data } = useAuth();
  console.log(data);

  return (
    <div className="flex mt-15">
      <Sidebar />
      <div className="flex flex-wrap p-2 gap-4">
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video video={item?.video} key={item?.videoId} />;
        })}
      </div>
    </div>
  );
};

export default Home;
