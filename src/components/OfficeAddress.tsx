import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OfficeAddress = () => {
    const { t } = useTranslation();
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="mt-12 text-center"
  >
    <div className="inline-flex items-center justify-center space-x-2 text-gray-600">
      <MapPin className="w-5 h-5 text-tomex-light-teal" />
      <span>{t("divisionOfficeAddress")}</span>
    </div>
  </motion.div>
  )
}

export default OfficeAddress