import React, { useEffect } from 'react';
import pfp from '../../assets/images/Pat.png';
import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaPaintBrush, FaChartLine, FaProjectDiagram, FaNewspaper } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const animationSequence = [
  'Transforming Ideas into Reality',
  2000,
  'Crafting Exceptional User Experiences',
  2000,
  'Innovating Web Development',
  2000,
  'Building Responsive Web Applications',
  2000,
  'Designing Intuitive User Interfaces',
  2000,
  'Creating Scalable Web Solutions',
  2000,
];

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="relative isolate overflow-hidden px-4 py-8 lg:py-12 lg:px-6 flex flex-col items-center">
      <div
        className="hero-content w-full max-w-4xl bg-base-100 bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl flex flex-col lg:flex-row-reverse items-center"
        data-aos="fade-up">
        <div className="relative w-64 h-64 mx-auto lg:mx-0 flex-shrink-0">
          <div className="absolute inset-0 bg-primary rounded-lg transform translate-x-3 translate-y-3"></div>
          <img
            src={pfp}
            alt="Jay Patrick Cano"
            className="w-full h-full rounded-lg border-4 border-base-300 shadow-lg relative"
          />
        </div>
        <div className="text-center lg:text-left lg:ml-8 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-primary">Hello, I'm Jay Patrick Cano</h1>
          <p className="py-2 text-lg font-semibold text-primary">
            <TypeAnimation sequence={animationSequence} speed={50} repeat={Infinity} />
          </p>
          <p className="py-2 text-base text-base-content">
            I combine technology and creativity to build visually appealing and functional websites
            and apps. My goal is to create solutions that help you achieve your objectives. Let's
            bring your vision to life and make a lasting impact.
          </p>
          <button className="btn btn-primary btn-md transition-transform transform hover:scale-105 mt-4">
            Get in touch
          </button>
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl px-4 lg:px-0">
        <h2 className="text-2xl font-bold text-center mb-6">Summary</h2>
        <p className="text-center text-base mb-12">
          A dedicated professional with expertise in web development, user experience design, and
          creating scalable solutions. With a passion for technology and innovation, I strive to
          deliver exceptional digital experiences.
        </p>
        <h2 className="text-2xl font-bold text-center mb-6">Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaCode,
              title: 'Web Development',
              description:
                'Creating responsive and scalable web applications tailored to your business needs.',
              aos: 'fade-right',
            },
            {
              icon: FaPaintBrush,
              title: 'User Experience Design',
              description:
                'Designing intuitive user interfaces that enhance user engagement and satisfaction.',
              aos: 'fade-up',
            },
            {
              icon: FaChartLine,
              title: 'Consulting',
              description:
                'Providing expert advice and strategies to optimize your digital presence and performance.',
              aos: 'fade-left',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-center lg:text-left p-4 border border-gray-300 rounded-lg shadow-sm"
              data-aos={service.aos}>
              <service.icon className="text-primary text-3xl mx-auto lg:mx-0 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-base">{service.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-center mt-12 mb-6">
          Featured Projects & Recent Activities
        </h2>
        <div className="space-y-6">
          {[
            {
              icon: FaProjectDiagram,
              title: 'Project Alpha',
              description:
                'A comprehensive e-commerce platform with advanced user analytics and personalized shopping experiences.',
              aos: 'fade-right',
            },
            {
              icon: FaProjectDiagram,
              title: 'Project Beta',
              description:
                'An innovative social media app with real-time collaboration features and seamless integration.',
              aos: 'fade-up',
            },
            {
              icon: FaNewspaper,
              title: 'Recent Activity',
              description: (
                <ul className="list-disc list-inside text-base">
                  <li>Participated in Pornhub 2023</li>
                  <li>Contributed to open-source Xvideos web project</li>
                  <li>Published a blog post on React best practices</li>
                </ul>
              ),
              aos: 'fade-left',
            },
          ].map((item, index) => (
            <div key={index} className="border-l-4 border-primary pl-4" data-aos={item.aos}>
              <item.icon className="text-primary text-2xl mb-2" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
