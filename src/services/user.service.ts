import { api } from '../helpers/mockendApi';
import { User } from '../interfaces/user';

export const getUserService = async (): Promise<User[] | undefined> => {
  try {
    const { data } = await api.get('/users');

    return data;
  } catch (error) {
    throw new Error('Something goes wrong');
  }
};
