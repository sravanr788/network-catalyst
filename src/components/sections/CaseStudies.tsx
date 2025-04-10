
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Wrench, 
  BarChart, 
  GraduationCap, 
  LineChart, 
  Move, 
  Users, 
  FileSpreadsheet 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudy {
  icon: React.ReactNode;
  title: string;
  color: string;
  delay: number;
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    { 
      icon: <Cloud size={40} />, 
      title: "CLOUD", 
      color: "from-blue-500 to-blue-700",
      delay: 0 
    },
    { 
      icon: <Wrench size={40} />, 
      title: "FIELD ENGINEERING", 
      color: "from-green-500 to-green-700",
      delay: 0.1 
    },
    { 
      icon: <BarChart size={40} />, 
      title: "PROJECT MANAGEMENT", 
      color: "from-purple-500 to-purple-700",
      delay: 0.2 
    },
    { 
      icon: <GraduationCap size={40} />, 
      title: "LEARNING & TRAINING", 
      color: "from-orange-500 to-orange-700",
      delay: 0.3 
    },
    { 
      icon: <LineChart size={40} />, 
      title: "BUSINESS PROCESS CONSULTING", 
      color: "from-red-500 to-red-700",
      delay: 0.4 
    },
    { 
      icon: <Move size={40} />, 
      title: "RELOCATION", 
      color: "from-teal-500 to-teal-700",
      delay: 0.5 
    },
    { 
      icon: <Users size={40} />, 
      title: "CHANNEL SETUP", 
      color: "from-indigo-500 to-indigo-700",
      delay: 0.6 
    },
    { 
      icon: <FileSpreadsheet size={40} />, 
      title: "AUDIT & ADVISORY", 
      color: "from-yellow-500 to-yellow-700",
      delay: 0.7 
    },
  ];

  return (
    <section className="section-padding bg-white" id="case-studies">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">Latest Case Studies</h3>
          <h2 className="section-title mb-6">CONSULTANCY & SOLUTIONS</h2>
          <p className="text-gray-600">
            Explore our comprehensive range of consultancy and solution services designed to help businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: study.delay }}
              viewport={{ once: true }}
            >
              <Card className="border-none overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0 h-full">
                  <div className={`bg-gradient-to-r ${study.color} h-32 flex items-center justify-center text-white group-hover:h-40 transition-all duration-300`}>
                    {study.icon}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                    <p className="text-gray-600 text-sm">
                      Click to explore our {study.title.toLowerCase()} solutions and case studies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
