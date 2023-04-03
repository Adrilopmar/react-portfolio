import { Definition } from "../components/Definition";
import { Projects } from "../components/Projects";

export function Home() {
  return (
    <>
    <section className="container">
      <h2 className="text-5xl ml-5">G'day, this is Adrià!</h2>
      <div>
        <h4 className="text-3xl ml-5 mt-3">Full stack web developer</h4>
        <p className="ml-5 text-xl">from Barcelona coding complex websites</p>
      </div>
      <div className="happy-adri my-20 mx-auto "> </div>
      <Definition />
    </section>
      <section >
        <h2 className="text-5xl ml-5">Work</h2>
        <Projects />
      </section>
    </>
  );
}
