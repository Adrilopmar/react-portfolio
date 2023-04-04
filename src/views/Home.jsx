import { Definition } from "../components/Definition";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { Social } from "../components/Social";
import { Tools } from "../components/Tools";

export function Home() {
  return (
    <>
      <div className="mx-5">
        <section className="container">
          <h2 className="text-5xl">G'day, this is Adrià!</h2>
          <div>
            <h4 className="text-3xl text-black mt-3">Full stack web developer</h4>
            <p className=" text-xl text-black">from Barcelona coding complex websites</p>
          </div>
          <div className="happy-adri my-20 mx-auto "> </div>
          <Definition />
        </section>
        <section>
          <h2 id="projects" className="text-5xl ">
            Work
          </h2>
          <Projects />
        </section>
      </div>
      <section className=" tools-section">
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
