import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, Tv, Refrigerator, Bath, ChefHat, Armchair } from "lucide-react";

const RoomGallery = () => {
  const galleryImages = [
    "/lovable-uploads/d5769a38-0f96-43ef-9f44-94c9d6976f29.png",
    "/lovable-uploads/e987f4cf-a87c-4fbf-9246-825b3b6632d6.png",
    "/lovable-uploads/fc1517e0-92b8-49aa-81c0-34a01e35aa06.png",
    "/lovable-uploads/9952d410-20b6-4f77-9bc9-04c4a7b69b65.png",
    "/lovable-uploads/1f1baece-f48b-4177-b08d-0f2cc65b6f50.png",
    "/lovable-uploads/cf418061-8a07-4399-9950-03ec6be2a4cb.png",
    "/lovable-uploads/b7a0039d-8368-4a3b-9f10-9a669d93ae2c.png"
  ];

  const roomInfo = {
    name: "Comfortable Queen Room",
    nightlyPrice: "R250",
    hourlyPrices: {
      oneHour: "R100",
      twoHours: "R150"
    },
    capacity: "2 Guests",
    amenities: ["Free WiFi", "TV", "Mini Fridge", "En-suite Bathroom"],
    description: "Comfortable rooms with all essential amenities for your stay."
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Free WiFi": return <Wifi className="w-4 h-4" />;
      case "TV": return <Tv className="w-4 h-4" />;
      case "Mini Fridge": return <Refrigerator className="w-4 h-4" />;
      case "En-suite Bathroom": return <Bath className="w-4 h-4" />;
      case "Kitchenette": return <ChefHat className="w-4 h-4" />;
      case "Seating Area": return <Armchair className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-ice-blue to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Rooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of comfortable and well-appointed rooms.
          </p>
        </div>

        {/* Room Info Card */}
        <Card className="max-w-4xl mx-auto mb-16 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Room Details */}
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{roomInfo.name}</h3>
                <p className="text-muted-foreground mb-6">{roomInfo.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Bed className="w-4 h-4 mr-1" />
                    <Users className="w-4 h-4 mr-2 ml-3" />
                    <span>{roomInfo.capacity}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {roomInfo.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Per Night:</span>
                    <span className="text-xl font-bold text-primary">{roomInfo.nightlyPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">1 Hour:</span>
                    <span className="text-lg font-semibold text-primary">{roomInfo.hourlyPrices.oneHour}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">2 Hours:</span>
                    <span className="text-lg font-semibold text-primary">{roomInfo.hourlyPrices.twoHours}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book a Room
                </Button>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-2 gap-2">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image}
                      alt={`Room view ${index + 1}`}
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RoomGallery;