
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={item} className="text-2xl font-bold mb-4">
              Network<span className="text-blue-400">Catalyst</span>
            </motion.h3>
            <motion.p variants={item} className="text-blue-100 mb-6">
              A technology consulting and solutions company helping organizations to gain edge in the market by solving business challenges.
            </motion.p>
            <motion.div variants={item} className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={item} className="text-xl font-bold mb-4">
              Quick Links
            </motion.h3>
            <motion.ul variants={container} className="space-y-2">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Sectors', 'News'].map((link, index) => (
                <motion.li key={index} variants={item}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-blue-100 hover:text-white flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span>{link}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={item} className="text-xl font-bold mb-4">
              Contact Us
            </motion.h3>
            <motion.div variants={container} className="space-y-4">
              <motion.div variants={item} className="flex items-start">
                <MapPin size={20} className="mr-3 text-blue-300 flex-shrink-0 mt-1" />
                <p className="text-blue-100">123 Business Park, Technology Lane, Mumbai, India</p>
              </motion.div>
              <motion.div variants={item} className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-300" />
                <a href="tel:+918888888888" className="text-blue-100 hover:text-white">
                  +91 8888888888
                </a>
              </motion.div>
              <motion.div variants={item} className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-300" />
                <a href="mailto:info@networkcatalyst.in" className="text-blue-100 hover:text-white">
                  info@networkcatalyst.in
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 variants={item} className="text-xl font-bold mb-4">
              Newsletter
            </motion.h3>
            <motion.p variants={item} className="text-blue-100 mb-4">
              Subscribe to our newsletter to receive updates on our latest services and offers.
            </motion.p>
            <motion.div variants={item} className="flex space-x-0">
              <Input 
                placeholder="Your email" 
                className="rounded-r-none bg-blue-900 border-blue-800 text-white placeholder:text-blue-400 focus-visible:ring-blue-400" 
              />
              <Button className="rounded-l-none bg-blue-600 hover:bg-blue-500">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-blue-900 mt-12 pt-6 text-center"
        >
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Network Catalyst Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
