import {Teacher} from './teacher';

export interface Notification {
  notificationId?: number;
  notificationTopic?: string;
  notificationTime?: string;
  notificationContent?: string;
  teacherId?: Teacher;
}
