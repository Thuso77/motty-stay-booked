import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, Car, Coffee, Tv } from "lucide-react";

const RoomGallery = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Queen Room",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      price: "R300",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Coffee", "Parking"],
      description: "Spacious room with modern furnishings and all essential amenities."
    },
    {
      id: 2,
      name: "Standard Twin Room", 
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      price: "R300",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Coffee", "Parking"],
      description: "Comfortable twin beds perfect for friends or colleagues traveling together."
    },
    {
      id: 3,
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      price: "R300", 
      capacity: "4 Guests",
      amenities: ["Free WiFi", "TV", "Coffee", "Parking"],
      description: "Luxurious suite with separate living area and enhanced amenities."
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Free WiFi": return <Wifi className="w-4 h-4" />;
      case "TV": return <Tv className="w-4 h-4" />;
      case "Coffee": return <Coffee className="w-4 h-4" />;
      case "Parking": return <Car className="w-4 h-4" />;
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
            Choose from our selection of comfortable and well-appointed rooms, 
            all featuring modern amenities and exceptional value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="booking-card overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {room.capacity}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-charcoal">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{room.price}</div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{room.description}</p>
                
                <div className="flex items-center mb-4 text-sm text-muted-foreground">
                  <Bed className="w-4 h-4 mr-1" />
                  <Users className="w-4 h-4 mr-2 ml-3" />
                  <span>{room.capacity}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;