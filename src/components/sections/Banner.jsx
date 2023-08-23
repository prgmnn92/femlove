import { josefineSans, sourceSerif } from "@/fonts";

export default function Banner({ title, subtitle, text }) {
  return (
    <section className="px-6 pb-24 lg:pt-[22vh] pt-24 bg-white sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p
          style={josefineSans.style}
          className="text-xs font-light uppercase lg:text-sm"
        >
          {subtitle}
        </p>
        <div className="w-8 h-[1px] bg-black/40 mx-auto my-4 rounded"></div>
        <h1
          style={sourceSerif.style}
          className="text-3xl font-light lg:text-5xl"
        >
          {title}
        </h1>
        {text && (
          <p className="mt-2 text-base leading-8 text-gray-600 lg:mt-6 lg:text-lg">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
