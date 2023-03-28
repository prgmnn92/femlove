import dynamic from "next/dynamic";

const DynamicMuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  loading: () => <p>Loading...</p>,
});

export default function Video(props) {
  const { value } = props;
  return (
    <div className="flex justify-center py-4">
      <DynamicMuxPlayer
        playbackId={value.video.asset.playbackId}
        metadata={{ video_title: value.title }}
        style={{
          height: "100%",
          maxWidth: "250px",
        }}
        streamType="on-demand"
      />
    </div>
  );
}
