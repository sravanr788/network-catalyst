
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Edit, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = [
    {
      icon: <Edit className="w-6 h-6 text-blue-600" />,
      title: "Easy To Edit Process",
      description: "Many aspects of computing and technology and the term is more recognizable than before."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "WordPress Capitable Design",
      description: "Many aspects of computing and technology and the term is more recognizable than before."
    },
    {
      icon: <Smile className="w-6 h-6 text-blue-600" />,
      title: "Enjoy Our Work",
      description: "Passionate about delivering excellence through our work, creating experiences that inspire."
    }
  ];

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-blue-500 absolute top-0 left-0 w-24 h-24 -z-10 rounded-tl-lg"></div>
            <div className="bg-blue-200 absolute bottom-0 right-0 w-32 h-32 -z-10 rounded-br-lg"></div>
            
            <div className="bg-white shadow-2xl p-4 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Network Catalyst Team" 
                className="w-full h-auto rounded-lg object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="section-subtitle">About Us</h3>
            <h2 className="section-title">Welcome To Network Catalyst</h2>
            <p className="text-gray-600 leading-relaxed">
              Network Catalyst Solutions is a technology consulting and solutions company helping organizations to gain edge in the market by solving business challenges, optimizing costs and enhancing efficiency through Industry standard Infrastructure, transforming and innovative solutions, IT management and more.
            </p>

            <div className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
