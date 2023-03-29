import {Student} from './student';
import {Announcement} from './announcement';

export interface StudentAnnouncement {
  studentAnnouncementId?: number;
  studentId?: Student;
  announcementId?: Announcement;
}
