import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Stethoscope, ShieldCheck, Package, Sparkles, ChevronRight, HeartPulse, Microscope, Users, Mail, Phone, MapPin } from 'lucide-react';

const stats = [
  {
    value: "5K+",
    label: "Products",
    description: "Medical supplies and equipment"
  },
  {
    value: "99.9%",
    label: "Accuracy",
    description: "Order fulfillment rate"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Emergency delivery service"
  }
];

const teamMembers = [
  {
    name: "Dr. András Kovács",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    description: "20+ years of experience in medical supplies and healthcare solutions.",
    contact: {
      email: "andras.kovacs@tomexmed.hu",
      phone: "+36 30 111 2222"
    }
  },
  {
    name: "Katalin Szabó",
    role: "Quality Assurance Manager",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    description: "Expert in medical product certification and quality control.",
    contact: {
      email: "katalin.szabo@tomexmed.hu",
      phone: "+36 30 222 3333"
    }
  },
  {
    name: "Tamás Nagy",
    role: "Supply Chain Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    description: "Specialized in healthcare logistics and inventory management.",
    contact: {
      email: "tamas.nagy@tomexmed.hu",
      phone: "+36 30 333 4444"
    }
  }
];

export default function MedSector() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Medical Supplies & Equipment | Tomex Med</title>
        <meta name="description" content="Professional medical supplies and protective equipment for healthcare and industrial sectors." />
      </Helmet>

      {/* Hero Section with Branded Header */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1600"
            alt="Medical supplies showcase"
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
              <Stethoscope className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5" />
                <h1 className="text-4xl md:text-6xl font-bold">Tomex Med</h1>
                <Sparkles className="w-5 h-5" />
              </div>
              <a 
                href="https://tomexmed.hu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                tomexmed.hu
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              {t('med.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShieldCheck className="w-5 h-5" />
                <span>Certified Products</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <HeartPulse className="w-5 h-5" />
                <span>Healthcare Grade</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Package className="w-5 h-5" />
                <span>Industrial Safety</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Products</h2>
            <p className="text-lg text-gray-600 mb-12">{t('med.products')}</p>
          </div>
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

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Product Categories</h2>
            <p className="text-lg text-gray-600">Comprehensive range of medical and safety products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Protective Equipment",
                description: "High-quality protective gloves and clothing for medical and industrial use."
              },
              {
                icon: Microscope,
                title: "Hygiene Products",
                description: "Essential hygiene supplies for maintaining clean and safe environments."
              },
              {
                icon: Package,
                title: "Disposable Tools",
                description: "Reliable disposable equipment meeting industry standards."
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <category.icon className="w-12 h-12 text-tomex-light-teal mb-4" />
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('med.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Package className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('med.whyUs.reliability')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <ShieldCheck className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('med.whyUs.quality')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Microscope className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('med.whyUs.expertise')}</p>
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
              Our experienced professionals ensure the highest quality medical supplies and safety equipment
            </p>
          </div>
          
           <div className="flex flex-wrap justify-center gap-10">
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