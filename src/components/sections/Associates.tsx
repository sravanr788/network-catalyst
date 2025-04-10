
import React from 'react';
import { motion } from 'framer-motion';

const Associates = () => {
  // Sample logos from major tech companies (replace with actual client logos)
  const logos = [
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png' },
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png' },
    { name: 'Oracle', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png' },
    { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png' },
    { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/512px-Dell_logo_2016.svg.png' },
    { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/512px-HP_logo_2012.svg.png' },
    { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/512px-Vmware.svg.png' },
    { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/512px-SAP_2011_logo.svg.png' },
  ];

  return (
    <section className="section-padding bg-white" id="associates">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">Our Partners</h3>
          <h2 className="section-title mb-6">ASSOCIATES WITH</h2>
          <p className="text-gray-600">
            We're proud to collaborate with industry-leading technology partners to deliver the best solutions for our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-20 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Interested in becoming a technology partner? <a href="#contact" className="text-blue-600 font-medium hover:underline">Contact us</a> to learn more about our partnership opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Associates;
