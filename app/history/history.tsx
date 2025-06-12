import { useQuery } from "@tanstack/react-query";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { ModalHistory } from "~/components/History/ModalHistory";
import { JobService } from "~/services/jobsService/job.service";

const jobService = new JobService()

export async function loader(args: LoaderFunctionArgs) {
  try {
    const jobs = await jobService.getAllJobs();
    return { jobs }
  } catch (error) {
    return {}
  }
}

export default function History() {
  const { jobs } = useLoaderData()

  const { data } = useQuery({
    queryKey: ['jobs'],
    queryFn: jobService.getAllJobs,
    initialData: jobs,
  })


  return (
    <>
     <ModalHistory jobs={data || []} />
    </>
  );
}
