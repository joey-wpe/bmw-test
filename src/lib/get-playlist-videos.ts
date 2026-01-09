export async function fetchPlaylistVideos(playlistId: string) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!;

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // revalidate every hour for better caching
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error(Error("Failed to fetch YouTube playlist"));
    return;
  }

  const data = await res.json();

  const videos = data.items.map((item: any) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails.maxres?.url ||
      item.snippet.thumbnails.standard?.url ||
      item.snippet.thumbnails.high?.url ||
      item.snippet.thumbnails.medium?.url ||
      item.snippet.thumbnails.default?.url,
  }));

  return videos.reverse();
}
