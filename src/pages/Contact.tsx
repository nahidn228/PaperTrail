import ContactComponent from "@/components/contact/ContactComponent";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const Contact = () => {
  return (
    <div>
      <ContactComponent />
      <div className=" pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export default Contact;
