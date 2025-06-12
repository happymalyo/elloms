import { ApiService } from "../api";
import type { Jobs } from "./types";

export class JobService extends ApiService {
  constructor() {
    super("/crew/jobs/");
  }

  async getAllJobs(params?: Record<string, any>) {
    return this.getAll<Jobs>(params);
  }
}
