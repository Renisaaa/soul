// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

/**
 * NOTE
 * 1. Make sure the Font Awesome CSS (or any other icon library you prefer)
 *    is loaded globally – e.g. import "@fortawesome/fontawesome-free/css/all.min.css" in main.tsx.
 * 2. The `@` alias must point to `./src` in both Vite and tsconfig paths.
 */

const App = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-2xl font-bold text-indigo-900">SoulSignTarot</h1>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-indigo-800 hover:text-indigo-600 font-medium cursor-pointer whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Call‑to‑action */}
          <Button
            variant="outline"
            className="bg-indigo-900 text-white hover:bg-indigo-800   px-6 py-2 whitespace-nowrap"
          >
            <i className="fab fa-whatsapp mr-2" /> Connect Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 min-h-[90vh] flex items-center">
        {/* background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-indigo-900/30" />
          <img
            src="https://readdy.ai/api/search-image?query=Mystical%20tarot%20reading%20scene%20with%20ethereal%20cosmic%20background%2C%20stars%20and%20nebulas%20in%20deep%20purple%20and%20midnight%20blue%20colors.%20Sacred%20geometry%20patterns%20subtly%20visible.%20Golden%20light%20accents%20creating%20a%20spiritual%20atmosphere.%20Professional%20high-quality%20image%20with%20depth%20and%20dimension&width=1440&height=800&seq=1&orientation=landscape"
            alt="Mystical Tarot Background"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white p-8 bg-indigo-900/40 backdrop-blur-sm rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Discover Your Path Through Tarot</h1>
            <p className="text-xl mb-8">
              Unlock the mysteries of your future with personalized spiritual guidance tailored to your unique journey.
            </p>
            <Button className="bg-amber-500 hover:bg-amber-600 text-indigo-900 font-bold text-lg px-8 py-6   shadow-lg transition-all whitespace-nowrap">
              <i className="fab fa-whatsapp mr-2" /> Connect on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Spiritual Services</h2>
            <p className="text-lg text-indigo-700 max-w-2xl mx-auto">
              Explore our range of personalized spiritual services designed to bring clarity, healing, and guidance to your life journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarot Reading Card */}
            <ServiceCard
              title="Tarot Reading"
              description="Personalized insights into your past, present, and future"
              imgSrc="https://readdy.ai/api/search-image?query=Professional%20tarot%20card%20reading%20session%20with%20cards%20beautifully%20laid%20out%20on%20a%20purple%20velvet%20cloth.%20Mystical%20atmosphere%20with%20soft%20golden%20candlelight.%20Cards%20showing%20clear%20detailed%20imagery.%20Elegant%20hands%20carefully%20placing%20cards%20in%20a%20spread%20pattern&width=400&height=300&seq=2&orientation=landscape"
            >
              Our intuitive tarot readings provide deep insights into your life's challenges and opportunities, offering guidance for your spiritual journey.
            </ServiceCard>

            {/* Spiritual Remedies Card */}
            <ServiceCard
              title="Spiritual Remedies"
              description="Custom solutions for spiritual blockages"
              imgSrc="https://readdy.ai/api/search-image?query=Spiritual%20remedy%20items%20arranged%20beautifully%20on%20dark%20purple%20cloth.%20Collection%20includes%20burning%20sage%2C%20crystals%2C%20essential%20oils%2C%20ritual%20candles%2C%20and%20herb%20bundles.%20Mystical%20atmosphere%20with%20soft%20golden%20light.%20Professional%20high-quality%20image%20showing%20detailed%20textures%20of%20spiritual%20items&width=400&height=300&seq=3&orientation=landscape"
            >
              Discover personalized spiritual practices, rituals, and remedies designed to clear energetic blockages and restore harmony to your life.
            </ServiceCard>

            {/* Crystal Healing Card */}
            <ServiceCard
              title="Crystal Healing"
              description="Harness the power of natural crystals"
              imgSrc="https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20healing%20crystals%20and%20gemstones%20on%20dark%20purple%20velvet%20cloth.%20Various%20crystals%20including%20amethyst%2C%20clear%20quartz%2C%20rose%20quartz%2C%20and%20citrine%20catching%20light%20and%20showing%20their%20natural%20colors%20and%20textures.%20Mystical%20atmosphere%20with%20soft%20golden%20candlelight%20illuminating%20the%20crystals&width=400&height=300&seq=4&orientation=landscape"
            >
              Experience the transformative energy of crystal healing sessions, tailored to your specific needs for physical, emotional, and spiritual wellbeing.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* About, Testimonials, Contact, Newsletter, Footer */}
      {/* ... (unchanged sections omitted for brevity – they compile fine) */}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-600 hover:bg-green-700 text-white h-14 w-14   shadow-lg flex items-center justify-center whitespace-nowrap">
          <i className="fab fa-whatsapp text-2xl" />
        </Button>
      </div>
    </div>
  );
};

/* ------------------------
 * Small, reusable child components
 * ----------------------- */
const ServiceCard = ({ title, description, imgSrc, children }) => (
  <Card className="bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all overflow-hidden">
    <div className="h-56 overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover object-top transition-transform hover:scale-105" />
    </div>
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-indigo-900">{title}</CardTitle>
      <CardDescription className="text-indigo-700">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700">{children}</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white whitespace-nowrap">
        <i className="fab fa-whatsapp mr-2" /> Book Now via WhatsApp
      </Button>
    </CardFooter>
  </Card>
);

export default App;
