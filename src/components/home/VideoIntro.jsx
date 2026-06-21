const VideoIntro = () => {
  return (
    <section className="bg-primary py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Watch &amp; Learn
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">
            See CMPI in Action
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto leading-relaxed">
            Get a glimpse of our campus, laboratories, faculty, and student life
            through our official introduction video.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="CMPI Institute Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-sm text-white/50 font-semibold">
            Cox's Bazar Model Polytechnic Institute — Official Introduction
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
