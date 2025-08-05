import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header, Logo } from './StyledComponents';
import LanguageSelector from './LanguageSelector';

const AppHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Header>
      <Logo>React i18n App</Logo>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ color: 'white', fontSize: '0.9rem' }}>
          {t('language')}:
        </span>
        <LanguageSelector />
      </div>
    </Header>
  );
};

export default AppHeader;