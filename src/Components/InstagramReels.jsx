import { useEffect } from "react";
import InstagramReelCard from "./InstagramReelCard";

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DVbwsmTEpFD/",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DZaE55goqS2/",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DWhKqgdEsrf/",
  },
];

function InstagramReels() {
  useEffect(() => {
    const processEmbeds = () => {
      window.instgrm?.Embeds.process();
    };

    const scriptId = "instagram-embed-script";

    let script = document.getElementById(scriptId);

    if (window.instgrm) {
      processEmbeds();
    } else if (!script) {
      script = document.createElement("script");

      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      script.onload = processEmbeds;

      document.body.appendChild(script);
    } else {
      script.addEventListener("load", processEmbeds, { once: true });
    }

    return () => {};
  }, [reels.length]);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Instagram Reels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {reels.map((reel) => (
          <InstagramReelCard key={reel.id} url={reel.url} muted/>
        ))}
      </div>
    </section>
  );
}

export default InstagramReels;
