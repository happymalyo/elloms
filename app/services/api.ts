import axiosInstance from "../lib/axios";

export class ApiService {
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll<T>(params?: Record<string, any>) {
    try {
      const response = await axiosInstance.get<T[]>(this.endpoint, { params });
      return response.data;
    } catch (error) {
      console.log("Error", error);
      return {};
    }
  }

  async getById<T>(id: string | number) {
    const response = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  }

  async create<T>(data: Partial<T>) {
    const response = await axiosInstance.post<T>(this.endpoint, data);
    return response.data;
  }

  async update<T>(id: string | number, data: Partial<T>) {
    const response = await axiosInstance.put<T>(`${this.endpoint}/${id}`, data);
    return response.data;
  }

  async delete(id: string | number) {
    const response = await axiosInstance.delete(`${this.endpoint}/${id}`);
    return response.data;
  }
}
