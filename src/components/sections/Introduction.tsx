
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, Users } from 'lucide-react';

const Introduction = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="section-padding bg-white" id="introduction">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="section-title text-gray-900 after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
            NETWORK CATALYST SOLUTIONS
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Our engineering team have hands-on experience in all aspects of IT planning, deployment, operational management and maintenance support. We design solutions that fit best within your environment and help achieve your business goals.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {[
            {
              icon: <Shield className="w-10 h-10 text-blue-600" />,
              title: "Trusted Advisors",
              description: "We work with you as trusted advisors to help determine the best solution for your business needs."
            },
            {
              icon: <Server className="w-10 h-10 text-blue-600" />,
              title: "Business Enabler",
              description: "We transform your business by changing the role of your ICT systems from a support function to a mission-critical business enabler."
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: "Leading Clients",
              description: "Our customers include leading Banking Institutions, Pharmaceutical and Manufacturing Companies, and small to medium sized enterprises."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow card-hover"
            >
              <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
