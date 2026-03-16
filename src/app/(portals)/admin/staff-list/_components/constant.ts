import { StaffStatusType } from '../type';

export const COLUMNS = [
    { header: 'Name', accessor: 'name' },
    { header: 'Role', accessor: 'role' },
    // { header: 'Specialist', accessor: 'specialist' },
    { header: 'Phone number', accessor: 'phone' },
    { header: 'Assigned Students', accessor: 'assignedStudents' },
    { header: 'Status', accessor: 'status' },
    { header: 'Change Status', accessor: 'changeStatus' },
    { header: 'Action', accessor: 'action' },
];

export const STAFF_LIST_TEXT = {
    staffManagement: 'Staff Management',
    description: 'Simplify center creation and management—everything in one place.',
    createStaff: 'Add Staff',
    clear: 'Clear',
    noDataTitle: 'No staff members added yet',
    noDataDescription:
        'Start building your team by adding psychologists, therapists, and educators here.',
};

export const STATUS_LABEL_MAP: Record<string, string> = {
    [StaffStatusType.Active]: 'Activate',
    [StaffStatusType.DeActivate]: 'Deactivate',
};
