export interface FeedbacksRepository {
  create: (data:FeedbackCreateData) => Promise<void>;
}

export interface FeedbackCreateData{
  type: string;
  comment: string;
  screenshot?: string;
}