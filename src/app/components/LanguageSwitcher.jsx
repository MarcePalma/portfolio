import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <section className='flex px-4 py-4 gap-2 fixed right-10 border-slate-200'>
      <button onClick={() => changeLanguage('en')} className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white'>EN</button>
      <button onClick={() => changeLanguage('es')} className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-300'>ES</button>
    </section>
  );
};

export default LanguageSwitcher;
