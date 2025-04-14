import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import VideoCard from "../../components/VideoCard";
import { SkeletonLoader } from "../../components/Loader";
import Error from "../../components/Error";

const Feed = () => {
  // State kurulumları
  let [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Url'deki parametreye eriş
  const [params] = useSearchParams();
  const selectedCategory = params.get("category");

  // ! Sayfa yüklendiği anda api isteği at
  useEffect(() => {
    // Api isteği atılacak url'i belirle
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trending"
      ? "/trending"
      : `/search?query=${selectedCategory}`;

    //       Api isteği at
    api
      .get(url)
      .then((res) => setVideos(res.data.data)) // Gelen verileri videos stateine aktar
      .catch((err) => setError(err.message)) // Hata varsa hatanın mesajını error stateine aktar
      .finally(() => setIsLoading(false)); // Son durumda isLoading state'ini false çek
  }, [selectedCategory]);

  // Gelen video verisi içerisinde type'ları video'ya eşit olanları al

  videos = videos.filter((video) => video.type === "video");

  return (
    <div className="flex">
      <Sidebar selectedCategory={selectedCategory} />
      <div className="videos ">
        {/* isLoading ise yükleniyor hata varsa hata bunların hiçbiri değilse videoları maple */}
        {isLoading ? (
          <SkeletonLoader />
        ) : error ? (
          <Error info={error} />
        ) : (
          videos.map((video, key) => <VideoCard key={key} video={video} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
