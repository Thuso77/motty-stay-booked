import Header from "@/components/Header";
import BookingCalendar from "@/components/BookingCalendar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BookingCalendar />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;