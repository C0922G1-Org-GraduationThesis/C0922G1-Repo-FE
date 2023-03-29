import {Project} from './project';
import {Teacher} from './teacher';

export interface Team {
  teamId?: number;
  teamName?: string;
  teacherId?: Teacher;
  projectId?: Project;
}
