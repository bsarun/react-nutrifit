import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Card, 
  Title, 
  Button, 
  LoadingSpinner, 
  UserTable, 
  TableHeader, 
  TableCell, 
  TableRow, 
  ErrorMessage, 
  EmptyState 
} from './StyledComponents';
import { fetchUsersRequest, clearError } from '../store/slices/appSlice';
import type { RootState } from '../types';

const UserList: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    // Clear any previous errors when component mounts
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch, error]);

  const handleFetchUsers = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <Card>
      <Title>{t('users')}</Title>
      
      <Button onClick={handleFetchUsers} disabled={loading}>
        {loading && <LoadingSpinner />}
        {t('fetchUsers')}
      </Button>

      {error && (
        <ErrorMessage>
          {t('error')}: {error}
        </ErrorMessage>
      )}

      {users.length > 0 ? (
        <UserTable>
          <thead>
            <tr>
              <TableHeader>{t('name')}</TableHeader>
              <TableHeader>{t('email')}</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </UserTable>
      ) : !loading && (
        <EmptyState>
          {t('noUsers')}
        </EmptyState>
      )}
    </Card>
  );
};

export default UserList;