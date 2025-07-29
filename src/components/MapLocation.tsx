import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const MapLocation = () => {
  const openInGoogleMaps = () => {
    const address = "460 Lwamando Street";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-ice-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our Location
          </h2>
          <p className="text-lg text-muted-foreground">
            Conveniently located with easy access to local attractions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <Card className="booking-card overflow-hidden">
              <div className="relative h-80 bg-gradient-to-br from-ice-blue to-sky-blue flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">460 Lwamando Street</p>
                  <Button onClick={openInGoogleMaps} className="bg-primary hover:bg-primary/90">
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            {/* Location Details */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Contact & Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-charcoal">Address</h4>
                      <p className="text-muted-foreground">460 Lwamando Street</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-charcoal">Phone</h4>
                      <p className="text-muted-foreground">076-110-7753</p>
                      <p className="text-sm text-sky-blue">WhatsApp Available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-charcoal">Check-in/Check-out</h4>
                      <p className="text-muted-foreground">Check-in: 14:00</p>
                      <p className="text-muted-foreground">Check-out: 11:00</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium text-charcoal mb-3">Getting Here</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Easy access from main roads</li>
                    <li>• Free parking available</li>
                    <li>• Public transport nearby</li>
                    <li>• Airport transfer available (on request)</li>
                  </ul>
                </div>

                <Button onClick={openInGoogleMaps} className="w-full bg-primary hover:bg-primary/90">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;