import {GiCardboardBox} from "react-icons/gi";
import {Element} from "react-scroll";
import {FaConnectdevelop, FaTeamspeak,} from "react-icons/fa";
import {SiSololearn} from "react-icons/si";

function services() {
    return (<Element id="services" name="services">
        <div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
            <p className="text-sm uppercase text-gray-400">My Skills</p>
            <h1 className="text-indigo-900 text-6xl font-bold text-center">
                My Expertise
            </h1>
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                <div className="flex  flex-col justify-center items-center">
                    {/* first block */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <FaConnectdevelop
                            className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                        <h2 className="text-xl text-indigo-600 font-semibold">
                            Development
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        I have been developing web and mobile applications for 2 years now. I have worked with HTML,
                        CSS, JavaScript, React, Next.js, Bootstrap, Material UI, Laravel, Spring Boot, MySQL, Firebase.
                    </p>
                </div>

                {/* second block */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <GiCardboardBox
                            className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                        <h2 className="text-xl text-indigo-600 font-semibold">
                            Strategy
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        I have a good understanding of how to create a good strategy for a project. I have worked with
                        many clients and have been able to create a good strategy for their projects.
                    </p>
                </div>
            </div>

            {/* second grid */}
            <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
                <div className="flex flex-col justify-center items-center">
                    {/* first block */}
                    <div className="flex justify-center items-center cursor-pointer">
                        <FaTeamspeak className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                        <h2 className="text-xl text-indigo-600 font-semibold ">
                            Team playing
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        I team up with other developers to build amazing projects. I have worked with a team of 2
                        developers to build a web application for a client, and we were able to deliver the project on time.
                    </p>
                </div>

                {/* second block */}
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center cursor-pointer">
                        <SiSololearn className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md"/>
                        <h2 className="text-xl text-indigo-600 font-semibold">
                            Self learning
                        </h2>
                    </div>
                    <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
                        I learn new technologies and frameworks by myself. I have been learning new technologies and
                        frameworks for 2 years now and I am still learning new technologies and frameworks.
                    </p>
                </div>
            </div>
        </div>
    </Element>);
}

export default services;
