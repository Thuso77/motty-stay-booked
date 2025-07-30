import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-arctic">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/27260a05-c18d-43b8-8a47-99a340530799.png" 
                alt="Motty Motel Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>460 Lwamando Street</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>076-110-7753</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#rooms" className="text-charcoal hover:text-primary transition-colors">Rooms</a>
            <a href="#location" className="text-charcoal hover:text-primary transition-colors">Location</a>
            <a href="#contact" className="text-charcoal hover:text-primary transition-colors">Contact</a>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;