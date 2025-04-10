
import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Network, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Offerings = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100 
      }
    }
  };

  const offerings = [
    {
      icon: <Cloud size={48} className="text-blue-600" />,
      title: "ADVANCE SERVICES",
      description: "We provide solutions and recommendations regarding the upcoming technologies like Web Designing, Remote Monitor, Cloud and Artificial Intelligence to ensure that your organization has that edge in the market during digital transformation."
    },
    {
      icon: <Network size={48} className="text-blue-600" />,
      title: "INFRASTRUCTURE & INTEGRATION",
      description: "We bring together a range of disparate technologies, starting from enterprise sever and network router to security cameras, as a single network architecture so that you can realize the benefits of innovation and flexibility."
    },
    {
      icon: <GraduationCap size={48} className="text-blue-600" />,
      title: "TRAINING & CONSULTANCY",
      description: "Digital transformation can be overwhelming. We provide you with training and consultancy to understand the right mix of technology, applications, and solutions to maximize your performance."
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="offerings">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">What We Offering</h3>
          <h2 className="section-title mb-6">OUR OFFERINGS</h2>
          <p className="text-gray-600">
            We provide comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {offerings.map((offering, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2"></div>
                  <div className="p-8">
                    <div className="mb-6">
                      {offering.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{offering.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;
