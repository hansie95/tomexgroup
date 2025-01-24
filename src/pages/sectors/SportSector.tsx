import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Dumbbell, Trophy, Users, Sparkles, ChevronRight, ShoppingBag, Medal, Shirt, Mail, Phone } from 'lucide-react';
import OfficeAddress from '../../components/OfficeAddress';

const stats = [
  {
    value: "15K+",
    label: "sport.ourProducts.products.header",
    description: "sport.ourProducts.products.description"
  },
  {
    value: "100+",
    label: "sport.ourProducts.teams.header",
    description: "sport.ourProducts.teams.description"
  },
  {
    value: "24h",
    label: "sport.ourProducts.delivery.header",
    description: "sport.ourProducts.delivery.description"
  }
];

const teamMembers = [
  {
    name: "Máté Vízler",
    role: "sport.role.divisionSalesManager",
    image: "/team/vizler_mate.jpg",
    description: "Former professional athlete with 15+ years in sports equipment and team management.",
    contact: {
      email: "mate.vizler@tomex.hu",
      phone: "+36 70 605 3434"
    }
  }
];

export default function SportSector() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Sports Equipment & Team Apparel | Tomex Sport</title>
        <meta name="description" content="Professional sports equipment, team apparel, and fan merchandise. Official Puma reseller." />
      </Helmet>

      {/* Hero Section with Branded Header */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600"
            alt="Sports equipment showcase"
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
              <Dumbbell className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-5 h-5" />
                <h1 className="text-4xl md:text-6xl font-bold">Tomex Sport</h1>
                <Sparkles className="w-5 h-5" />
              </div>
              <a 
                href="https://tomexsport.hu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-white/90 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                tomexsport.hu
                <ChevronRight size={16} />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            >
              {t('sport.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5" />
                <span>{t("sport.officialPumaReseller")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <ShoppingBag className="w-5 h-5" />
                <span>{t("sport.fanShopSolutions")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shirt className="w-5 h-5" />
                <span>{t("sport.teamApparel")}</span>
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
            <p className="text-lg text-gray-600 mb-12">{t('sport.products')}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("sport.productCategories.header")}</h2>
            <p className="text-lg text-gray-600">{t("sport.productCategories.description")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shirt,
                title: "sport.productCategories.categories.teamApparel.header",
                description: "sport.productCategories.categories.teamApparel.description"
              },
              {
                icon: ShoppingBag,
                title: "sport.productCategories.categories.fanMerchandise.header",
                description: "sport.productCategories.categories.fanMerchandise.description"
              },
              {
                icon: Dumbbell,
                title: "sport.productCategories.categories.sportsEquipment.header",
                description: "sport.productCategories.categories.sportsEquipment.description"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('sport.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Medal className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('sport.whyUs.expertise')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Shirt className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('sport.whyUs.uniqueness')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center p-6"
            >
              <Trophy className="w-16 h-16 text-tomex-light-teal mb-4" />
              <p className="text-gray-600">{t('sport.whyUs.quality')}</p>
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
              {t("sport.meetOurTeam.description")}
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