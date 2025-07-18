import moment from "moment";

const Time = ({ time }) => {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("mm:ss");

  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded-md ">
        {videoTime}
      </span>
    </div>
  );
};

export default Time;
