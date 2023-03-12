import { useEffect } from "react";

import MuxPlayer from "@mux/mux-player-react";

export default function Video(props) {
  const { value } = props;
  return (
    <MuxPlayer
      playbackId={value.video.asset.playbackId}
      metadata={{ video_title: value.title }}
    />
  );
}
