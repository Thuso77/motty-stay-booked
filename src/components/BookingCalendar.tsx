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
    
    const checkInDate = checkIn.toLocaleDateString('en-GB');
    const checkOutDate = checkOut.toLocaleDateString('en-GB');
    const nights = calculateNights();
    const total = calculateTotal();
    
    const message = encodeURIComponent(
      `🏨 *MOTTY MOTEL BOOKING REQUEST*\n\n` +
      `📅 *Check-in:* ${checkInDate}\n` +
      `📅 *Check-out:* ${checkOutDate}\n` +
      `🌙 *Number of nights:* ${nights}\n` +
      `👥 *Number of guests:* ${guests}\n` +
      `🏠 *Room type:* Comfortable Queen Room\n\n` +
      `💰 *BOOKING SUMMARY:*\n` +
      `• Room rate: R300 per night\n` +
      `• Total nights: ${nights}\n` +
      `• *Total amount: R${total}*\n\n` +
      `Please confirm availability and share payment details. Thank you! 🙏`
    );
    
    window.open(`https://wa.me/27761107753?text=${message}`, '_blank');
  };

  return (
    <section id="booking-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Book Your Stay
          </h2>
          <p className="text-lg text-muted-foreground">
            Select your dates and calculate your booking
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Check-in Calendar */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Check-in Date</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border-0 pointer-events-auto w-full"
                />
              </CardContent>
            </Card>

            {/* Check-out Calendar */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <span>Check-out Date</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  disabled={(date) => date < (checkIn || new Date())}
                  className="rounded-md border-0 pointer-events-auto w-full"
                />
              </CardContent>
            </Card>

            {/* Booking Calculator */}
            <Card className="booking-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Booking Calculator</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Room Details */}
                <div className="p-4 bg-ice-blue/20 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-charcoal">Comfortable Queen Room</span>
                    <Badge className="bg-primary text-white">Available</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Modern room • Check-in 24/7
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rate per night</span>
                    <span className="text-xl font-bold text-primary">R300</span>
                  </div>
                </div>

                {/* Guest Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-charcoal">Number of Guests</label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="w-full">
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

                {/* Instant Calculation */}
                <div className="bg-gradient-to-br from-ice-blue to-white p-4 rounded-lg border-2 border-primary/20">
                  <h4 className="font-bold text-charcoal mb-3">💰 Calculation</h4>
                  
                  {checkIn && checkOut ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="font-medium text-charcoal">{checkIn.toLocaleDateString('en-GB')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="font-medium text-charcoal">{checkOut.toLocaleDateString('en-GB')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Number of Nights:</span>
                        <span className="font-medium text-charcoal">{calculateNights()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Guests:</span>
                        <span className="font-medium text-charcoal">{guests}</span>
                      </div>
                      
                      <div className="border-t border-primary/20 pt-2 mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Calculation:</span>
                          <span className="font-medium text-charcoal">R300 × {calculateNights()}</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold">
                          <span className="text-charcoal">Total Amount:</span>
                          <span className="text-primary">R{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <CalendarDays className="w-8 h-8 text-primary/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Select dates to calculate total
                      </p>
                    </div>
                  )}
                </div>

                {/* Booking Button */}
                {checkIn && checkOut && (
                  <Button 
                    onClick={handleBookingProceed}
                    className="w-full bg-charcoal hover:bg-charcoal/90 text-white text-lg py-6 font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Proceed to Book - R{calculateTotal()}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary Section */}
          {checkIn && checkOut && (
            <div className="mt-8">
              <Card className="booking-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-4 text-center">📋 Complete Booking Summary</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-charcoal mb-2">Stay Details</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-in Date:</span>
                          <span className="font-medium">{checkIn.toLocaleDateString('en-GB')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-out Date:</span>
                          <span className="font-medium">{checkOut.toLocaleDateString('en-GB')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">{calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Guests:</span>
                          <span className="font-medium">{guests} guest{guests !== '1' ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-charcoal mb-2">Room & Pricing</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Room Type:</span>
                          <span className="font-medium">Comfortable Queen Room</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rate per night:</span>
                          <span className="font-medium">R300</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Check-in Policy:</span>
                          <span className="font-medium">24/7</span>
                        </div>
                        <div className="flex justify-between border-t pt-2 mt-2">
                          <span className="font-bold text-charcoal">Total Amount:</span>
                          <span className="font-bold text-primary text-lg">R{calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;