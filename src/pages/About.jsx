import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with over 5 years of experience 
              creating digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Greta working"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                My Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Started as a curious computer science student, I've evolved into a 
                seasoned developer who loves solving complex problems with elegant solutions. 
                My journey has taken me through various technologies and industries, 
                always with a focus on creating meaningful user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blogs and workshops.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Frontend</h3>
              <p className="text-gray-600">
                React, Vue.js, Angular, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Backend</h3>
              <p className="text-gray-600">
                Node.js, Python, PostgreSQL, MongoDB, AWS
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tools</h3>
              <p className="text-gray-600">
                Git, Docker, Jenkins, Figma, VS Code
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;