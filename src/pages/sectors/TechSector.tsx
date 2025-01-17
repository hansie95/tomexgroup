import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Monitor, Sparkles, ChevronRight, Code, Brain, Cpu, Wrench, Globe, Laptop, Users, Mail, Phone, MapPin } from 'lucide-react';

const stats = [
  {
    value: "200+",
    label: "Projects",
    description: "Successful IT implementations"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Service availability"
  },
  {
    value: "15min",
    label: "Response",
    description: "Average support response time"
  }
];

const teamMembers = [
  {
    name: "Hans Johann Shcmidt",
    role: "IT Lead",
    image: "/team/hans_schmidt.jpg",
    description: "7+ years of experience in IT solutions and digital transformation.",
    contact: {
      email: "hans.schmidt@tomextech.hu",
      phone: "+36 20 331 4299"
    }
  },
  {
    name: "Csaba György",
    role: "UI Designer",
    image: "/team/gyorgy_csaba.jpg",
    description: "Expert in AI implementation and machine learning solutions.",
    contact: {
      email: "anna.kovacs@tomextech.hu",
      phone: "+36 30 234 5678"
    }
  }
];

export default function TechSector() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>IT Solutions & Services | Tomex Tech</title>
        <meta name="description" content="Enterprise IT solutions and services. Cloud computing, infrastructure, and digital transformation expertise." />
      </Helmet>

      {/* Hero Section with Branded Header */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600"
            alt="IT solutions showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tomex-dark-teal/90 to-tomex-light-teal/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <Monitor className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5" />
                <h1 className="text-4xl md:text-6xl font-bold">Tomex Tech</h1>
                <Sparkles className="w-5 h-5" />
              </div>
              <a 
                href="https://tomextech.hu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                tomextech.hu
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              {t('tech.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Code className="w-5 h-5" />
                <span>Custom Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-5 h-5" />
                <span>AI Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Cpu className="w-5 h-5" />
                <span>IT Infrastructure</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl font-bold text-tomex-dark-teal mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services</h2>
            <p className="text-lg text-gray-600">{t('tech.services')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Custom Development",
                description: "Tailored web and application development solutions."
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "Implementation of AI and machine learning solutions."
              },
              {
                icon: Laptop,
                title: "IT Consulting",
                description: "Expert guidance for digital transformation."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 text-tomex-light-teal mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('tech.whyUs.title')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Globe className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('tech.whyUs.presence')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Code className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('tech.whyUs.solutions')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Brain className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('tech.whyUs.ai')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Wrench className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('tech.whyUs.maintenance')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Users className="w-16 h-16 text-tomex-light-teal mx-auto" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced professionals are here to help you with your digital transformation journey
            </p>
          </div>
          
          <div className="flex justify-center gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-80"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-tomex-light-teal font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="flex items-center text-gray-600 hover:text-tomex-dark-teal transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {member.contact.email}
                    </a>
                    <a
                      href={`tel:${member.contact.phone}`}
                      className="flex items-center text-gray-600 hover:text-tomex-dark-teal transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {member.contact.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5 text-tomex-light-teal" />
              <span>Budapest Office: 1107 Budapest, Száva utca 4/b</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}