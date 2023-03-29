import {Teacher} from './teacher';
import {Faculty} from './faculty';

export interface Clazz {
  clazzId?: number;
  clazzName?: string;
  teacherId?: Teacher;
  facultyId?: Faculty;
}
