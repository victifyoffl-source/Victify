import { Card } from '@/components/ui/card';
import { CheckCircle, Award, Target, Users, Eye, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'MSME Registered Startup (UDYAM-TN-29-0091906)',
      description: 'Officially recognized software and automation startup',
    },
    {
      icon: Target,
      title: 'Expertise in Automation & Custom Development',
      description: 'Specialized in automation systems and modern web solutions',
    },
    {
      icon: Users,
      title: 'Industry-Experienced Team',
      description: 'Professionals with extensive real-world project experience',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-4">
            About Victify
          </h2>
          <div className="w-24 h-1 bg-[#7CB342] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A technology-driven startup specializing in automation systems, custom web development, SEO, and professional IT training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#0B3D91] mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Victify is a technology-driven startup specializing in automation systems, custom web development, search engine optimization, and professional IT training programs.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Based in Tiruvannamalai, we help businesses streamline operations, enhance digital presence, and adopt modern technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#7CB342] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Modern & scalable solutions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#7CB342] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Real-world project training
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#7CB342] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Expertise in automation & custom development
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#7CB342] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Industry-experienced team
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0B3D91] p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0B3D91] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-[#0B3D91] to-[#1E3A5F] text-white p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#7CB342] p-4 rounded-lg">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-100 leading-relaxed">
                To become a leading technology startup that empowers businesses and individuals through innovative automation solutions, cutting-edge web development, and world-class IT training programs. We envision a future where technology is accessible, practical, and transformative for everyone in Tiruvannamalai and beyond.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-[#7CB342] to-[#689F38] text-white p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white p-4 rounded-lg">
                  <Rocket className="h-8 w-8 text-[#7CB342]" />
                </div>
                <h3 className="text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-50 leading-relaxed mb-4">
                Build high-quality software solutions and empower individuals with practical tech skills.
              </p>
              <ul className="space-y-3 text-gray-50">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Deliver innovative automation systems that streamline business operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Create modern, scalable web solutions tailored to client needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Provide industry-ready IT training with real-world project experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Foster a culture of continuous learning and innovation</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
