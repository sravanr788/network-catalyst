
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Shield, 
  BarChart3, 
  MonitorSmartphone, 
  Camera, 
  GraduationCap 
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface Service {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <Workflow size={24} />,
      title: "ADVANCED SERVICES",
      items: [
        "Support / Transition",
        "Gap Analysis",
        "Remote Monitor",
        "Planning & Implementation",
        "Current State Assessment",
        "Solution Design",
        "Website Design",
        "Artificial Intelligence"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "ACCESS CONTROL",
      items: [
        "Authentication and authorization",
        "Vendor Management",
        "IT Planning",
        "Personal identification numbers",
        "Biometric scans",
        "Security tokens",
        "Security compliance programs",
        "Access control software"
      ]
    },
    {
      icon: <BarChart3 size={24} />,
      title: "APEX",
      items: [
        "Easy to use",
        "Easy to test",
        "Multitenant environment",
        "Strongly Typed",
        "Integrated",
        "Demand lighting platform",
        "Cost-effective"
      ]
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: "COMMERCIAL SCREEN",
      items: [
        "Complete Digital Display Solutions",
        "One Point Control Software",
        "Long & Quality Life Span",
        "Hi-tech small pixel",
        "Software's",
        "Equipment's On Rental",
        "High-definition full-color LED display"
      ]
    },
    {
      icon: <Camera size={24} />,
      title: "CCTV",
      items: [
        "Home security",
        "Office security",
        "Housing society security",
        "Industry smart security",
        "Remote Monitor",
        "Smart security solutions on IoT",
        "Current State Assessment",
        "Solution Design"
      ]
    },
    {
      icon: <GraduationCap size={24} />,
      title: "TRAINING & CONSULTANCY",
      items: [
        "Preventive Services",
        "Vendor Management",
        "IT Planning",
        "Proven training programs",
        "Experienced and knowledgeable instructors",
        "Career Counselor",
        "Escalation Management",
        "Coordinated Training Delivery"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">What We Provide</h3>
          <h2 className="section-title mb-6">Our Special SERVICES</h2>
          <p className="text-gray-600">
            Our comprehensive range of specialized services is designed to meet your unique business needs and drive your digital transformation journey.
          </p>
        </motion.div>

        <Tabs defaultValue={services[0].title} className="w-full">
          <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start md:justify-center p-1 bg-blue-50 rounded-lg mb-8">
            {services.map((service, index) => (
              <TabsTrigger 
                key={index} 
                value={service.title}
                className="flex items-center gap-2 whitespace-nowrap py-3 px-4 data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                {service.icon}
                <span className="hidden md:inline">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {services.map((service, index) => (
            <TabsContent key={index} value={service.title} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                      className="bg-service-gradient p-4 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
