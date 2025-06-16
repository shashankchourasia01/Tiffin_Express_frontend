import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaYoutube />, href: "#" }
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tiffin Express</h3>
            <p className="text-gray-300 mb-4">
              Delivering home-style meals to students and professionals since 2023.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-300 hover:text-orange-400 text-xl transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Food Street</p>
              <p className="mb-2">Cityville, ST 12345</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@tiffinexpress.com</p>
            </address>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new meals and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tiffin Express. All rights reserved. Shashank.dev Designed</p>
          <div className="mt-2 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-orange-400 transition-colors ml-2">Terms of Service</a> | 
            <a href="#" className="hover:text-orange-400 transition-colors ml-2">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;