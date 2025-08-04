import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Users, MessageCircle, Clock } from "lucide-react";

const BookingCalendar = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("Standard Room");
  const [stayType, setStayType] = useState<"overnight" | "hourly">("overnight");
  const [duration, setDuration] = useState<1 | 2>(1);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotal = () => {
    if (stayType === "hourly") {
      return duration === 1 ? 100 : 150;
    }
    const nights = calculateNights();
    return nights * 250;
  };

  const handleBookingProceed = () => {
    let message = `🏨 *MOTTY MOTEL BOOKING REQUEST*\n\n`;
    message += `🏠 *Room:* ${roomType}\n`;
    message += `👥 *Guests:* ${guests}\n`;
    
    if (stayType === "hourly") {
      message += `⏰ *Stay Type:* ${duration} Hour${duration > 1 ? 's' : ''}\n`;
      message += `💰 *Total:* R${calculateTotal()}\n\n`;
    } else {
      if (checkIn && checkOut) {
        message += `📅 *Check-in:* ${checkIn.toLocaleDateString('en-GB')}\n`;
        message += `📅 *Check-out:* ${checkOut.toLocaleDateString('en-GB')}\n`;
        message += `🌙 *Number of nights:* ${calculateNights()}\n`;
        message += `💰 *Total:* R${calculateTotal()}\n\n`;
      }
    }
    
    message += `Please confirm availability and share payment details. Thank you! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27761107753?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking-section" className="min-h-screen relative overflow-hidden bg-moving-background">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Book Your Stay</h2>
            <p className="text-lg text-white/90">
              Choose your dates and we'll help you find the perfect room
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Stay Type & Date Selection */}
            <div className="space-y-6">
              {/* Stay Type Selection */}
              <Card className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Stay Type
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="overnight"
                      name="stayType"
                      value="overnight"
                      checked={stayType === "overnight"}
                      onChange={(e) => setStayType(e.target.value as "overnight" | "hourly")}
                      className="w-4 h-4 text-primary"
                    />
                    <label htmlFor="overnight" className="text-sm font-medium">
                      Overnight Stay (R250/night)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="hourly"
                      name="stayType"
                      value="hourly"
                      checked={stayType === "hourly"}
                      onChange={(e) => setStayType(e.target.value as "overnight" | "hourly")}
                      className="w-4 h-4 text-primary"
                    />
                    <label htmlFor="hourly" className="text-sm font-medium">
                      Hourly Stay
                    </label>
                  </div>
                </div>

                {stayType === "hourly" && (
                  <div className="mt-4 space-y-2">
                    <Label>Duration</Label>
                    <Select value={duration.toString()} onValueChange={(value) => setDuration(parseInt(value) as 1 | 2)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Hour - R100</SelectItem>
                        <SelectItem value="2">2 Hours - R150</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </Card>

              {stayType === "overnight" && (
                <>
                  {/* Check-in Date */}
                  <Card className="p-6 bg-white/95 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                      Check-in Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </Card>

                  {/* Check-out Date */}
                  <Card className="p-6 bg-white/95 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CalendarDays className="w-5 h-5 mr-2 text-primary" />
                      Check-out Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                      className="rounded-md border"
                    />
                  </Card>
                </>
              )}
            </div>

            {/* Right Column - Calculator & Summary */}
            <div className="space-y-6">
              {/* Booking Calculator */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Booking Calculator
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Stay Type:</span>
                    <span className="font-medium">
                      {stayType === "hourly" ? `${duration} Hour${duration > 1 ? 's' : ''}` : "Overnight"}
                    </span>
                  </div>
                  
                  {stayType === "overnight" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="font-medium">
                          {checkIn ? checkIn.toLocaleDateString() : "Select date"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="font-medium">
                          {checkOut ? checkOut.toLocaleDateString() : "Select date"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Number of nights:</span>
                        <span className="font-medium text-primary">
                          {calculateNights()} {calculateNights() === 1 ? 'night' : 'nights'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Rate per night:</span>
                        <span className="font-medium">R250</span>
                      </div>
                    </>
                  )}
                  
                  {stayType === "hourly" && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">R{duration === 1 ? '100' : '150'}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Guests:</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-primary">
                      R{(stayType === "hourly" || (checkIn && checkOut)) ? calculateTotal() : 0}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Proceed to Book Button */}
              {(stayType === "hourly" || (checkIn && checkOut)) && (
                <Button 
                  onClick={handleBookingProceed}
                  className="w-full py-6 text-lg font-semibold bg-charcoal hover:bg-charcoal/90 text-white"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Proceed to Book - R{calculateTotal()}
                </Button>
              )}

            {/* Booking Summary - Only show when ready to book */}
            {(stayType === "hourly" || (checkIn && checkOut)) && (
              <Card className="p-6 bg-white/95 backdrop-blur-sm border border-primary/20">
                <h3 className="text-xl font-semibold mb-4 text-primary">Booking Summary</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">Room Type</Label>
                      <Select value={roomType} onValueChange={setRoomType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Standard Room">Standard Room</SelectItem>
                          <SelectItem value="Deluxe Room">Deluxe Room</SelectItem>
                          <SelectItem value="Family Suite">Family Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">Number of Guests</Label>
                      <Select value={guests.toString()} onValueChange={(value) => setGuests(parseInt(value))}>
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

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Your Stay Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Stay Type:</span>
                        <span className="font-medium">
                          {stayType === "hourly" ? `${duration} Hour${duration > 1 ? 's' : ''}` : "Overnight"}
                        </span>
                      </div>
                      {stayType === "overnight" && (
                        <>
                          <div className="flex justify-between">
                            <span>Check-in:</span>
                            <span className="font-medium">{checkIn?.toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Check-out:</span>
                            <span className="font-medium">{checkOut?.toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span className="font-medium">{guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Room:</span>
                        <span className="font-medium">{roomType}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between text-lg font-bold text-primary">
                        <span>Total:</span>
                        <span>R{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Click "Proceed to Book" to continue with WhatsApp
                  </p>
                </div>
              </Card>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;