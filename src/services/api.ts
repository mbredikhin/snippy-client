import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ISignUpInput, ISignInInput, IList, ISnippet, ITag } from '../interface';

class ApiService {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({ baseURL, withCredentials: true });
    this.instance.defaults.headers.common.Accept = 'application/json';
    this.instance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => error
    );
  }

  public signUp(params: ISignUpInput) {
    return this.instance.post<{ token: string }>('/auth/sign-up', { params });
  }

  public signIn(params: ISignInInput) {
    return this.instance.post<{ token: string }>('/auth/sign-in', { params });
  }

  public createList(params: { name: string }) {
    return this.instance.post<{ id: number }>('/api/lists', { params });
  }

  public getLists() {
    return this.instance.get<{ data: IList[] }>('/api/lists');
  }

  public getList(id: number) {
    return this.instance.get<IList>(`/api/lists/${id}`);
  }

  public updateList(data: IList) {
    return this.instance.put(`/api/lists/${data.id}`, data);
  }

  public deleteList(id: number) {
    return this.instance.delete(`/api/lists/${id}`);
  }

  public createListSnippet(id: number, data: ISnippet) {
    return this.instance.post<{ id: number }>(`/api/lists/${id}/snippets`, data);
  }

  public getListSnippets(listID: number) {
    return this.instance.get<ISnippet[]>(`/api/lists/${listID}/snippets`);
  }

  public getSnippet(id: number) {
    return this.instance.get<ISnippet>(`/api/snippets/${id}`);
  }

  public updateSnippet(data: ISnippet) {
    return this.instance.put(`/api/snippets/${data.id}`, data);
  }

  public deleteSnippet(id: number) {
    return this.instance.delete(`/api/snippets/${id}`);
  }

  public getFavouriteSnippets() {
    return this.instance.delete<{ data: number[] }>(`/api/favourite-snippets`);
  }

  public addSnippetToFavourites(id: number) {
    return this.instance.post(`/api/favourite-snippets/${id}`);
  }

  public removeSnippetToFavourites(id: number) {
    return this.instance.delete(`/api/favourite-snippets/${id}`);
  }

  public createTag(data: ITag) {
    return this.instance.post<{ id: number }>(`/api/tags`, data);
  }

  public updateTag(data: ITag) {
    return this.instance.put(`/api/tags`, data);
  }

  public deleteTag(id: number) {
    return this.instance.delete(`/api/tags/${id}`);
  }

  public getSyntaxList() {
    return this.instance.get(`/api/syntaxes`);
  }
}

const baseURL: string = process.env.REACT_APP_BASEURL as string;
const apiService = new ApiService(baseURL);

export default apiService;
