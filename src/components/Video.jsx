import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const Video = ({ video }) => {
  return (
    <div className="">
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col">
          {/* Thumbnail & Duration */}
          <div className=" relative h-48 md:h-50 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Channel Logo & Title */}
          <div className="flex space-x-2 mt-2 ">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border border-black">
                <img
                  className="h-full w-full rounded-full"
                  src={video?.author?.avatar[0]?.url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-600 text-[12px]">
                <span className="text-gray-600 text-[12px]">{`${abbreviateNumber(
                  video?.stats?.views,
                  0
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span className="text-gray-600 text-[12px]">
                  {video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
