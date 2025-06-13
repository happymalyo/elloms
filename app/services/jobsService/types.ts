export interface Jobs {
    topic: string;
    additional_context: string | null;
    prompt: (string | null)[];
    platform: string | null;
    id: number;
    job_id: string;
    user_id: number;
    conversation_id: number | null;
    status: string;
    result: string | null;
    error_message: string | null;
    started_at: Date | null;      
    completed_at: Date | null;    
  }

  export interface CreateJobRequest {
    topic: string;
    additional_context: string;
    platform: string;
  }

  export type CrewJobResult = Jobs[];
  export type CreateJobResponse = Pick<Jobs, "job_id" | "status"> & {
    message: string;
  };