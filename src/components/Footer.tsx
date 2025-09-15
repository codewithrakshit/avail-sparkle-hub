import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="mt-auto py-8 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className={`text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300 cursor-default ${isVisible ? 'animate-footer-slide' : ''}`}>
            Designed by{' '}
            <span className="font-medium hover:text-primary transition-colors duration-300">
              Rakshit Kriplani
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
