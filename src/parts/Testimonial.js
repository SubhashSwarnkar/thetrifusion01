import React from "react";

export default function Testimonial({ data }) {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl text-theme-blue font-bold mb-4">
          Work you can verify
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-theme-purple to-dark-theme-purple mx-auto rounded-full mb-6"></div>
        <p className="font-light text-lg text-gray-400 max-w-2xl mx-auto">
          Live production sites and public URLs you can open. No star ratings,
          no invented reviews.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1">
        {data.map((item) => (
          <div
            key={item.id}
            className="snap-start shrink-0 w-[85%] sm:w-[46%] xl:w-[31%] h-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 relative group overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-9xl text-theme-purple opacity-5 font-serif select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
              &quot;
            </div>

            <div className="flex items-center mb-6 relative z-10">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-theme-purple to-theme-blue">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} project screenshot`}
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-theme-blue text-lg font-bold group-hover:text-theme-purple transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium line-clamp-1">
                  {item.company}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-base leading-relaxed relative z-10">
              {item.testimoni}
            </p>
            {item.url ? (
              <a
                href={item.url}
                className="inline-flex items-center mt-5 px-4 py-2 rounded-xl bg-theme-purple/10 text-theme-purple font-bold text-sm hover:bg-theme-purple hover:text-white transition-colors relative z-10"
                {...(item.url.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {item.linkLabel || "Verify this project →"}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
