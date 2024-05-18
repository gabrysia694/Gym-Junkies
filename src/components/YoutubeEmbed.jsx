import React, { useState } from "react";

const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };

function YoutubeEmbed(props) {
  
    const [embedId, setEmbedId] = useState(extractVideoId(props.videoLink) || null);
  

  if (!embedId) {

    console.log(`YouTube video link must be in format: "https://www.youtube.com/watch?v={embedId}"`)
    console.log("Video link: ", props.videoLink)

    return(
        <></>
    )
  }

  return (
    <div className="relative overflow-hidden pb-[56.25%] h-0">
      <iframe
        width="853"
        height="480"
        className="absolute top-0 left-0 w-full h-full"
        //   src={`https://www.youtube.com/embed/${embedId}`}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YoutubeEmbed;
