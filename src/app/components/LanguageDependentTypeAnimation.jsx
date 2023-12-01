import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

export default function LanguageDependentTypeAnimation({ sequence, wrapper, speed, repeat }) {
  const { i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  return <TypeAnimation key={key} sequence={sequence} wrapper={wrapper} speed={speed} repeat={repeat} />;
}