import { AssignedMenuType } from './assignedMenuType';
import { LoggedRoleType } from './roleType';
import { userSpecializationType } from './userSpecialization';
import { UserType } from './userType';

export interface LoggedUserDetailType {
    id: string;
    createdAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: null;
    isEmailSent: number;
    status: number;
    token: null;
    assignedMenus: AssignedMenuType[];
    role: LoggedRoleType;
    userSpecializations: userSpecializationType;
    askSpecialization: number;
    userType: UserType;
}
