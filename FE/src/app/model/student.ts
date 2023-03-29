import {Team} from './team';
import {Clazz} from './clazz';
import {Account} from './account';

export interface Student {
  studentId?: number;
  studentName?: string;
  studentGender?: boolean;
  studentCode?: string;
  studentDateOfBirth?: string;
  studentPhoneNumber?: number;
  studentEmail?: string;
  studentAddress?: string;
  studentImg?: string;
  flagDelete?: boolean;
  teamId?: Team;
  clazzId?: Clazz;
  accountId?: Account;
}
