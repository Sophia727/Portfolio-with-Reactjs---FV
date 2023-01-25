import React, { useEffect, useState } from "react";
// import Project from "../components/Project";
import Title2 from "../components/Title2";
import { projects, btnType } from "../ProjectsData";
import '../style/homep.css'


function Projects() {
  const [filterImages, setFilterImages] = useState(null);

  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter(
      (project) => project.value === btnType);
    // const newFilterImages = projects.filter(project => (project === btnType));
    btnType !== "All"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };
  console.log(filterImages);
  return (
    <div className="bg-[#000409]">
      <div id="projects" className="flex flex-col align-middle md:px-20">
        <Title2
          title2Name="Some of my projects"
          class="mx-[15px] mb-10 lg:text-left lg:ml-5 md:ml-5 lg:pt-[20px] text-center md:text-left"
        />
        <div id="projects" className="text-center text-white">
          <ul className="border-y-2 border-solid mx-16 md:mx-5">
            {/* filters */}

            {btnType.map((btn) => {
              return (
                <button 
                className="m-3"
                key={btn.id} value={btn.value} onClick={handleClick}>
                  {btn.name}
                </button>
              )
            })}
          </ul>
        </div>

        <div className="mx-8 md:mx-5 mt-16 gap-7 flex lg:grid lg:grid-cols-3 flex-col mb-10 justify-around">
          {filterImages && filterImages.map(filterImage => {
                          console.log(filterImage.id);

            return (
            <div key={filterImage.id} id="container-image" className=" text-white lg:relative">
              <img className="h-[100%]" src={filterImage.image} />
              <div id="card" className="transition-all ease-in-out duration-500 px-5 py-2 bg-[#0e1e3183] lg:bg-[#0e1e31ad] lg:absolute top-[0px] lg:opacity-0 lg:overflow-y-scroll lg:w-[100%] lg:h-[100%]">
                <a href={filterImage.href} target="_blank"><h2 className="">{filterImage.name}</h2></a>
                <h6 className="text-sm">{filterImage.value}</h6>
                <p className=" my-3 text-sm text-myLightBlue leading-6 ">{filterImage.description}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
