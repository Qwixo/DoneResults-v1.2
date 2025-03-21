import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const HeroSection: React.FC = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Faster animations
    const titleTimer = setTimeout(() => setShowTitle(true), 300);
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1200);
    const buttonTimer = setTimeout(() => setShowButton(true), 2000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section className="pt-20 pb-32 md:pt-24 md:pb-40 relative section-transition" id="hero">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Removed overflow-hidden from h1 to prevent animation cutoff */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            {showTitle ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-visible" // Ensure animation overflow is visible
              >
                Want More Clients?<br />
                <span className="text-dark-aqua">Guaranteed</span>—Or You Don't Pay.
              </motion.div>
            ) : (
              <span className="opacity-0">
                Want More Clients?<br />
                <span className="text-dark-aqua">Guaranteed</span>—Or You Don't Pay.
              </span>
            )}
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-dark-gray mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSubtitle ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            We leverage AI-powered cold email to deliver warm, high-intent leads. 
            If we fail, you don't pay.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a 
              href="#cta" 
              className="primary-button text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
            >
              Book a Free Strategy Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
