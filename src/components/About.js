import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
            Hi, I am Parul
          </h2>
          <p className="mb-3 leading-relaxed">
            I'm an MTech graduate in Computer Science from International
            Institute of Information Technology, Bangalore (IIITB).
          </p>
          <p className="mb-3 leading-relaxed">
            I'm really passionate about both front-end and back-end development.
            I enjoy learning about new technologies and finding creative
            solutions to problems.
          </p>
          <p className="mb-5 leading-relaxed">
            With a strong foundation in core computer science subjects, I'm
            skilled at addressing diverse challenges.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-82 w-5/6"
            alt="hero"
            // src="./coding.svg"
            // src = "https://cdn.dribbble.com/users/4055494/screenshots/15215756/media/d2b66c4ca0192aa26d103448b3d1518b.gif"
            src="./Coding3.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
}
