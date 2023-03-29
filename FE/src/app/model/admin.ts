import {Account} from './account';

export interface Admin {
  adminId?: number;
  adminName?: string;
  adminEmail?: string;
  adminPhoneNumber?: string;
  adminImg?: string;
  adminAddress?: string;
  accountId?: Account;
}
