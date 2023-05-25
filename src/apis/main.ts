import axios from 'axios';

interface PostData {
  userid: number;
  id: number;
  tilte: string;
  body: string;
}

const jsonPlacehorderBASEURL = 'https://jsonplaceholder.typicode.com';

const fakeAPI = {
  getPosts: () => {
    const getPostsResponseData = axios.get<PostData[]>(
      `${jsonPlacehorderBASEURL}/posts`
    );
    return getPostsResponseData;
  },
  getPost: (id: number) => {
    const getPostResponseData = axios.get<PostData>(
      `${jsonPlacehorderBASEURL}/posts/${id}`
    );
    return getPostResponseData;
  },
};
export default fakeAPI;

//
// export const userAndAuthentication = {
//   login: (userData: ILoginUserData): Promise<IGlobalUser> => {
//     const loginResponseData = axios.post<ILoginUserData, IGlobalUser>(
//       '/users/login',
//       userData
//     );
//     return loginResponseData;
//   },
//   create: (userData: IRegisterUser): Promise<IGlobalUser> => {
//     const createResonseData = axios.post<IRegisterUser, IGlobalUser>(
//       '/users',
//       userData
//     );
//     return createResonseData;
//   },
//   logged: (): Promise<AxiosResponse<IGlobalUser>> => {
//     const loggedResponseData = axios.get<IGlobalUser>('user');
//     return loggedResponseData;
//   },
//
//   post: <T, U>(userData: T, url: string): Promise<U> => {
//     const responseData = axios.post<T, U>(url, userData);
//     return responseData;
//   },
//
//   get: (url: string): Promise<AxiosResponse<IGlobalUser>> => {
//     const responseData = axios.get<IGlobalUser>(url);
//     return responseData;
//   },
//
//   put: (url: string): Promise<AxiosResponse<IGlobalUser>> => {
//     const responseData = axios.put<IGlobalUser>(url);
//     return responseData;
//   },
// };
//
// export const articles = {
//   getArticles: async () => {
//     const allArticle = await axios.get<IArticlesData>('articles');
//     return allArticle;
//   },
// };
