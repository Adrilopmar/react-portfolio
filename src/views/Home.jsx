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
            <h2 className="text-5xl"><strong>G'day, this is Adrià!</strong></h2>
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
          <div className="happy-adri my-20 mx-auto lg:my-0 lg:mx-0 lg:ml-auto"> </div>
          </div>
          <div className="w-full lg:hidden">
            <Definition />
          </div>
        </section >
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
      <section className="tools-section mx-5 lg:mx-auto md:w-4/5">
        <Tools />
      </section>
      <section className="mx-5">
        <h2 id="about" className="text-5xl ">
          About
        </h2>
        <p>
          {`<Adri
class="Hard_worker Reliable"
id="Critical_thinking"
styles="Active_listening: true;
Adaptability: flex;
Teamwork: 100%; ">
</Adri>
<script>
const Adri = ["Patience", "Sincere",
"Positive", "Empathy"];
Adri.push(Willingness_to_learn);
if(problem && !solution){
Adri.find(Problem_solving)
}else if(problem > Adri){
Adri.concat(Understanding, Resilience)};
</script>
</Personal Skills>`}
        </p>
      </section>

      <section className=" social-section">
        <Social />
      </section>
      <Footer />
    </>
  );
}
