import axios from 'axios';
import { INewUser, IUser } from '../types/types';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:4200/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface IDataForm {
  email: string;
  password: string;
}
export const authAPI = {
  login(data: IDataForm) {
    return instanceAxios.post('login', data).then(response => response.data);
  },
  register(data: IDataForm) {
    return instanceAxios.post('register', data).then(response => response.data);
  },
};

export const userAPI = {
  getUsers() {
    return instanceAxios.get<Array<IUser>>('listUsers').then(response => response.data);
  },

  filterUser(name: string) {
    return instanceAxios
      .get<Array<IUser>>(`listUsers?name_like=${name}`)
      .then(response => response.data);
  },
  deleteUser(id: number) {
    return instanceAxios.delete(`listUsers/${id}`);
  },
  addUser(data: INewUser) {
    return instanceAxios.post(`listUsers`, data);
  },
};

export const profileApi = {
  getProfileUser(id: string) {
    return instanceAxios.get<Array<IUser>>(`listUsers?id=${id}`).then(response => response.data[0]);
  },

  changeProfile(dataUser: IUser) {
    return instanceAxios.put(`listUsers/${dataUser.id}`, dataUser);
  },
};

const FormData = { email: 'mayskihevandre@gmail.com', password: '1234567' };
const FormData2 = { email: 'mayskihevandre@gmail.com', password: '12345672' };
// authAPI.register({ email: 'mayskihevandre@gmail.com', password: '1234567' });
// authAPI.login({ email: 'mayskihevandre@gmail.com', password: '1234567' });
// authAPI.register(FormData);
// console.log(authAPI.login(FormData));
