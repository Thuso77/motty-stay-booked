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
            {/* Interactive Google Map */}
            <Card className="booking-card overflow-hidden">
              <div className="relative h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d18.4!3d-33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s460%20Lwamando%20Street!5e0!3m2!1sen!2sza!4v1640000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Motty Motel Location"
                  className="rounded-lg"
                />
                <div className="absolute bottom-4 right-4">
                  <Button onClick={openInGoogleMaps} size="sm" className="bg-primary hover:bg-primary/90 shadow-lg">
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
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