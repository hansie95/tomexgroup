import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Tomex Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Tomex Group homepage." />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <Compass className="w-24 h-24 mx-auto text-tomex-light-teal" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-6xl font-bold text-tomex-dark-teal mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
              <p className="text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-6 py-3 bg-tomex-dark-teal text-white rounded-full hover:bg-tomex-light-teal transition-colors duration-300"
                >
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-tomex-dark-teal text-tomex-dark-teal rounded-full hover:bg-tomex-dark-teal hover:text-white transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-gray-500"
            >
              <p>Need help? Contact our support team at</p>
              <a
                href="mailto:support@tomexgroup.com"
                className="text-tomex-light-teal hover:text-tomex-dark-teal transition-colors duration-300"
              >
                support@tomexgroup.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}