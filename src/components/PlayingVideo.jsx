import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchData } from "../utils/rapidapi";

const PlayingVideo = () => {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };

  // const fetchRelatedVideo = () =>{
  //   fetchData(`video/related/?id=${id}`).then((data) => {
  //     setRelatedVideo(data);
  //   });
  // }

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div>
        <div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lNl8KRVyxoI?si=yi4aocVDn6RYJKkT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayingVideo;
