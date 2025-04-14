import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "../../components/ChannelInfo";
import Description from "../../components/Description";
import Comments from "../../components/Comments";
import VideoCard from "../../components/VideoCard";
import { BasicLoader } from "../../components/Loader";
import Error from "../../components/Error";
const Detail = () => {
  // Url deki arama parametrelerine eriş
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  // State kurulumu
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = {
      id,
      extend: 1,
    };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <BasicLoader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="page-content">
          {/* Video  */}
          <div>
            {/* Player */}
            <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
              <ReactPlayer
                height={"100%"}
                width={"100%"}
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="my-3 text-xl font-bold line-clamp-2">
                {video.title}
              </h1>

              {/* Channel Info  */}
              <ChannelInfo video={video} />
              {/* Description  */}
              <Description video={video} />

              {/* Comments  */}
              <Comments videoId={id} />
            </div>
          </div>

          {/* Related Videos  */}
          <div>
            {video?.relatedVideos.data.map((i, key) => (
              <VideoCard key={key} video={i} isRow />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
