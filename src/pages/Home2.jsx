import { BiDownvote } from "@react-icons/all-files/bi/BiDownvote"
import React from "react"
import Button from "../components/Button"
import myPic from "../assets/images/IMG_2099.PNG"
import my_cv from '../assets/files/dummy.pdf'

function Home2() {
  return (
    <div className="w-[100%]">
      <video
        autoPlay
        id="vid"
        muted
        loop
        className=" lg:max-w-[1300px] lg:h-[90%] lg:block lg:w-screen hidden "
      >
        <source src="Circuit-27725.mp4" />
      </video>

      <div className="md:flex lg:block lg:mt-[80px] md:pb-16 w-screen md:justify-around items-center ">
        <div
          id="home"
          className=" md:top-[-50%] lg:mt-[-680px] md:ml-20 h-[400px]  mt-10 md:w-[40%]"
        >
          <h1 className="text-4xl text-myWhite ml-10 md:ml-0">Hello! I'm</h1>
          <h2 className="text-4xl text-myWhite ml-10 md:ml-0">
            <span className="text-myPink text-6xl md:text-7xl font-extrabold">
              Sophia Toukram
            </span>
            <br />
            Full Stack Web Developper
          </h2>
          <h4
            id="home_btn"
            className="text-myWhite mt-3 text-center md:w-[350px] md:text-left md:-ml-3"
          >
            <a href={my_cv} target="_blank">
              <Button btn_name="Resume" />
            </a>
            <a href="#contact">
              <Button btn_name="Contact" />
            </a>
            {/* ajouter chat */}
          </h4>
        </div>
        <div className="md:w-[30%] md:block hidden lg:hidden">
          <img src={myPic} alt="my picture" />
        </div>
      </div>
      <div className="lg:flex lg:justify-center md:relative lg:static static ">
        <a
          href="#AboutMe"
          className="flex animate-bounce justify-center  lg:static static lg:ml-[0px] md:ml-0 lg:mt-[-100px]"
        >
          <BiDownvote
            id="arrowDown"
            className="text-myWhite text-5xl"
          ></BiDownvote>
        </a>
      </div>
    </div>
  );
}

export default Home2;
