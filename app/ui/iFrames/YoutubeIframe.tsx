export default function YoutubeIframe() {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">Video de YouTube</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[315px] rounded"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

