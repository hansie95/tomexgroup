import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Hotel, Sparkles, ChevronRight, Bed, Clock, Box, ShieldCheck, Truck, Brush, Users, Mail, Phone } from 'lucide-react';
import OfficeAddress from '../../components/OfficeAddress';

const stats = [
  {
    value: "5K+",
    label: "hotel.ourProducts.products.header",
    description: "hotel.ourProducts.products.description"
  },
  {
    value: "7+",
    label: "hotel.ourProducts.days.header",
    description: "hotel.ourProducts.days.description"
  },
  {
    value: "24h",
    label: "hotel.ourProducts.shipping.header",
    description: "hotel.ourProducts.shipping.description"
  }
];

const teamMembers = [
  {
    name: "Áron Konkoly",
    role: "hotel.role.hotelDivisionLead.name",
    image: "/team/konkoly_aron.jpg",
    description: "hotel.role.hotelDivisionLead.description",
    contact: {
      email: "aron.konkoly@szallodapro.hu",
      phone: "+36 20 393 8072"
    }
  },
  {
    name: "Dániel Horváth",
    role: "hotel.role.divisionSalesManager.name",
    image: "/team/horvath_daniel.jpg",
    description: "hotel.role.divisionSalesManager.description",
    contact: {
      email: "daniel.horvath@szallodapro.hu",
      phone: "+36 30 527 0059"
    }
  }
];

export default function HotelSector() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Hotel Supplies & Amenities | Szallodapro</title>
        <meta name="description" content="Premium hotel supplies and amenities with custom branding options. Fast delivery from our Budapest warehouse." />
      </Helmet>

      {/* Hero Section with Branded Header */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600"
            alt="Hotel supplies showcase"
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
              <Hotel className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5" />
                <h1 className="text-4xl md:text-6xl font-bold">Szallodapro</h1>
                <Sparkles className="w-5 h-5" />
              </div>
              <a 
                href="https://szallodapro.hu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                szallodapro.hu
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              {t('hotel.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brush className="w-5 h-5" />
                <span>{t("hotel.customBranding")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>{t("hotel.daysDelivery")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShieldCheck className="w-5 h-5" />
                <span>{t("hotel.europeanQuality")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("ourProducts")}</h2>
            <p className="text-lg text-gray-600 mb-12">{t('hotel.products')}</p>
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
                <div className="text-lg font-semibold mb-2">{t(stat.label)}</div>
                <p className="text-gray-600">{t(stat.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("hotel.productCategories.header")}</h2>
            <p className="text-lg text-gray-600">{t("hotel.productCategories.description")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bed,
                title: "hotel.productCategories.categories.roomAmenities.header",
                description: "hotel.productCategories.categories.roomAmenities.description"
              },
              {
                icon: Box,
                title: "hotel.productCategories.categories.textilesAndLinens.header",
                description: "hotel.productCategories.categories.textilesAndLinens.description"
              },
              {
                icon: ShieldCheck,
                title: "hotel.productCategories.categories.hygieneProducts.header",
                description: "hotel.productCategories.categories.hygieneProducts.description"
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
                <h3 className="text-xl font-semibold mb-3">{t(category.title)}</h3>
                <p className="text-gray-600">{t(category.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('hotel.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Brush className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('hotel.whyUs.tailored')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Truck className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('hotel.whyUs.delivery')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <ShieldCheck className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('hotel.whyUs.quality')}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("meetOurTeam")}</h2>
            <p className="text-lg text-gray-600">
              {t("hotel.meetOurTeam.description")}
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
                          <p className="text-tomex-light-teal font-medium mb-3">{t(member.role)}</p>
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

         <OfficeAddress />
        </div>
      </section>
    </>
  );
}