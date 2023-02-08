import { api } from '../../helpers/mockendApi';
import { getUserService } from '../../services/user.service';
import { mockUsers } from '../__mocks__';

describe('getUserService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of users', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockUsers });

    const result = await getUserService();

    expect(api.get).toHaveBeenCalledWith('/users');
    expect(result).toEqual(mockUsers);
  });
});
