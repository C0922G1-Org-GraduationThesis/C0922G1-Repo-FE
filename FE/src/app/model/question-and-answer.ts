import {Team} from './team';

export interface QuestionAndAnswer {
  questionAndAnswerId?: number;
  questionAndAnswerTitle?: string;
  questionAndAnswerContent?: string;
  questionAndAnswerReply?: string;
  teamId?: Team;
}
