import axios from 'axios';
import { IUser } from '../types/types';

interface IDataForm {
  email: string;
  password: string;
}
export const authAPI = {
  login(data: IDataForm) {
    return axios.put('http://localhost:4200/login', data).then(response => {
      console.log(response);
    });
  },
  register(data: IDataForm) {
    return axios.post('http://localhost:4200/register', data).then(response => response.data);
  },
};

export const userAPI = {
  getUsers() {
    return axios.get<Array<IUser>>('http://localhost:4200/users').then(response => response.data);
  },

  filterUser(name: string) {
    return axios
      .get<Array<IUser>>(`http://localhost:4200/users?name_like=${name}`)
      .then(response => response.data);
  },
  deleteUser(id: number) {
    return axios.delete(`http://localhost:4200/users/${id}`);
  },
};

export const profileApi = {
  getProfileUser(id: string) {
    return axios
      .get<Array<IUser>>(`http://localhost:4200/users?id=${id}`)
      .then(response => response.data[0]);
  },

  changeProfile(dataUser: IUser) {
    return axios.put(`http://localhost:4200/users?id=${dataUser.id}`, dataUser);
  },
};
// authAPI.register({ email: 'mayskihevandre@gmail.com', password: '1234567' });
// authAPI.login({ email: 'mayskihevandre@gmail.com', password: '1234567' });
