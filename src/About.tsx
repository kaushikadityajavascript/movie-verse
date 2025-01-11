// import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">
            About MovieVerse
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Dive into the ultimate movie experience!
          </p>
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://mrwallpaper.com/images/hd/cool-kgf-chapter-2-poster-0axobl2ual8wurln.jpg"
                alt="Movie Experience"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:ml-10 mt-8 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At <span className="text-yellow-500 font-semibold">MovieVerse</span>, 
                we aim to bring your favorite movies to life. With curated
                collections, detailed reviews, and stunning visuals, we’re your
                one-stop destination for all things cinema. Whether you're a fan of
                action, romance, or indie films, we’ve got something for everyone.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Curated Playlists</h3>
              <p className="text-gray-300">
                Discover top-rated movies across genres, handpicked by our team
                of experts.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">In-Depth Reviews</h3>
              <p className="text-gray-300">
                Get detailed insights, trivia, and behind-the-scenes stories of
                your favorite movies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">Personalized Suggestions</h3>
              <p className="text-gray-300">
                Let our AI recommend movies based on your viewing preferences.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
            Join Us
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Become a part of the MovieVerse community and explore the magic of
            cinema like never before.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
