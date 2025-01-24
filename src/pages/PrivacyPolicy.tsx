import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tomex Group</title>
        <meta name="description" content="Privacy Policy for Tomex Group - Learn how we protect and handle your personal information." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-tomex-light-teal mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-tomex-dark-teal mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Tomex Group ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">2. Data We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Technical Data (IP address, browser type and version, time zone setting)</li>
                <li>Usage Data (information about how you use our website and services)</li>
                <li>Marketing and Communications Data (your preferences in receiving marketing from us)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">3. How We Use Your Data</h2>
              <p className="text-gray-700 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To provide our services to you</li>
                <li>To improve our website and services</li>
                <li>To communicate with you about our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">4. Data Security</h2>
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-6 h-6 text-tomex-light-teal flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@tomex.hu<br />
                  <strong>Phone:</strong> +36 30 665 4360<br />
                  <strong>Address:</strong> 1107 Budapest, Száva utca 4/b, Hungary
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
}