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

        <div className="max-w-4xl mx-auto">
          <Card className="booking-card">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-charcoal">Select Dates</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-charcoal">Check-in Date</label>
                      <div className="bg-white rounded-lg border-2 border-ice-blue/30">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border-0 pointer-events-auto p-3"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-charcoal">Check-out Date</label>
                      <div className="bg-white rounded-lg border-2 border-ice-blue/30">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          disabled={(date) => date < (checkIn || new Date())}
                          className="rounded-md border-0 pointer-events-auto p-3"
                        />
                      </div>
                    </div>
                  </div>

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
                </div>

                {/* Booking Calculator & Summary */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-charcoal">Booking Calculator</h3>
                  </div>

                  {/* Room Details */}
                  <div className="p-4 bg-ice-blue/20 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-charcoal">Comfortable Queen Room</span>
                      <Badge className="bg-primary text-white">Available</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Modern room with all essential amenities • Check-in 24/7
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Rate per night</span>
                      <span className="text-xl font-bold text-primary">R300</span>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  {checkIn && checkOut && (
                    <div className="bg-gradient-to-br from-ice-blue to-white p-6 rounded-lg border-2 border-primary/20">
                      <h4 className="font-bold text-charcoal mb-4 text-lg">📋 Booking Summary</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Check-in Date:</span>
                          <span className="font-medium text-charcoal">{checkIn.toLocaleDateString('en-GB')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Check-out Date:</span>
                          <span className="font-medium text-charcoal">{checkOut.toLocaleDateString('en-GB')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Number of Nights:</span>
                          <span className="font-medium text-charcoal">{calculateNights()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Number of Guests:</span>
                          <span className="font-medium text-charcoal">{guests}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Room Type:</span>
                          <span className="font-medium text-charcoal">Comfortable Queen Room</span>
                        </div>
                        
                        {/* Calculation Breakdown */}
                        <div className="border-t border-primary/20 pt-3 mt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Room Rate:</span>
                            <span className="font-medium text-charcoal">R300 × {calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex justify-between text-xl font-bold">
                            <span className="text-charcoal">Total Amount:</span>
                            <span className="text-primary">R{calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={handleBookingProceed}
                        className="w-full mt-6 text-lg py-6 font-semibold"
                        style={{ backgroundColor: 'hsl(142, 70%, 49%)', color: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(142, 70%, 45%)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'hsl(142, 70%, 49%)'}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Proceed to Book - R{calculateTotal()}
                      </Button>
                    </div>
                  )}

                  {(!checkIn || !checkOut) && (
                    <div className="p-6 text-center border-2 border-dashed border-primary/30 rounded-lg">
                      <CalendarDays className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                      <p className="text-muted-foreground">
                        Please select check-in and check-out dates to see your booking summary
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;