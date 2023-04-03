import { Definition } from "../components/Definition";
import { Projects } from "../components/Projects";
import { Tools } from "./Tools";

export function Home() {
  return (
    <>
      <div className="mx-5">
        <section className="container">
          <h2 className="text-5xl">G'day, this is Adrià!</h2>
          <div>
            <h4 className="text-3xl  mt-3">Full stack web developer</h4>
            <p className=" text-xl">from Barcelona coding complex websites</p>
          </div>
          <div className="happy-adri my-20 mx-auto "> </div>
          <Definition />
        </section>
        <section>
          <h2 className="text-5xl ">Work</h2>
          <Projects />
        </section>
      </div>
      <section className=" tools-section">
      <Tools />
      </section>
    </>
  );
}
