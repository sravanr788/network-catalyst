
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Cloud, Settings, CheckCircle } from 'lucide-react';

const Advance = () => {
  const features = [
    {
      icon: <Users size={24} className="text-blue-500" />,
      title: "Specialized Team",
      description: "We have specialized people for designing and deploying IT on-prem and cloud network solutions."
    },
    {
      icon: <Cloud size={24} className="text-blue-500" />,
      title: "Cloud Solutions",
      description: "Our expertise spans both on-premises and cloud-based network solutions."
    },
    {
      icon: <Settings size={24} className="text-blue-500" />,
      title: "Collaborative Approach",
      description: "We work closely with customer's IT team for their success and our success."
    },
    {
      icon: <CheckCircle size={24} className="text-blue-500" />,
      title: "Flexible Models",
      description: "We support both CAPex & OPex model for IT infrastructure to suit your business needs."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="advance">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full -ml-48 -mb-48 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="section-subtitle">Our Edge</h3>
            <h2 className="section-title mb-6">Our Advance</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We have specialized people for designing and deploying IT on-prem and cloud network solutions. We work closely with customer's IT team for their success and our success as we all know we together can grow to next level and not along. We also support both CAPex & OPex model for IT infra.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-blue-50 p-3 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3 scale-105 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative z-10 rounded-lg shadow-lg w-full h-auto object-cover"
                style={{ minHeight: '400px' }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Team Collaboration</h4>
                    <p className="text-gray-600 text-sm">Growing together with our clients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advance;
