import { ContactForm } from "../components/ContactForm";
import { Definition } from "../components/Definition";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { Social } from "../components/Social";
import { Tools } from "../components/Tools";

export function Home() {
  return (
    <>
      <div className="mx-5 md:w-4/5 md:mx-auto home-bg">
        <section className="lg:flex lg:flex-wrap lg:mx-auto lg:w-4/5 lg:justify-between xl:w-3/4">
          <div className=" flex flex-col lg:w-2/4 ">
            <h2 className="text-5xl">
              <strong>G'day, this is Adrià!</strong>
            </h2>
            <h4 className="text-3xl lg:text-3xl text-black mt-3">
              <strong>Full stack web developer</strong>
            </h4>
            <p className=" text-xl text-black">
              from Barcelona coding complex websites
            </p>
            <div className="w-full hidden lg:block align-bottom mt-auto">
              <Definition />
            </div>
          </div>
          <div className=" mx-auto lg:w-2/4 ">
            <div className="happy-adri my-20 mx-auto lg:my-0 lg:mx-0 lg:ml-auto">
              {" "}
            </div>
          </div>
          <div className="w-full lg:hidden">
            <Definition />
          </div>
        </section>
      </div>
      <div className="project-bg px-5 lg:w-full lg:mx-auto">
        <div className="md:w-4/5 md:mx-auto">
          <section className="lg:mx-auto lg:w-4/5 lg:justify-between xl:w-3/4 ">
            <h2 id="projects" className="text-5xl mb-12">
              <strong>Work</strong>
            </h2>
            <div className=" md:flex md:flex-wrap md:justify-between">
              <Projects />
            </div>
          </section>
        </div>
      </div>
      <section className="tools-section mx-5 md:mx-auto md:w-4/5">
        <Tools />
      </section>
      <div className="px-5 lg:w-full lg:mx-auto">
        <div className="md:w-4/5 mx-auto">
          <section className="mx-5 lg:mx-auto lg:w-4/5 lg:justify-between xl:w-3/4">
            <h2 id="about" className="text-5xl ">
             <strong>About</strong> 
            </h2>
            <div className="mt-9">
              <img className="hidden md:block" src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681217778/React-portfolio/personal%20skills/pers-skills_rl3taf.png" alt="" />
              <img className="md:hidden block" src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681218317/React-portfolio/personal%20skills/skills-mobile_rc0bet.png" alt="" />
            </div>
          </section>
        </div>
      </div>
      <ContactForm/>
      <div className="px-5 md:w-full md:mx-auto social-section">
        <div className="md:w-4/5 mx-auto">
      <section className=" m-0 lg:mx-auto lg:w-4/5 lg:justify-between xl:w-3/4">
        <Social />
      </section>
      </div>
      </div>
      <Footer />
    </>
  );
}
