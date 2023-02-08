import { api } from '../helpers/mockendApi';
import { User } from '../interfaces/user';

export const getUserService = async (): Promise<User[]> => {
  const { data } = await api.get('/users');

  return data;
};
