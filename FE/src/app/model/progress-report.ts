import {Project} from './project';
import {Stage} from './stage';

export interface ProgressReport {
  progressReportsId?: number;
  progressReportsName?: string;
  progressReportsContent?: string;
  progressReportsFile?: string;
  progressReportsPercent?: number;
  projectId?: Project;
  stageId?: Stage;
}
