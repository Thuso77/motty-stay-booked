import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from "lucide-react";
// Using room image as hero background

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Motion */}
      <div className="motion-background"></div>
      
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/lovable-uploads/255e46ce-ad52-46b6-b2fe-e7e2496dcc65.png')` }}
      >
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="ml-2 text-lg">Guest House</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to<br />
          <span className="text-primary">Motty Motel</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience comfort and luxury at our premium guest house. 
          Modern amenities, exceptional service, and unbeatable location.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-lg">
            <MapPin className="w-5 h-5 text-primary" />
            <span>460 Lwamando Street</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            R300 <span className="text-lg font-normal text-white">per night</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Stay
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg">
            View Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;