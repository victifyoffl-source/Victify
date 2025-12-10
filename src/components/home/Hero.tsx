import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/hero-training-classroom.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91]/95 via-[#0B3D91]/85 to-[#0B3D91]/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#00000000] mt-[0px] mr-[0px] mb-[0px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-[#FFFFFF]"
          >
            <div className="flex items-center space-x-3 bg-[#00000000] mt-[0px] mr-[0px] mb-[24px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-[#FFFFFF]">
              <img
                src="/victify-logo-full.png"
                alt="Victify"
                className="h-16 bg-[#00000000] rounded-[100px] mt-[0px] mb-[0px] mx-[0px] px-[0px] py-[0px] font-normal opacity-100 text-[#FFFFFF]"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Innovate. Build. <span className="text-[#7CB342]">Transform.</span>
            </h1>
            <p className="text-xl md:text-2xl bg-[#00000000] mt-[0px] mr-[0px] mb-[32px] ml-[0px] pt-[0px] pr-[0px] pb-[0px] pl-[0px] font-normal opacity-100 text-gray-200">
              Delivering powerful automation workflows, modern web development, SEO solutions, and industry-ready IT training.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              MSME Registered Startup | Software & Automation Experts | Tiruvannamalai
            </p>
            <p className="text-sm mb-8 text-gray-400">
              MSME No: UDYAM-TN-29-0091906
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#services')}
                className="bg-[#7CB342] hover:bg-[#7CB342]/90 text-white text-lg px-8"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D91] text-lg px-8"
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-[#7CB342] p-3 rounded-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">MSME Registered Startup</h3>
                  <p className="text-gray-200">UDYAM-TN-29-0091906</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-[#7CB342] p-3 rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Industry-Experienced</h3>
                  <p className="text-gray-200">Expert Team</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="bg-[#7CB342] p-3 rounded-lg">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Modern Solutions</h3>
                  <p className="text-gray-200">Scalable & Efficient</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




