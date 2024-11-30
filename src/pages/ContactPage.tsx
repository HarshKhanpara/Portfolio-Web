import { PageTransition } from "../components/PageTransition";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91", // Default country code (US)
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    // EmailJS Configuration
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
          )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            message: "",
          });
        },
        () => {
          setErrorMessage(
            "Oops! Something went wrong. Please try again later."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-8 text-center">
            Get in Touch
          </h2>

          {/* Display Success or Error Message */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-lg">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-500 text-white rounded-lg">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-white mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-1/4">
                <label
                  htmlFor="countryCode"
                  className="block text-white mb-2 font-medium"
                >
                  Country Code
                </label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (US, Canada, etc.)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+39">+39 (Italy)</option>
                  <option value="+34">+34 (Spain)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+55">+55 (Brazil)</option>
                  <option value="+7">+7 (Russia)</option>
                  <option value="+86">+86 (China)</option>
                  <option value="+971">+971 (UAE)</option>
                  <option value="+27">+27 (South Africa)</option>
                  <option value="+60">+60 (Malaysia)</option>
                  <option value="+52">+52 (Mexico)</option>
                  <option value="+63">+63 (Philippines)</option>
                  <option value="+44">+44 (United Kingdom)</option>
                  <option value="+64">+64 (New Zealand)</option>
                  <option value="+20">+20 (Egypt)</option>
                  <option value="+212">+212 (Morocco)</option>
                  <option value="+54">+54 (Argentina)</option>
                  <option value="+43">+43 (Austria)</option>
                  <option value="+46">+46 (Sweden)</option>
                  <option value="+48">+48 (Poland)</option>
                  <option value="+55">+55 (Brazil)</option>
                  <option value="+62">+62 (Indonesia)</option>
                  <option value="+66">+66 (Thailand)</option>
                  <option value="+977">+977 (Nepal)</option>
                  <option value="+52">+52 (Mexico)</option>
                  <option value="+60">+60 (Malaysia)</option>
                  <option value="+972">+972 (Israel)</option>
                  <option value="+34">+34 (Spain)</option>
                  <option value="+66">+66 (Thailand)</option>
                  <option value="+64">+64 (New Zealand)</option>
                  <option value="+63">+63 (Philippines)</option>
                  <option value="+32">+32 (Belgium)</option>
                  <option value="+31">+31 (Netherlands)</option>
                  <option value="+41">+41 (Switzerland)</option>
                  <option value="+420">+420 (Czech Republic)</option>
                  <option value="+48">+48 (Poland)</option>
                  <option value="+351">+351 (Portugal)</option>
                  <option value="+32">+32 (Belgium)</option>
                  <option value="+36">+36 (Hungary)</option>
                  <option value="+52">+52 (Mexico)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+46">+46 (Sweden)</option>
                  <option value="+55">+55 (Brazil)</option>
                  <option value="+31">+31 (Netherlands)</option>
                  {/* Add more options here as needed */}
                </select>
              </div>
              <div className="w-3/4">
                <label
                  htmlFor="phone"
                  className="block text-white mb-2 font-medium"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-white mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="Write your message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-transform transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
