import { MapPin, Phone, Mail, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Motty Motel</h3>
            <div className="flex items-center mb-2">
              <div className="flex space-x-1 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Guest House</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience comfort and luxury at our premium guest house. 
              Modern amenities, exceptional service, and unbeatable location.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">460 Lwamando Street</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">076-110-7753</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@mottymotel.co.za</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#rooms" className="text-gray-300 hover:text-primary transition-colors">Our Rooms</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-primary transition-colors">Location</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold mb-3">We Accept</h4>
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/5302335e-4acd-4a04-9ae0-007df6dec808.png" 
                  alt="EFT Secure" 
                  className="h-8 object-contain bg-white rounded px-2 py-1"
                />
                <img 
                  src="/lovable-uploads/eb548498-bd37-4756-85b8-a2ef87263b6d.png" 
                  alt="Visa" 
                  className="h-8 object-contain bg-white rounded px-2 py-1"
                />
                <img 
                  src="/lovable-uploads/053843d4-2798-41da-ac6d-c034f3cf08de.png" 
                  alt="Mastercard" 
                  className="h-8 object-contain bg-white rounded px-2 py-1"
                />
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Motty Motel. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Secure payments • Best rates guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;