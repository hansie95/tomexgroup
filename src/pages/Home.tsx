import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Globe2, 
  Award, 
  ChevronRight,
  Gift,
  Stethoscope,
  Dumbbell,
  Monitor,
  Hotel,
  MapPin,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const subsidiaries = [
  {
    id: 'gift',
    name: 'Tomex Gift',
    description: 'home.subsidaires.gift',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-tomex-dark-teal/90 to-tomex-light-teal/80',
    icon: Gift,
    route: '/sectors/gift',
    logo: '/logos/tomex_gift_logo.png'
  },
  {
    id: 'med',
    name: 'Tomex Med',
    description: 'home.subsidaires.med',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-tomex-dark-teal to-tomex-light-teal',
    icon: Stethoscope,
    route: '/sectors/med',
    logo: '/logos/tomex_med_logo.png'
  },
  {
    id: 'sport',
    name: 'Tomex Sport',
    description: 'home.subsidaires.sport',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-tomex-dark-teal/85 via-tomex-light-teal/75 to-tomex-dark-teal/85',
    icon: Dumbbell,
    route: '/sectors/sport',
    logo: '/logos/tomex_med_logo.png'
  },
  {
    id: 'tech',
    name: 'Tomex Tech',
    description: 'home.subsidaires.tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-tomex-light-teal/90 via-tomex-dark-teal/80 to-tomex-light-teal/90',
    icon: Monitor,
    route: '/sectors/tech',
    logo: '/logos/tomextech_logo.png'
  },
  {
    id: 'hotel',
    name: 'Szallodapro',
    description: 'home.subsidaires.hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600',
    gradient: 'from-tomex-dark-teal/80 via-tomex-light-teal/70 to-tomex-dark-teal/80',
    icon: Hotel,
    route: '/sectors/hotel',
    logo: '/logos/szallodapro_logo.png'
  }
];

const stats = [
  { icon: Building2, value: '5', label: 'subsidiaries' },
  { icon: Users, value: '20+', label: 'employees' },
  { icon: Globe2, value: '5+', label: 'countries' },
  { icon: Award, value: '4+', label: 'years' }
];

const directors = [
  {
    name: "Tamás Farkas",
    role: "team.role.ceo.position",
    image: "/team/farkas_tamas.jpg",
    description: "team.role.ceo.description",
    contact: {
      email: "tamas.farkas@tomex.hu",
      phone: "+36 30 665 4360"
    }
  },
  {
    name: "Peter Podani",
    role: "team.role.operational_director.position",
    image: "/team/podani_peter.jpg",
    description: "team.role.operational_director.description",
    contact: {
      email: "peter.podani@tomex.hu",
      phone: "+36 70 197 9069"
    }
  },
  {
    name: "Gabor Andorka",
    role: "team.role.logistic_director.position",
    image: "/team/andorka_gabor.jpg",
    description: "team.role.logistic_director.description",
    contact: {
      email: "gabor.andorka@tomex.hu",
      phone: "+36 30 288 1763"
    }
  },
  {
    name: "Tamás Szabó",
    role: "team.role.gift_division_director.position",
    image: "/team/szabo_tamas.jpg",
    description: "team.role.gift_division_director.description",
    contact: {
      email: "tamas.szabo@tomex.hu",
      phone: "+36 30 141 2688"
    }
  },
  {
    name: "Judit Farkas",
    role: "team.role.finance_director.position",
    image: "/team/farkas_judit.jpg",
    description: "team.role.finance_director.description",
    contact: {
      email: "judit.farkas@tomex.hu",
      phone: "+36 30 855 1806"
    }
  },
];

export default function Home() {
  const { t } = useTranslation();
  const companiesRef = useRef<HTMLDivElement>(null);

  const scrollToCompanies = () => {
    companiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Tomex Group - {t('home.hero.subtitle')}</title>
        <meta name="description" content={t('home.hero.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tomex-dark-teal/90 to-tomex-light-teal/80" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            {t('home.hero.description')}
          </p>
          <button 
            onClick={scrollToCompanies}
            className="bg-white text-tomex-dark-teal px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-tomex-light-teal hover:text-white transition-colors"
          >
            {t('home.sections.companies')}
            <ChevronDown size={20} />
          </button>
        </motion.div>
      </section>

       <section ref={companiesRef} className="py-20 bg-white tx-">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-tomex-dark-teal">
            {t('home.sections.companies')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary) => (
              <Link
                to={subsidiary.route}
                key={subsidiary.id}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={subsidiary.image}
                    alt={subsidiary.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${subsidiary.gradient} opacity-75`} />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="flex items-start justify-between">
                      <subsidiary.icon className="w-12 h-12 text-white" />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    <div>
                    <div className="flex items-center justify-center">
                      <img
                        src={subsidiary.logo}
                        alt={subsidiary.name}
                        className="w-56 p-5 mb-12 bg-white/90 rounded-lg shadow-2xl shadow-white"
                      />
                    </div>

                      <p className="text-sm text-center text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t(subsidiary.description)}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {t('common.learnMore')}
                        </span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-tomex-dark-teal" />
                <div className="text-4xl font-bold text-tomex-dark-teal mb-2">{value}</div>
                <div className="text-gray-600 capitalize">{t(`home.stats.${label}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Users className="w-12 h-12 text-tomex-light-teal mx-auto" />
    </motion.div>
    <h2 className="text-2xl font-bold mb-4">{t('home.sections.leadership.title')}</h2>
    <p className="text-gray-600 mb-12">{t('home.sections.leadership.subtitle')}</p>

    <div className="flex flex-wrap justify-center gap-10">
      {directors.map((member, index) => (
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

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mt-10 text-gray-600 text-sm"
    >
      <MapPin className="w-4 h-4 inline-block text-tomex-light-teal mr-2" />
      {t('home.contact.headquarters')}: 1107 Budapest, Száva utca 4/b
    </motion.div>
  </div>
</section>     
    </>
  );
}