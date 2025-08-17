// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import piyushImg from "../assets/piyush.jpeg";
import aura from "../assets/aura-cleansing.jpg";
import career from "../assets/career.jpg";
import crystal from "../assets/crystal-healing.jpg";
import homeBg from "../assets/home-bg.jpg";
import relationship from "../assets/relationship.jpg";
import spiritualBg from "../assets/spiritual-bg.jpg";
import tarot from "../assets/tarot-reading.jpg";
import spiritualRemedies from "../assets/spiritual-remedies.jpg"



// import "swiper/css";
// import "swiper/css/pagination";
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const testimonialChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (testimonialChartRef.current) {
      const chart = echarts.init(testimonialChartRef.current);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: "Accuracy", max: 100 },
            { name: "Clarity", max: 100 },
            { name: "Guidance", max: 100 },
            { name: "Empathy", max: 100 },
            { name: "Value", max: 100 },
          ],
          radius: 90,
          splitNumber: 4,
          axisName: {
            color: "#8e44ad",
            fontSize: 12,
          },
          splitArea: {
            areaStyle: {
              color: ["rgba(255, 255, 255, 0.8)", "rgba(250, 240, 255, 0.8)"],
            },
          },
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [95, 90, 98, 96, 92],
                name: "Client Satisfaction",
                symbol: "circle",
                symbolSize: 8,
                lineStyle: {
                  width: 2,
                  color: "#8e44ad",
                },
                areaStyle: {
                  color: "rgba(142, 68, 173, 0.3)",
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };
  const services = [
    {
      id: 1,
      title: "Tarot Card Reading",
      description:
        "Gain clarity and insights into your life's path with personalized tarot readings.",
      image: tarot
    },
    {
      id: 2,
      title: "Crystal Healing",
      description:
        "Harness the natural energy of crystals to restore balance and promote wellness.",
      image: crystal
    },
    {
      id: 3,
      title: "Spiritual Remedies",
      description:
        "Custom spiritual solutions to overcome obstacles and enhance positive energy.",
      image: spiritualRemedies
    },
    {
      id: 4,
      title: "Aura Cleansing",
      description:
        "Purify your energy field and remove negative influences affecting your wellbeing.",
      image: aura
    },
    {
      id: 5,
      title: "Relationship Guidance",
      description:
        "Navigate relationship challenges with spiritual insights and practical advice.",
      image: relationship
    },
    {
      id: 6,
      title: "Career Path Reading",
      description:
        "Discover your professional purpose and the steps to achieve your career goals.",
      image: career
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "The tarot reading I received was incredibly accurate and gave me the clarity I needed during a difficult time. The insights have proven true over the past months, and I'm grateful for the guidance.",
      date: "June 28, 2025",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "I was skeptical at first, but the crystal healing session completely changed my perspective. I felt a noticeable shift in my energy, and the personalized advice has helped me maintain balance in my daily life.",
      date: "June 15, 2025",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      rating: 5,
      text: "The spiritual remedies recommended for me worked wonders. I've experienced improved sleep, reduced anxiety, and a greater sense of purpose. The WhatsApp consultation was convenient and thorough.",
      date: "May 30, 2025",
    },
    {
      id: 4,
      name: "David Williams",
      rating: 4,
      text: "My relationship reading provided insights I hadn't considered before. The guidance was practical and compassionate, helping me navigate a challenging situation with my partner with greater understanding.",
      date: "June 22, 2025",
    },
  ];
  const processSteps = [
    {
      id: 1,
      title: "Reach Out",
      description:
        "Contact us via WhatsApp to discuss your needs and questions.",
      icon: "fa-brands fa-whatsapp",
    },
    {
      id: 2,
      title: "Consultation",
      description:
        "Receive a personalized consultation to determine the best service for you.",
      icon: "fa-solid fa-comments",
    },
    {
      id: 3,
      title: "Booking",
      description:
        "Schedule your session at a time that works for your convenience.",
      icon: "fa-solid fa-calendar-check",
    },
    {
      id: 4,
      title: "Payment",
      description: "Complete your secure payment directly through WhatsApp.",
      icon: "fa-solid fa-credit-card",
    },
    {
      id: 5,
      title: "Experience",
      description:
        "Enjoy your transformative spiritual session and begin your journey.",
      icon: "fa-solid fa-spa",
    },
  ];
  return (
    <div
      className={`font-['Cormorant_Garamond',_serif] ${
      "bg-white text-gray-800"
      } overflow-x-hidden transition-colors duration-300`}
    >
      {/* Header */}
      <header
        className={`fixed w-full ${
       "bg-white bg-opacity-95"
        } shadow-md z-50 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
          {/* <button
onClick={toggleTheme}
className={`absolute right-4 p-2   ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-purple-100 text-purple-800'} transition-all duration-300 hover:scale-110 rounded-button whitespace-nowrap cursor-pointer`}
aria-label="Toggle theme"
>
<i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
</button> */}
          <div className="flex items-center">
            <div className="text-3xl font-semibold text-purple-800 flex items-center">
              <i className="fa-solid fa-moon mr-2 text-amber-500"></i>
              <span className="bg-gradient-to-r from-purple-700 to-amber-500 bg-clip-text text-transparent">
                SoulSignTarot
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {[
                "home",
                "services",
                "about",
                "process",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-base font-medium capitalize transition-colors duration-300 rounded-button whitespace-nowrap cursor-pointer ${
                    activeSection === item
                      ? "text-purple-700 border-b-2 border-purple-700"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <a
              href="https://wa.me/919289122718"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2   flex items-center transition-transform duration-300 transform hover:scale-105 rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>
              Contact Now
            </a>
          </div>
          <button
            className="md:hidden text-purple-800 text-2xl focus:outline-none rounded-button whitespace-nowrap cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3">
              {[
                "home",
                "services",
                "about",
                "process",
                "testimonials",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-base font-medium capitalize py-2 transition-colors duration-300 rounded-button whitespace-nowrap cursor-pointer ${
                    activeSection === item
                      ? "text-purple-700 border-l-4 border-purple-700 pl-2"
                      : "text-gray-600 hover:text-purple-600 pl-3"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <a
              href="https://wa.me/919289122718"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2   flex items-center justify-center mt-4 transition-transform duration-300 transform hover:scale-105 rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>
              Contact Now
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-900 opacity-0 animate-[fadeIn_1s_forwards_0.3s]">
              Discover Your Path Through Spiritual Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 opacity-0 animate-[fadeIn_1s_forwards_0.6s]">
              Personalized tarot readings and spiritual healing to illuminate
              your journey and bring clarity to life's questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeIn_1s_forwards_0.9s]">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3   text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center rounded-button whitespace-nowrap cursor-pointer"
              >
                Explore Services
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <a
                href="https://wa.me/919289122718"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3   text-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                Book a Session
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("services")}
            className="text-purple-700 bg-white/80   w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
              Spiritual Services
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our range of personalized spiritual services designed to
              bring clarity, healing, and guidance to your life journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <a
                    href="https://wa.me/919289122718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors duration-300 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp mr-2"></i>
                    Book on WhatsApp
                    <i className="fa-solid fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${ "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-100   opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-100   opacity-50"></div>
                <img
                 src={piyushImg}
                  alt="Spiritual Advisor"
                  className="relative z-10 rounded-lg shadow-xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-900">
                About Piyush
              </h2>
              <div className="w-24 h-1 bg-amber-400 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                Hi, I’m Piyush Goel, the founder of Soul Sign Tarot — a space created to bring you clarity, comfort, and direction when life feels confusing. I started this journey not to predict the future, but to help people reconnect with themselves through the powerful tool of tarot.
              </p>
              <p className="text-lg text-gray-700 mb-6">
               My approach is simple yet deep — I don’t believe in fear-based readings or generic messages. Each session is a heart-to-heart conversation, where your energy guides the way and I help you make sense of it. Whether you’re struggling with love, career, emotions, or just feeling stuck, my goal is to offer honest, relatable, and empowering insights that help you move forward.
              </p>
              <p className="text-lg text-gray-700 mb-8">
               Tarot doesn’t tell you what to do — it helps you see what you already know, deep down. If you’re ready to stop overthinking and truly listen to what your soul is trying to say — you’re exactly where you need to be.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="text-amber-500 mr-4 mt-1">
                    <i className="fa-solid fa-certificate text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      Certified Tarot Master
                    </h3>
                    <p className="text-gray-700">
                      International Tarot Foundation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-500 mr-4 mt-1">
                    <i className="fa-solid fa-award text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      Crystal Healing Expert
                    </h3>
                    <p className="text-gray-700">Crystal Therapy Association</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-500 mr-4 mt-1">
                    <i className="fa-solid fa-star text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      10,000+ Readings
                    </h3>
                    <p className="text-gray-700">Satisfied clients worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-500 mr-4 mt-1">
                    <i className="fa-solid fa-heart text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">
                      Empathic Approach
                    </h3>
                    <p className="text-gray-700">Compassionate guidance</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919289122718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-6 py-3   text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>
                Connect With Me
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section
        id="process"
        className={`py-20 ${"bg-purple-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A simple and personalized process to connect you with the
              spiritual guidance you need.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-purple-200 transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-16 h-16  rounded-full bg-purple-700 text-white flex items-center justify-center text-2xl mb-4 shadow-lg">
                    <i className={step.icon}></i>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden w-1 h-8 bg-purple-200 my-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/919289122718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4   text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp mr-3 text-2xl"></i>
              Start Your Journey Now
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
              Client Experiences
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from those who have found clarity and guidance through our
              spiritual services.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={1}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div
                      className={`${
                        "bg-purple-50"
                      } rounded-xl p-8 shadow-md`}
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-solid fa-star ${
                              i < testimonial.rating
                                ? "text-amber-400"
                                : "text-gray-300"
                            } mr-1`}
                          ></i>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-purple-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.date}
                          </p>
                        </div>
                        <div className="text-purple-700">
                          <i className="fa-solid fa-quote-right text-2xl opacity-50"></i>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div>
              <div
                className={`${
                "bg-white"
                } rounded-xl p-6 shadow-md`}
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-800 text-center">
                  Client Satisfaction
                </h3>
                <div ref={testimonialChartRef} className="w-full h-80"></div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://wa.me/919289122718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-6 py-3   text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-button whitespace-nowrap cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp mr-2"></i>
              Share Your Experience
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-purple-900 text-white"
        style={{
          backgroundImage: `url(${spiritualBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Begin Your Spiritual Journey
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Reach out today to schedule your personalized spiritual
              consultation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto  bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <i className="fa-brands fa-whatsapp mr-3 text-green-400 text-3xl"></i>
                  WhatsApp Consultation
                </h3>
                <p className="mb-6 opacity-90">
                  For the most personalized experience, connect with me directly
                  on WhatsApp. I'm available to answer your questions and guide
                  you to the right service for your needs.
                </p>
                <a
                  href="https://wa.me/919289122718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3   text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-pulse rounded-button whitespace-nowrap cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                  Message Now
                </a>
                <div className="mt-8">
                  <h4 className="text-xl font-medium mb-4">Available Hours</h4>
                  <div className="space-y-2 opacity-90">
                    <p className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>10:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span>11:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-2xl font-semibold mb-6">
                  Follow on Social Media
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3  bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-20 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-instagram text-2xl mr-3"></i>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3  bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-20 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-facebook text-2xl mr-3"></i>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3  bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-20 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-youtube text-2xl mr-3"></i>
                    <span>YouTube</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3  bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-20 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-tiktok text-2xl mr-3"></i>
                    <span>TikTok</span>
                  </a>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-medium mb-4">Newsletter</h4>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-lg  bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-white placeholder-opacity-60 border-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center rounded-button whitespace-nowrap cursor-pointer"
                    >
                      <i className="fa-solid fa-envelope mr-2"></i>
                      Subscribe for Updates
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-moon mr-2 text-amber-500"></i>
                <span className="bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
                   SoulSignTarot
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Illuminating paths and providing clarity through spiritual
                guidance since 2010.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-youtube text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fa-brands fa-tiktok text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Tarot Card Reading
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Crystal Healing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Spiritual Remedies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Aura Cleansing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Relationship Guidance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("testimonials");
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa-brands fa-whatsapp text-green-500 mr-3 mt-1"></i>
                  <span className="text-gray-400">+91 92891 22718</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-envelope text-amber-500 mr-3 mt-1"></i>
                  <span className="text-gray-400">piyushgoel@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-location-dot text-purple-500 mr-3 mt-1"></i>
                  <span className="text-gray-400">
                    Virtual consultations worldwide
                  </span>
                </li>
                <li className="mt-4">
                  <a
                    href="https://wa.me/919289122718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 rounded-button whitespace-nowrap cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp mr-2"></i>
                    Message Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()}  SoulSignTarot. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300 cursor-pointer"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919289122718"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16   flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 rounded-button whitespace-nowrap cursor-pointer"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #8e44ad;
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #8e44ad;
        }
      `}</style>
    </div>
  );
};
export default App;
