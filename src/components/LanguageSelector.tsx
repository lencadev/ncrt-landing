import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];

  useEffect(() => {
    // Función para cerrar el dropdown cuando se hace clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // Aquí agregaremos la lógica para cambiar el idioma cuando implementemos i18n
    const currentPath = window.location.pathname;
    const newPath = currentPath.startsWith('/es') || currentPath.startsWith('/en')
      ? `/${langCode}${currentPath.substring(3)}`
      : `/${langCode}${currentPath}`;
    
    window.location.href = newPath;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200 font-medium py-1 px-2"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        <span className="uppercase text-sm">{currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-1 min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 ${
                currentLang === lang.code ? 'text-accent' : 'text-primary'
              }`}
              aria-current={currentLang === lang.code ? 'true' : 'false'}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;