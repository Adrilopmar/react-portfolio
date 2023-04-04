export function Social() {
  return (
    <>
      <div className="mx-5">
        <h3 className="text-3xl">Feeling social? </h3>
        <p className="text-xl mt-2">Find me on these online spaces too!</p>
        <div className="flex justify-around mt-9">
          <a
            className="logo-link-social"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/adrilopmar/"
          >
            <img
              src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1680531103/React-portfolio/logo/LinkedIn_logo_mgkcjd.png"
              alt="LinkedIn"
            />
          </a>
          <a
            className="logo-link-social"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Adrilopmar"
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1680531103/React-portfolio/logo/github_gqv5wh.png"
              alt="Github"
            />
          </a>
          <a
            className="logo-link-social"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/Arritatanet"
          >
            <img
              src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1680531103/React-portfolio/logo/twitter_emnptw.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </>
  );
}
