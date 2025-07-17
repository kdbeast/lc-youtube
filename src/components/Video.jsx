import { Link } from "react-router-dom";
import Time from "../loader/Time";

const Video = ({ video }) => {
  return (
    <div className="">
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col">
          <div className=" relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="w-72" src={video?.thumbnails[0]?.url} alt="" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
