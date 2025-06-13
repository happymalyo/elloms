import { JobService } from "~/services/jobsService/job.service";

const jobService = new JobService();

export const jobQueryConfig = {
    jobs: {
      queryKey: ['jobs'],
      queryFn: jobService.getAllJobs,
      options: {
        staleTime: 20 * 1000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: 2,
      },
    },
  } as const;