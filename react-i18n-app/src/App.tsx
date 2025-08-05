import React from 'react';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { store } from './store';
import { AppContainer, MainContent, Card, Title, Description } from './components/StyledComponents';
import AppHeader from './components/AppHeader';
import UserList from './components/UserList';
import './i18n';

const AppContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AppContainer>
      <AppHeader />
      <MainContent>
        <Card>
          <Title>{t('welcome')}</Title>
          <Description>{t('description')}</Description>
        </Card>
        <UserList />
      </MainContent>
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
