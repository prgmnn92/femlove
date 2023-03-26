import dynamic from "next/dynamic";

const DynamicMuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  loading: () => <p>Loading...</p>,
});

export default function Video(props) {
  const { value } = props;
  return (
    <DynamicMuxPlayer
      playbackId={value.video.asset.playbackId}
      metadata={{ video_title: value.title }}
      streamType="on-demand"
    />
  );
}
