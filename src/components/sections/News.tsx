
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface NewsItem {
  title: string;
  date: string;
  summary: string;
  image: string;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      title: "Unlocking Business Potential: The Role of an IT System Integrator",
      date: "2024-03-15",
      summary: "Discover how IT system integrators can help businesses unlock their full potential by streamlining processes and enhancing technological capabilities.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Empowering Businesses through Expert IT Solutions",
      date: "2024-02-28",
      summary: "Learn how our expert IT solutions are empowering businesses to overcome challenges and achieve sustainable growth in a competitive market.",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Navigating Digital Transformation: Maximizing Business Potential",
      date: "2024-02-10",
      summary: "Explore strategies for successfully navigating digital transformation and maximizing your business potential in the rapidly evolving tech landscape.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="news">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="section-subtitle">Stay Updated</h3>
          <h2 className="section-title mb-6">Our Latest News</h2>
          <p className="text-gray-600">
            Stay informed with our latest news, insights, and updates about technology trends and solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="w-full group">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
