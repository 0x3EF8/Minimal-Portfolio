import { useEffect } from 'react';
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaServer,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiGraphql } from 'react-icons/si';

const frontendSkills = [
  { name: 'HTML/CSS', value: 80, icon: FaHtml5 },
  { name: 'JavaScript', value: 70, icon: FaJsSquare },
  { name: 'React', value: 80, icon: FaReact },
  { name: 'Next.js', value: 60, icon: SiNextdotjs },
  { name: 'TailwindCSS', value: 80, icon: SiTailwindcss },
];

const backendSkills = [
  { name: 'NodeJS', value: 30, icon: FaNodeJs },
  { name: 'Python', value: 75, icon: FaPython },
  { name: 'MySQL', value: 50, icon: FaDatabase },
  { name: 'APIs', value: 20, icon: FaServer },
  { name: 'MongoDB', value: 40, icon: SiMongodb },
  { name: 'GraphQL', value: 30, icon: SiGraphql },
];

const projects = [
  {
    id: 1,
    name: 'Sprinkles',
    href: 'https://lorem.example.com',
    github: 'https://github.com/yourusername/sprinkles',
    imageSrc:
      'https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE',
    used: 'ReactJS, TailwindCSS',
    description:
      'A restaurant website. irure in dolore voluptate duis aliqua do tempor dolor minim do nisi eiusmod sit consectetur ',
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative isolate overflow-hidden px-4 py-8 lg:py-12 lg:px-6" id="about">
      {/* About Me Section */}
      <div className="mx-auto max-w-6xl px-4 lg:flex lg:gap-x-8 lg:gap-y-8">
        <div className="card bg-base-100 bg-opacity-90 backdrop-blur-md shadow-lg lg:flex lg:items-center lg:flex-row border-2 border-base-300 mt-0">
          <figure className="w-full lg:w-1/2 p-4 lg:pl-6 lg:pr-6 lg:pt-4 lg:pb-4">
            <img
              className="w-full h-58 lg:h-64 max-w-none rounded-xl object-cover"
              src="https://mir-s3-cdn-cf.behance.net/user/276/8e5589639575067.62aa3ffd5d92c.jpg"
              alt="Jay Patrick Cano"
            />
          </figure>
          <div className="card-body w-full lg:w-1/2 p-6 lg:p-8">
            <h2 className="card-title text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              About Me
            </h2>
            <p className="mt-4 text-base leading-7" data-aos="fade-right">
              I am a passionate developer with a strong focus on creating innovative solutions that
              blend technology and creativity. Over the years, I have honed my skills in various
              programming languages and frameworks, allowing me to tackle complex problems and
              deliver high-quality projects. My journey in the tech world is driven by continuous
              learning and a desire to build impactful solutions that make a difference.
            </p>
            <div className="card-actions justify-start mt-4">
              <button className="btn btn-primary btn-md transition-transform transform hover:scale-105 mt-4">
                Open CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Experience and Education */}
      <div className="mt-12 mx-auto max-w-5xl px-4 lg:px-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6">
        <div className="p-4 lg:p-4">
          <div
            className="bg-base-100 bg-opacity-90 backdrop-blur-md ring-2 ring-base-300 rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in">
            <div className="flex justify-center items-center h-10 w-10 mx-auto rounded-full bg-primary text-base-100">
              <BriefcaseIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-2xl text-center font-bold tracking-tight text-primary">
              Experience
            </h2>
            <ul className="mt-4 space-y-3 list-disc list-inside text-base">
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Collaborated with cross-functional teams to deliver high-quality projects</li>
              <li>Implemented responsive design to enhance user experience</li>
            </ul>
          </div>
        </div>
        <div className="p-4 lg:p-4">
          <div
            className="bg-base-100 bg-opacity-90 backdrop-blur-md ring-2 ring-base-300 rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in">
            <div className="flex justify-center items-center h-10 w-10 mx-auto rounded-full bg-primary text-base-100">
              <AcademicCapIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-2xl text-center font-bold tracking-tight text-primary">
              Education
            </h2>
            <ul className="mt-4 space-y-3 list-disc list-inside text-base">
              <li>Bachelor of Science in Computer Science - XYZ University</li>
              <li>Certification in Full-Stack Web Development - ABC Institute</li>
              <li>Completed various online courses on advanced JavaScript and React</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-8 sm:py-12" id="skills">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg leading-6">Explore my</h2>
            <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Skills</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-8 space-y-6 lg:space-y-0">
            <div
              className="bg-base-100 bg-opacity-90 backdrop-blur-md ring-2 ring-base-300 rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in">
              <p className="text-xl text-center font-bold mb-4">Frontend Development</p>
              <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-4">
                {frontendSkills.map((frontend) => (
                  <div key={frontend.name} className="relative pl-14">
                    <dt className="text-base font-semibold leading-6">
                      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                        <frontend.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {frontend.name}
                    </dt>
                    <dd className="mt-1 text-base leading-6 flex items-center">
                      <div className="relative pt-1 w-full">
                        <div className="overflow-hidden h-2 mb-3 text-xs flex rounded bg-primary/20">
                          <div
                            style={{ width: `${frontend.value}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-1000 ease-in-out"></div>
                        </div>
                        <div className="absolute right-0 top-0 transform -translate-y-5">
                          <span className="text-primary font-semibold">{frontend.value}%</span>
                        </div>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              className="bg-base-100 bg-opacity-90 backdrop-blur-md ring-2 ring-base-300 rounded-xl p-6 shadow-xl transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in">
              <p className="text-xl text-center font-bold mb-4">Backend Development</p>
              <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-4">
                {backendSkills.map((backend) => (
                  <div key={backend.name} className="relative pl-14">
                    <dt className="text-base font-semibold leading-6">
                      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                        <backend.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {backend.name}
                    </dt>
                    <dd className="mt-1 text-base leading-6 flex items-center">
                      <div className="relative pt-1 w-full">
                        <div className="overflow-hidden h-2 mb-3 text-xs flex rounded bg-primary/20">
                          <div
                            style={{ width: `${backend.value}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-1000 ease-in-out"></div>
                        </div>
                        <div className="absolute right-0 top-0 transform -translate-y-5">
                          <span className="text-primary font-semibold">{backend.value}%</span>
                        </div>
                      </div>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-8 sm:py-12" id="projects">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg leading-6">Discover my</h2>
            <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Projects</p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-lg shadow-lg ring-2 ring-base-300"
                data-aos="zoom-in">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 bg-base-100">
                  <h3 className="text-lg font-bold text-primary">{project.name}</h3>
                  <p className="mt-2 text-base text-base-content">{project.description}</p>
                  <p className="mt-2 text-sm text-gray-500">{project.used}</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href={project.github}
                      className="btn btn-outline btn-sm btn-primary flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.href}
                      className="btn btn-outline btn-sm btn-secondary flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      <span>Live Site</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
