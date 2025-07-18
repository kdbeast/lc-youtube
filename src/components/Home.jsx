import { useAuth } from "../context/AuthProvider";
import ListItem from "./ListItem";
import Sidebar from "./Sidebar";
import Video from "./Video";

const Home = () => {
  const { data, loading } = useAuth();
  console.log(data);

  return (
    <div className="flex mt-15">
      <Sidebar />
      <div className="h-[calc(100vh-1rem)] overflow-y-scroll overflow-x-hidden">
        <ListItem />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video video={item?.video} key={item?.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
