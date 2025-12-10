import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/victify-logo-icon.png"
                alt="Victify Logo"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">VICTIFY</span>
                <span className="text-xs text-[#7CB342]">
                  Innovate. Build. Transform.
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              A technology-driven company specializing in automation systems, web development, SEO, and IT training.
            </p>
            <p className="text-xs text-gray-400">
              MSME Registered: {COMPANY_INFO.msmeNumber}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-[#7CB342] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-300 hover:text-[#7CB342] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#courses" className="text-sm text-gray-300 hover:text-[#7CB342] transition-colors">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-gray-300 hover:text-[#7CB342] transition-colors">
                  Current Projects
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm text-gray-300 hover:text-[#7CB342] transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Automation Workflows</li>
              <li className="text-sm text-gray-300">Web Development</li>
              <li className="text-sm text-gray-300">SEO Solutions</li>
              <li className="text-sm text-gray-300">IT Training Programs</li>
              <li className="text-sm text-gray-300">Custom Software Development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <MapPin className="h-5 w-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <Phone className="h-5 w-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <Mail className="h-5 w-5 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#7CB342] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#7CB342] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#7CB342] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#7CB342] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Victify. All rights reserved. | MSME Registered Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;