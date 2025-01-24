import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ScrollText, AlertCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Tomex Group</title>
        <meta name="description" content="Terms of Service for Tomex Group - Understanding our terms and conditions." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <ScrollText className="w-16 h-16 text-tomex-light-teal mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-tomex-dark-teal mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Tomex Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">3. Disclaimer</h2>
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-tomex-light-teal flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  The materials on Tomex Group's website are provided on an 'as is' basis. Tomex Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">4. Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall Tomex Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tomex Group's website, even if Tomex Group or a Tomex Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on Tomex Group's website could include technical, typographical, or photographic errors. Tomex Group does not warrant that any of the materials on its website are accurate, complete, or current. Tomex Group may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">6. Links</h2>
              <p className="text-gray-700 mb-4">
                Tomex Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tomex Group of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">7. Modifications</h2>
              <p className="text-gray-700 mb-4">
                Tomex Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of Hungary and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-tomex-dark-teal mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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