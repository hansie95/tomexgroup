import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Gift, TrendingUp, Users, Star, CheckCircle2, Package, Sparkles, ChevronRight, Mail, Phone } from 'lucide-react';
import OfficeAddress from '../../components/OfficeAddress';

const stats = [
  {
    value: "10K+",
    label: "gift.ourProducts.products.header",
    description: "gift.ourProducts.products.description"
  },
  {
    value: "98%",
    label: "gift.ourProducts.satisfaction.header",
    description: "gift.ourProducts.products.description"
  },
  {
    value: "24h",
    label: "gift.ourProducts.response.header",
    description: "gift.ourProducts.products.description"
  }
];

const teamMembers = [
  {
    name: "Edit Remenyik",
    role: "gift.role.divisionSalesManager",
    image: "/team/remenyik_edit.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "edit.remenyik@tomex.hu",
      phone: "+36 30 868 2914"
    }
  },
  {
    name: "Éva Weidinger",
    role: "gift.role.divisionSalesManager",
    image: "/team/weidinger_eva.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "eva.weidinger@tomex.hu",
      phone: "+36 30 830 4678"
    }
  },
  {
    name: "Éva Szabó",
    role: "gift.role.operationManager",
    image: "/team/szabo_eva.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "eva.szabo@tomex.hu",
      phone: "+36 20 526 5042"
    }
  },
  {
    name: "Kirill Gulyka",
    role: "gift.role.divisionSalesManager",
    image: "/team/gulyka_kirill.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "kirill.gulyka@tomex.hu",
      phone: "+36 30 443 3076"
    }
  },
  {
    name: "Noémi Tóth",
    role: "gift.role.officeManager",
    image: "/team/toth_noemi.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "noemi.toth@tomex.hu",
      phone: "+36 30 880 5862"
    }
  },
  {
    name: "Richárd Szabó",
    role: "gift.role.logistic",
    image: "/team/szabo_richard.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "richard.szabo@tomex.hu",
      phone: "+36 20 432 5893"
    }
  },
  {
    name: "Márton Bodó Tóth",
    role: "gift.role.logistic",
    image: "/team/bodo_marton.jpg",
    description: "10+ years of experience in promotional products and corporate gifts.",
    contact: {
      email: "marton.bodo@tomex.hu",
      phone: "+36 30 089 9446"
    }
  }
];

export default function GiftSector() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Promotional Products & Corporate Gifts | Tomex Gift</title>
        <meta name="description" content="Discover our wide range of promotional products and corporate gifts. Custom solutions for your brand's marketing needs." />
      </Helmet>

      {/* Hero Section with Branded Header */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1600"
            alt="Promotional products showcase"
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
              <Gift className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5" />
                <h1 className="text-4xl md:text-6xl font-bold">Tomex Gift</h1>
                <Sparkles className="w-5 h-5" />
              </div>
              <a 
                href="https://tomexgift.hu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                tomexgift.hu
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              {t('gift.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Package className="w-5 h-5" />
                <span>{t("gift.hundredThousandProduct")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5" />
                <span>{t("gift.premiumQuality")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Gift className="w-5 h-5" />
                <span>{t("gift.customBranding")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ourProducts')}</h2>
            <p className="text-lg text-gray-600 mb-12">{t('gift.products')}</p>
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

      {/* YouTube Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("gift.ourBrandingTechnic.header")}</h2>
              <p className="text-lg text-gray-600">
                {t("gift.ourBrandingTechnic.description")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XdUyyV2SODs"
                title="Gift Branding Techniques"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branding Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("gift.brandingCapabilities.header")}</h2>
            <p className="text-lg text-gray-600">{t('gift.branding')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: "gift.brandingCapabilities.customCorporateGifts.header",
                description: "gift.brandingCapabilities.customCorporateGifts.description"
              },
              {
                icon: TrendingUp,
                title: "gift.brandingCapabilities.brandMerchandise.header",
                description: "gift.brandingCapabilities.brandMerchandise.description"
              },
              {
                icon: Users,
                title: "gift.brandingCapabilities.eventMerchandise.header",
                description: "gift.brandingCapabilities.eventMerchandise.description"
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
                <h3 className="text-xl font-semibold mb-3">{t(service.title)}</h3>
                <p className="text-gray-600">{t(service.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('gift.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <CheckCircle2 className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('gift.whyUs.speed')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Star className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('gift.whyUs.uniqueness')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Package className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('gift.whyUs.quality')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
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
            {t("gift.meetOurTeam.description")}
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