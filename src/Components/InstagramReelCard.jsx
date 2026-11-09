function InstagramReelCard({ url }) {
  return (
    <div className="flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: "0",
          maxWidth: "400px",
          minWidth: "280px",
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}

export default InstagramReelCard;
