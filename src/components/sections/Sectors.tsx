
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, ShoppingBag, UtensilsCrossed } from 'lucide-react';

interface Sector {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

const Sectors = () => {
  const sectors: Sector[] = [
    {
      icon: <Building2 size={40} />,
      title: "MANUFACTURING-PLANT OFFICE",
      details: [
        "Passive and networking",
        "CCTV installation",
        "Servers and endpoints installation",
        "Project Business of 1 Crore rupees",
        "Location - PAN India"
      ],
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <Landmark size={40} />,
      title: "BANKING /BFSI",
      details: [
        "Electrical, networking, endpoint, servers",
        "Market Served – Banking",
        "Project Business of 1.5 Crore rupees",
        "20 + Branches covered across India"
      ],
      color: "bg-green-100 text-green-700"
    },
    {
      icon: <ShoppingBag size={40} />,
      title: "E-COMMERCE/IT-ITES",
      details: [
        "CCTV Surveillance installation, wi-fi solution in 80 thousand sq.ft",
        "Networking and endpoint setup in warehouse and office",
        "Market Served – Large E-Commerce Project Business of 25 lakhs for each warehouse",
        "5 Warehouse Covered"
      ],
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: "HOSPITALITY - HOTELS | RESTAURANTS",
      details: [
        "Server-client setup software licensing installation",
        "Market Served – Hotel Chain Business with 4500+ Hotels",
        "Project Business of INR 7 Crore rupees in one Financial year for 3 consecutive years",
        "Deployed WI-FI,CCTVEPBX in 1500+ Hotels across India"
      ],
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="sectors">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">Our Expertise</h3>
          <h2 className="section-title mb-6">Various Sectors Experience</h2>
          <p className="text-gray-600">
            We have extensive experience across various industry sectors, delivering tailored IT solutions that address specific challenges and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className={`${sector.color} p-6 flex items-center`}>
                <div className="mr-4">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-bold">{sector.title}</h3>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {sector.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
