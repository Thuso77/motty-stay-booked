import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, Tv, Refrigerator, Bath, ChefHat, Armchair } from "lucide-react";

const RoomGallery = () => {
  const rooms = [
    {
      id: 1,
      name: "Comfortable Queen Room",
      image: "/lovable-uploads/89963180-be4a-4b04-8448-e6d74f5ea08d.png",
      price: "R300",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Mini Fridge", "En-suite Bathroom"],
      description: "Modern room with checkered headboard, mini fridge, and all essential amenities for a comfortable stay."
    },
    {
      id: 2,
      name: "Comfortable Queen Room", 
      image: "/lovable-uploads/508e866e-d76f-4140-b415-3a3760f85f39.png",
      price: "R300",
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Mini Fridge", "En-suite Bathroom"],
      description: "Spacious room with seating area, perfect for relaxation after a long day."
    },
    {
      id: 3,
      name: "Comfortable Queen Room",
      image: "/lovable-uploads/de5a7f0f-8b89-4e07-b578-50547985aac7.png",
      price: "R300", 
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Kitchenette", "En-suite Bathroom"],
      description: "Well-appointed room with kitchenette facilities and modern conveniences."
    },
    {
      id: 4,
      name: "Comfortable Queen Room",
      image: "/lovable-uploads/255e46ce-ad52-46b6-b2fe-e7e2496dcc65.png",
      price: "R300", 
      capacity: "2 Guests",
      amenities: ["Free WiFi", "TV", "Seating Area", "En-suite Bathroom"],
      description: "Cozy room with comfortable seating and all modern amenities."
    }
  ];

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
                
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = '/booking'}
                    >
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