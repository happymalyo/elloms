import axiosInstance from "~/lib/axios";
import { ApiService } from "../api";
import type {
  CreateJobRequest,
  CreateJobResponse,
  Jobs,
  UpdateJobRequest,
  UpdateJobResponse,
} from "./types";

export class JobService extends ApiService {
  constructor() {
    super("/crew/jobs");
  }

  async getAllJobs(params?: Record<string, any>) {
    return this.getAll<Jobs>(params);
  }

  async createJob(data: CreateJobRequest) {
    try {
      const response = await axiosInstance.post<CreateJobResponse>(
        "/crew/kickoff-async",
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error creating job", error);
      throw error;
    }
  }

  async updateJob(id: string, data: UpdateJobRequest) {
    try {
      const response = await axiosInstance.patch<UpdateJobResponse>(
        `/crew/jobs/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error updating job", error);
      throw error;
    }
  }

  async startImageGen(id: string, data: CreateJobRequest) {
    try {
      const response = await axiosInstance.post<UpdateJobResponse>(
        `/crew/generated-image/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error start image generation", error);
      throw error;
    }
  }
}
