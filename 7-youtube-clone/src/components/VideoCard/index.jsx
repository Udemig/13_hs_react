import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video);
  const [isHover, setIsHover] = useState(false);

  const thumbnail =
    isHover && video.richThumbnail
      ? video.richThumbnail[video.richThumbnail?.length - 1].url
      : video.thumbnail[video.thumbnail?.length - 1].url;

  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      className="cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image Area */}
      <div>
        <img
          src={thumbnail}
          className="rounded-lg w-full h-full"
          alt="card-image"
        />
      </div>

      {/* Info Area */}
      <div className="mt-3 flex gap-3">
        <img
          src={video.channelThumbnail[0].url}
          className="size-14 rounded-full mt-2"
          alt="channel-picture"
        />

        <div>
          <p className="font-bold line-clamp-1 mt-2">{video.title}</p>
          <p>{video.channelTitle}</p>

          <div className="flex gap-3 items-center mt-2">
            <p>{millify(video.viewCount)} Görüntülenme</p> *
            {video.isLive ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p>{video.publishedTimeText}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
