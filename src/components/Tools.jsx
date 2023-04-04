import { tools } from "../data/tools";
export function Tools() {
  return (
    <>
      <div className="lg:mx-auto lg:w-4/5 xl:w-3/4">
        <h2 className="text-5xl ">Tools</h2>
        <h3 className="text-2xl my-9 text-black">Technologies I use to bring your products to life:</h3>
        <div className="flex flex-wrap gap-5 justify-around mt-12">
          {tools.map((el,index)=> 
            <div key={index} className="w-2/5 lg:w-1/6 my-5">
              <img  className="logo-tech-img mx-auto " src={el.image} alt={el.name}/>
              <p className="text-center mt-3 text-xl text-black">{el.name}</p>
            </div>
            )}
        </div>
        
      </div>
    </>
  );
}