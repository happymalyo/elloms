import { useQuery } from "@tanstack/react-query";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { ModalHistory } from "~/components/History/ModalHistory";
import { jobQueryConfig } from "~/lib/jobQueryConfig";
import { JobService } from "~/services/jobsService/job.service";

const jobService = new JobService();

export async function loader(args: LoaderFunctionArgs) {
  const jobs = await jobService.getAllJobs();
  return { jobs };
}

export default function History() {
  const { jobs } = useLoaderData();

  const { data } = useQuery({
    queryKey: jobQueryConfig.jobs.queryKey,
    queryFn: jobService.getAllJobs,
    initialData: jobs,
    staleTime: jobQueryConfig.jobs.options.staleTime,
    refetchOnWindowFocus: jobQueryConfig.jobs.options.refetchOnWindowFocus,
    refetchOnReconnect: jobQueryConfig.jobs.options.refetchOnReconnect,
    retry: jobQueryConfig.jobs.options.retry,
  });

  return (
    <>
      <ModalHistory jobs={data || []} />
    </>
  );
}
