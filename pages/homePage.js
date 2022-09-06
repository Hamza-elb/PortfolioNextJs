import React from "react";
import Image from "next/image";
import heroImage from "../public/images/me.jpg";
import {Element} from "react-scroll";

function Home() {
    return (
        <Element id="home" name="home">
            <div>
                <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
                    <div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
                        <Image
                            src={heroImage}
                            alt="heroImage"
                            layout="fill"
                            objectFit="cover"
                            className=" rounded-full cursor-pointer hidden md:block"
                        />
                    </div>
                    <div className="flex flex-col md:ml-20 mx-10 mt-10">
                        <h1 className="font-bold text-5xl text-left mb-5">
                            Hello, I am <span className="text-indigo-900">EL-BOURISSI</span>
                        </h1>
                        <p className="text-left font-serif font mb-5 flex-wrap">
                            I am 22 years old, I am a web developer, I am passionate about web development and I am
                            always looking for new challenges.
                            I am a student at the National School of Applied Sciences and I am currently in the third
                            year of engineering.

                        </p>
                        <a
                            href="#"
                            className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
                        >
                            See More
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;
