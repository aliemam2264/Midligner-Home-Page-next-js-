import LandingNavbar from "@/components/includes/Landing-Nav";
import { ContactCard } from "@/components/ContactCard";
import Footer from "@/components/includes/Footer";

const ContactUs = () => {
  return (
    <>
      <LandingNavbar />
      <div className="bg-white min-h-screen">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
