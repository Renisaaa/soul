// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,  Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
const GlobalStyles = () => (
<style >{`
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes slideUp {
from { transform: translateY(20px); opacity: 0; }
to { transform: translateY(0); opacity: 1; }
}
@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}
@keyframes scaleIn {
from { transform: scale(0.95); opacity: 0; }
to { transform: scale(1); opacity: 1; }
}
@keyframes slideInRight {
from { transform: translateX(20px); opacity: 0; }
to { transform: translateX(0); opacity: 1; }
}
.animate-fadeIn {
animation: fadeIn 1s ease-out;
}
.animate-slideUp {
animation: slideUp 1s ease-out;
}
.animate-scaleIn {
animation: scaleIn 0.5s ease-out;
}
.animate-slideInRight {
animation: slideInRight 0.5s ease-out;
}

`}</style>
);
const App: React.FC = () => {
const [email, setEmail] = useState('');
const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

const toggleTheme = () => {
setIsLoading(true);
const newTheme = theme === 'dark' ? 'light' : 'dark';
setTheme(newTheme);
setTimeout(() => {
setIsLoading(false);
}, 300);
};
const handleSubscribe = (e: React.FormEvent) => {
e.preventDefault();
// Handle subscription logic here
setEmail('');
alert('Thank you for subscribing!');
};
if (!mounted) {
return null;
}
const scrollToSection = (id: string) => {
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
};
return (
<div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
<GlobalStyles />
{/* Header */}
<header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
<div className="container mx-auto flex justify-between items-center py-4">
<div className="flex items-center">
<h1 className="text-2xl font-bold text-amber-800 dark:text-amber-400 font-serif">SoulSignTarot</h1>
</div>
<div className="flex items-center gap-8">
<nav className="hidden md:flex space-x-8">
<button onClick={() => scrollToSection('home')} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-medium cursor-pointer whitespace-nowrap transition-colors">Home</button>
<button onClick={() => scrollToSection('services')} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-medium cursor-pointer whitespace-nowrap transition-colors">Services</button>
<button onClick={() => scrollToSection('about')} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-medium cursor-pointer whitespace-nowrap transition-colors">About</button>
<button onClick={() => scrollToSection('testimonials')} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-medium cursor-pointer whitespace-nowrap transition-colors">Testimonials</button>
<button onClick={() => scrollToSection('contact')} className="text-amber-800 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 font-medium cursor-pointer whitespace-nowrap transition-colors">Contact</button>
</nav>
<button
onClick={toggleTheme}
aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
className={`p-2   bg-amber-100 dark:bg-gray-800 hover:bg-amber-200 dark:hover:bg-gray-700 transition-all relative ${isLoading ? 'animate-pulse' : ''}`}
disabled={isLoading}
>
<div className="relative w-6 h-6">
<i className={`fas fa-sun text-amber-400 absolute inset-0 transition-transform duration-300 ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`}></i>
<i className={`fas fa-moon text-amber-800 absolute inset-0 transition-transform duration-300 ${theme === 'dark' ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`}></i>
</div>
{isLoading && (
<div className="absolute inset-0   border-2 border-amber-400 border-t-transparent animate-spin"></div>
)}
</button>
</div>
<Button variant="outline" className="bg-indigo-900 text-white hover:bg-indigo-800   px-6 py-2 rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp mr-2"></i> Connect Now
</Button>
</div>
</header>
{/* Hero Section */}
<section id="home" className="relative pt-24 pb-20 min-h-[90vh] flex items-center">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-indigo-900/30 z-10"></div>
<img
src="https://readdy.ai/api/search-image?query=Mystical%20tarot%20reading%20scene%20with%20ethereal%20cosmic%20background%2C%20stars%20and%20nebulas%20in%20deep%20purple%20and%20midnight%20blue%20colors.%20Sacred%20geometry%20patterns%20subtly%20visible.%20Golden%20light%20accents%20creating%20a%20spiritual%20atmosphere.%20Professional%20high-quality%20image%20with%20depth%20and%20dimension&width=1440&height=800&seq=1&orientation=landscape"
alt="Mystical Tarot Background"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="container mx-auto relative z-20 flex flex-col md:flex-row items-center">
<div className="md:w-1/2 text-white p-8 bg-indigo-900/40 backdrop-blur-sm rounded-xl">
<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Discover Your Path Through Tarot</h1>
<p className="text-xl mb-8">Unlock the mysteries of your future with personalized spiritual guidance tailored to your unique journey.</p>
<Button className="bg-amber-500 hover:bg-amber-600 text-indigo-900 font-bold text-lg px-8 py-6   shadow-lg hover:shadow-xl transition-all rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp mr-2"></i> Connect on WhatsApp
</Button>
</div>
</div>
</section>
{/* Services Section */}
<section id="services" className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Spiritual Services</h2>
<p className="text-lg text-indigo-700 max-w-2xl mx-auto">Explore our range of personalized spiritual services designed to bring clarity, healing, and guidance to your life journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Tarot Reading Card */}
<Card className="bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all overflow-hidden">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Professional%20tarot%20card%20reading%20session%20with%20cards%20beautifully%20laid%20out%20on%20a%20purple%20velvet%20cloth.%20Mystical%20atmosphere%20with%20soft%20golden%20candlelight.%20Cards%20showing%20clear%20detailed%20imagery.%20Elegant%20hands%20carefully%20placing%20cards%20in%20a%20spread%20pattern&width=400&height=300&seq=2&orientation=landscape"
alt="Tarot Reading"
className="w-full h-full object-cover object-top transition-transform hover:scale-105"
/>
</div>
<CardHeader>
<CardTitle className="text-2xl font-bold text-indigo-900">Tarot Reading</CardTitle>
<CardDescription className="text-indigo-700">Personalized insights into your past, present, and future</CardDescription>
</CardHeader>
<CardContent>
<p className="text-gray-700">Our intuitive tarot readings provide deep insights into your life's challenges and opportunities, offering guidance for your spiritual journey.</p>
</CardContent>
<CardFooter>
<Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp mr-2"></i> Book Now via WhatsApp
</Button>
</CardFooter>
</Card>
{/* Spiritual Remedies Card */}
<Card className="bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all overflow-hidden">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Spiritual%20remedy%20items%20arranged%20beautifully%20on%20dark%20purple%20cloth.%20Collection%20includes%20burning%20sage%2C%20crystals%2C%20essential%20oils%2C%20ritual%20candles%2C%20and%20herb%20bundles.%20Mystical%20atmosphere%20with%20soft%20golden%20light.%20Professional%20high-quality%20image%20showing%20detailed%20textures%20of%20spiritual%20items&width=400&height=300&seq=3&orientation=landscape"
alt="Spiritual Remedies"
className="w-full h-full object-cover object-top transition-transform hover:scale-105"
/>
</div>
<CardHeader>
<CardTitle className="text-2xl font-bold text-indigo-900">Spiritual Remedies</CardTitle>
<CardDescription className="text-indigo-700">Custom solutions for spiritual blockages</CardDescription>
</CardHeader>
<CardContent>
<p className="text-gray-700">Discover personalized spiritual practices, rituals, and remedies designed to clear energetic blockages and restore harmony to your life.</p>
</CardContent>
<CardFooter>
<Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp mr-2"></i> Book Now via WhatsApp
</Button>
</CardFooter>
</Card>
{/* Crystal Healing Card */}
<Card className="bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all overflow-hidden">
<div className="h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Beautiful%20arrangement%20of%20healing%20crystals%20and%20gemstones%20on%20dark%20purple%20velvet%20cloth.%20Various%20crystals%20including%20amethyst%2C%20clear%20quartz%2C%20rose%20quartz%2C%20and%20citrine%20catching%20light%20and%20showing%20their%20natural%20colors%20and%20textures.%20Mystical%20atmosphere%20with%20soft%20golden%20candlelight%20illuminating%20the%20crystals&width=400&height=300&seq=4&orientation=landscape"
alt="Crystal Healing"
className="w-full h-full object-cover object-top transition-transform hover:scale-105"
/>
</div>
<CardHeader>
<CardTitle className="text-2xl font-bold text-indigo-900">Crystal Healing</CardTitle>
<CardDescription className="text-indigo-700">Harness the power of natural crystals</CardDescription>
</CardHeader>
<CardContent>
<p className="text-gray-700">Experience the transformative energy of crystal healing sessions, tailored to your specific needs for physical, emotional, and spiritual wellbeing.</p>
</CardContent>
<CardFooter>
<Button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp mr-2"></i> Book Now via WhatsApp
</Button>
</CardFooter>
</Card>
</div>
</div>
</section>
{/* About Section */}
<section id="about" className="py-20 bg-indigo-50">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-2/5">
<div className="  overflow-hidden border-4 border-amber-400 shadow-xl max-w-md mx-auto">
<img
src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20female%20tarot%20reader%20with%20a%20warm%2C%20inviting%20expression.%20She%20has%20an%20elegant%2C%20mystical%20appearance%20with%20subtle%20jewelry.%20The%20background%20features%20soft%20purple%20and%20blue%20tones%20with%20subtle%20sacred%20geometry%20patterns.%20The%20lighting%20is%20warm%20and%20creates%20a%20spiritual%20atmosphere&width=500&height=500&seq=5&orientation=squarish"
alt="Tarot Reader"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
<div className="md:w-3/5">
<h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">About SoulSignTarot</h2>
<p className="text-lg text-gray-700 mb-4">With over 15 years of experience in spiritual practices, I have dedicated my life to helping others find clarity and purpose through the ancient wisdom of tarot.</p>
<p className="text-lg text-gray-700 mb-4">My journey began as a personal quest for understanding, which evolved into a profound connection with the mystical arts. Each reading I provide is infused with intuition, empathy, and authentic guidance.</p>
<p className="text-lg text-gray-700 mb-6">I believe that tarot is not about predicting a fixed future, but rather illuminating the paths available to you and empowering you to make conscious choices that align with your highest good.</p>
<div className="flex flex-wrap gap-4">
<div className="bg-white p-4 rounded-lg shadow-md flex items-center">
<i className="fas fa-certificate text-amber-500 text-2xl mr-3"></i>
<div>
<h3 className="font-bold text-indigo-900">Certified</h3>
<p className="text-sm text-gray-600">International Tarot Foundation</p>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-md flex items-center">
<i className="fas fa-users text-amber-500 text-2xl mr-3"></i>
<div>
<h3 className="font-bold text-indigo-900">5000+</h3>
<p className="text-sm text-gray-600">Satisfied Clients</p>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-md flex items-center">
<i className="fas fa-star text-amber-500 text-2xl mr-3"></i>
<div>
<h3 className="font-bold text-indigo-900">Experienced</h3>
<p className="text-sm text-gray-600">15+ Years Practice</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Testimonials Section */}
<section id="testimonials" className="py-20 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Client Testimonials</h2>
<p className="text-lg text-indigo-700 max-w-2xl mx-auto">Hear from those who have experienced the transformative power of our spiritual guidance.</p>
</div>
<Swiper
modules={[Pagination, Autoplay]}
spaceBetween={30}
slidesPerView={1}
breakpoints={{
640: {
slidesPerView: 2,
},
1024: {
slidesPerView: 3,
},
}}
pagination={{ clickable: true }}
autoplay={{ delay: 5000 }}
className="testimonial-swiper"
>
{[
{
name: "Sarah Johnson",
date: "June 15, 2025",
rating: 5,
text: "The tarot reading I received was incredibly accurate and insightful. It helped me navigate a difficult career decision with confidence. I'm so grateful for the guidance!",
image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20smiling%20woman%20with%20shoulder-length%20brown%20hair%20against%20a%20neutral%20background.%20Natural%20makeup%2C%20friendly%20expression%2C%20well-lit%20professional%20photo%20suitable%20for%20a%20testimonial&width=100&height=100&seq=6&orientation=squarish"
},
{
name: "Michael Chen",
date: "May 28, 2025",
rating: 5,
text: "The crystal healing session was transformative. I felt a shift in my energy immediately, and the personalized recommendations have helped me maintain that balance. Highly recommend!",
image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20an%20Asian%20man%20with%20short%20black%20hair%20and%20glasses%20against%20a%20neutral%20background.%20Friendly%20smile%2C%20business%20casual%20attire%2C%20well-lit%20professional%20photo%20suitable%20for%20a%20testimonial&width=100&height=100&seq=7&orientation=squarish"
},
{
name: "Emily Rodriguez",
date: "July 2, 2025",
rating: 5,
text: "I was skeptical at first, but the spiritual remedies suggested for me have made a noticeable difference in my life. The personalized approach and genuine care really set this service apart.",
image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Hispanic%20woman%20with%20long%20dark%20hair%20against%20a%20neutral%20background.%20Warm%20smile%2C%20professional%20appearance%2C%20well-lit%20photo%20suitable%20for%20a%20testimonial&width=100&height=100&seq=8&orientation=squarish"
},
{
name: "David Thompson",
date: "June 10, 2025",
rating: 5,
text: "The tarot reading provided clarity during a confusing time in my life. The insights were spot-on and delivered with such compassion. I've already booked my next session!",
image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20man%20with%20short%20brown%20hair%20and%20beard%20against%20a%20neutral%20background.%20Confident%20expression%2C%20business%20casual%20attire%2C%20well-lit%20professional%20photo%20suitable%20for%20a%20testimonial&width=100&height=100&seq=9&orientation=squarish"
},
{
name: "Aisha Patel",
date: "July 8, 2025",
rating: 5,
text: "I've had several readings over the past year, and each one has been incredibly helpful. The spiritual guidance I've received has helped me grow in ways I never expected.",
image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20an%20Indian%20woman%20with%20dark%20hair%20against%20a%20neutral%20background.%20Professional%20appearance%2C%20friendly%20smile%2C%20well-lit%20photo%20suitable%20for%20a%20testimonial&width=100&height=100&seq=10&orientation=squarish"
}
].map((testimonial, index) => (
<SwiperSlide key={index}>
<Card className="h-full bg-white border border-indigo-100 shadow-md">
<CardHeader className="pb-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<Avatar>
<AvatarImage src={testimonial.image} alt={testimonial.name} />
<AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
</Avatar>
<div>
<CardTitle className="text-lg font-bold text-indigo-900">{testimonial.name}</CardTitle>
<CardDescription className="text-indigo-600">{testimonial.date}</CardDescription>
</div>
</div>
<div className="flex text-amber-500">
{Array(testimonial.rating).fill(0).map((_, i) => (
<i key={i} className="fas fa-star"></i>
))}
</div>
</div>
</CardHeader>
<CardContent>
<p className="text-gray-700 italic">"{testimonial.text}"</p>
</CardContent>
</Card>
</SwiperSlide>
))}
</Swiper>
</div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 bg-indigo-900 text-white">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
<p className="text-xl mb-10">Ready to begin your spiritual journey? Reach out to us directly on WhatsApp for personalized service and guidance.</p>
<div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg mb-12">
<div className="flex flex-col md:flex-row items-center justify-center gap-8">
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold mb-2">WhatsApp Business</h3>
<p className="text-lg mb-4">Quick response within 2-4 hours</p>
<div className="flex items-center justify-center md:justify-start mb-2">
<i className="fas fa-clock mr-2"></i>
<p>Operating Hours: 9 AM - 7 PM (Mon-Sat)</p>
</div>
<div className="flex items-center justify-center md:justify-start">
<i className="fas fa-phone-alt mr-2"></i>
<p>+1 (555) 123-4567</p>
</div>
</div>
<Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-xl   shadow-lg hover:shadow-xl transition-all rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp text-2xl mr-3"></i> Connect on WhatsApp
</Button>
</div>
</div>
<div className="flex justify-center space-x-6">
<a href="#" className="bg-white/20 hover:bg-white/30 p-3   transition-colors cursor-pointer">
<i className="fab fa-instagram text-2xl"></i>
</a>
<a href="#" className="bg-white/20 hover:bg-white/30 p-3   transition-colors cursor-pointer">
<i className="fab fa-facebook-f text-2xl"></i>
</a>
<a href="#" className="bg-white/20 hover:bg-white/30 p-3   transition-colors cursor-pointer">
<i className="fab fa-twitter text-2xl"></i>
</a>
<a href="#" className="bg-white/20 hover:bg-white/30 p-3   transition-colors cursor-pointer">
<i className="fab fa-youtube text-2xl"></i>
</a>
</div>
</div>
</div>
</section>
{/* Newsletter Section */}
<section className="py-16 bg-indigo-100">
<div className="container mx-auto px-4">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">Stay Connected</h2>
<p className="text-lg text-indigo-700 mb-8">Subscribe to our newsletter for spiritual insights, special offers, and event announcements.</p>
<form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<Input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="flex-grow border-indigo-300 focus:border-indigo-500 text-sm"
required
/>
<Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-indigo-900 font-bold rounded-button cursor-pointer whitespace-nowrap">
Subscribe
</Button>
</form>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-indigo-950 text-white py-12">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h3 className="text-xl font-bold mb-4">SoulSignTarot</h3>
<p className="mb-4">Illuminating your path through spiritual guidance and ancient wisdom.</p>
<div className="flex space-x-4">
<a href="#" className="text-white hover:text-amber-400 transition-colors cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
<a href="#" className="text-white hover:text-amber-400 transition-colors cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-white hover:text-amber-400 transition-colors cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-white hover:text-amber-400 transition-colors cursor-pointer">
<i className="fab fa-youtube"></i>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-bold mb-4">Quick Links</h3>
<ul className="space-y-2">
<li><button onClick={() => scrollToSection('home')} className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Home</button></li>
<li><button onClick={() => scrollToSection('services')} className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Services</button></li>
<li><button onClick={() => scrollToSection('about')} className="text-indigo-300 hover:text-white transition-colors cursor-pointer">About</button></li>
<li><button onClick={() => scrollToSection('testimonials')} className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Testimonials</button></li>
<li><button onClick={() => scrollToSection('contact')} className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Contact</button></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4">Services</h3>
<ul className="space-y-2">
<li><a href="#" className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Tarot Reading</a></li>
<li><a href="#" className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Spiritual Remedies</a></li>
<li><a href="#" className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Crystal Healing</a></li>
<li><a href="#" className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Aura Cleansing</a></li>
<li><a href="#" className="text-indigo-300 hover:text-white transition-colors cursor-pointer">Chakra Balancing</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-4">Contact</h3>
<ul className="space-y-2">
<li className="flex items-center">
<i className="fas fa-phone-alt mr-2 text-amber-400"></i>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center">
<i className="fas fa-envelope mr-2 text-amber-400"></i>
<span>info@SoulSigntarot.com</span>
</li>
<li className="flex items-center">
<i className="fas fa-clock mr-2 text-amber-400"></i>
<span>9 AM - 7 PM (Mon-Sat)</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-indigo-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-indigo-400 mb-4 md:mb-0">© 2025 SoulSignTarot. All rights reserved.</p>
<div className="flex space-x-6">
<a href="#" className="text-sm text-indigo-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
<a href="#" className="text-sm text-indigo-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a>
<a href="#" className="text-sm text-indigo-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
</div>
</div>
</div>
</footer>
{/* Floating WhatsApp Button */}
<div className="fixed bottom-6 right-6 z-50">
<Button className="bg-green-600 hover:bg-green-700 text-white h-14 w-14   shadow-lg flex items-center justify-center rounded-button cursor-pointer whitespace-nowrap">
<i className="fab fa-whatsapp text-2xl"></i>
</Button>
</div>
</div>
);
};
export default App