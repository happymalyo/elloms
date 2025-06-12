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
  export type CrewJobResult = Jobs[];