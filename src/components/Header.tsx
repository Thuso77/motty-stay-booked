import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-arctic">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-charcoal">Motty Motel</h1>
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
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;