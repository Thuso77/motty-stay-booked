import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, MessageCircle } from "lucide-react";

const BookingCalendar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    return nights * 300;
  };

  const handleBookingProceed = () => {
    if (!checkIn || !checkOut) return;
    
    const checkInDate = checkIn.toLocaleDateString();
    const checkOutDate = checkOut.toLocaleDateString();
    const nights = calculateNights();
    const total = calculateTotal();
    
    const message = encodeURIComponent(
      `Hi! I'd like to book a room at Motty Motel:\n\n` +
      `Check-in: ${checkInDate}\n` +
      `Check-out: ${checkOutDate}\n` +
      `Nights: ${nights}\n` +
      `Guests: ${guests}\n` +
      `Total: R${total}\n\n` +
      `Please confirm availability and payment details.`
    );
    
    window.open(`https://wa.me/27761107753?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Book Your Stay
          </h2>
          <p className="text-lg text-muted-foreground">
            Select your dates and room preferences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Select Dates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-charcoal block">Check-in Date</label>
                    <div className="bg-white rounded-lg border-2 border-ice-blue/30 p-2">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        className="rounded-md border-0 pointer-events-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-charcoal block">Check-out Date</label>
                    <div className="bg-white rounded-lg border-2 border-ice-blue/30 p-2">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < (checkIn || new Date())}
                        className="rounded-md border-0 pointer-events-auto"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Details */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Booking Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-charcoal mb-2 block">Room Type</label>
                    <div className="p-3 bg-ice-blue/20 rounded-lg border">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-charcoal">Comfortable Queen Room</span>
                        <span className="text-primary font-bold">R300/night</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Modern room with all essential amenities
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-charcoal mb-2 block">Number of Guests</label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Booking Summary */}
                {checkIn && checkOut && (
                  <div className="border-t pt-6">
                    <h3 className="font-semibold text-charcoal mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Check-in:</span>
                        <span className="font-medium">{checkIn.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-out:</span>
                        <span className="font-medium">{checkOut.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nights:</span>
                        <span className="font-medium">{calculateNights()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span className="font-medium">{guests}</span>
                      </div>
                      <div className="border-t pt-2 mt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-primary">R{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleBookingProceed}
                      className="w-full mt-6 bg-primary hover:bg-primary/90 text-lg py-6"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Proceed with Booking
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;