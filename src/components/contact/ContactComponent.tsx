import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "../ui/moving-border";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  USER_ID: import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID || "",
};

const ContactComponent = ({
  title = "Get in Touch",
  description = "We’d love to hear from you! Fill out the form and we’ll respond as soon as possible.",
  phone = "+880 179832-4439",
  email = "nahidn228@gmail.com",
  web = { label: "Portfolio", url: "https://nahidhasan-portfolio.vercel.app/" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: email,
        },
        EMAILJS_CONFIG.USER_ID
      );

      toast.success("Message sent successfully 🎉", { id: toastId });

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Something went wrong. Try again later.", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col gap-12 lg:flex-row lg:gap-20 items-center justify-between">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-sm flex-col gap-6 text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold lg:text-5xl">{title}</h1>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div>
              <h3 className="mb-4 text-2xl font-semibold">Contact Details</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">
                    📞 Phone:{" "}
                  </span>
                  {phone}
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    ✉️ Email:{" "}
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="underline hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">🌐 Web: </span>
                  <a
                    href={web.url}
                    target="_blank"
                    className="underline hover:text-primary transition-colors"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-xl border p-8 shadow-sm hover:shadow-md transition-shadow bg-card"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="grid w-full gap-2">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="John"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Doe"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="grid w-full gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className="grid w-full gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Let’s collaborate"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className="grid w-full gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here..."
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isLoading}
                required
                rows={5}
              />
            </div>

            <Button
              borderRadius="1.75rem"
              type="submit"
              className="w-full rounded-lg bg-primary"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
