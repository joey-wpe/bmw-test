import type { AcfYoutubePlaylist } from "@/__generated__/graphql";
import { Button, Loader } from "@/components/ui";
import { fetchPlaylistVideos } from "@/lib";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import blockConfig from "./config";

const Image = dynamic(() => import("next/image"), {
  loading: () => <div className="h-[226px] w-full bg-gray-200 animate-pulse" />,
});

export function AcfYoutubePlaylist(props: AcfYoutubePlaylist) {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [visibleVideos, setVisibleVideos] = useState([]);

  const { blockYoutubePlaylist } = props;

  if (!blockYoutubePlaylist) {
    return null;
  }

  const { playlistId } = blockYoutubePlaylist;

  if (!playlistId) {
    return null;
  }

  const getVideos = async () => {
    const videos = await fetchPlaylistVideos(playlistId);
    if (videos) {
      setLoading(false);
      setVideos(videos);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setVisibleVideos(videos.slice(0, visibleCount));
  }, [videos, visibleCount]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(visibleCount + 9);
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-[1300px] pb-10">
      {loading && <Loader height={800} fullscreen={false} />}
      {!loading && (
        <Suspense fallback={<Loader height={800} fullscreen={false} />}>
          <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
            {visibleVideos.map((video) => (
              <div className="flex flex-col items-start gap-4" key={video.id}>
                <div className="relative h-[226px] w-full overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover object-center"
                    fill
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <p className="line-clamp-2 font-medium uppercase">
                  {video.title}
                </p>
                <Button
                  url={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  label="Learn More"
                  className="mt-auto"
                ></Button>
              </div>
            ))}
          </div>

          {visibleCount < videos.length && (
            <div className="mt-10 flex h-[40px] justify-center">
              {loadingMore && <Loader height={40} fullscreen={false} />}
              {!loadingMore && (
                <button
                  onClick={handleLoadMore}
                  className="btn-primary h-[40px] px-6"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </Suspense>
      )}
    </div>
  );
}

AcfYoutubePlaylist.displayName = blockConfig.displayName;
AcfYoutubePlaylist.fragments = blockConfig.fragment;
