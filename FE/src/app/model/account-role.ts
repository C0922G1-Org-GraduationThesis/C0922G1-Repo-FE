import {Account} from './account';
import {Role} from './role';

export interface AccountRole {
  accountRoleId?: number;
  accountId?: Account;
  roleId?: Role;
}
