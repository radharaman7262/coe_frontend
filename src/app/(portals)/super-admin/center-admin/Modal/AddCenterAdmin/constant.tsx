export const CENTER_ADMIN_TEXT = {
    addCenterAdmin: 'Add center admin',
    firstName: 'First Name',
    lastName: 'Last Name',
    phoneNo: 'Phone no',
    emailId: 'Email ID',
    role: 'Role',
    specialization: 'Specialization',
    heyJustNeeds: 'Hey, just so you know, you can totally assign them to the center later!',
    assignCenter: 'Assign Center',
    enterHere: 'Enter here',
    centerAdmin: 'Center Admin',
    selectSpecialization: 'Select Specialization',
    selectCenter: 'Select Center',
    cancel: 'Cancel',
    create: 'Create',
};

export const EMPTY_OPTIONS: { id: number; name: string }[] = [];

// TODO: Need to be remove after API Integration //

export const SPECIALIZATION_LIST = [
    { id: 1, name: 'Speech Therapy' },
    { id: 2, name: 'Occupational Therapy' },
    { id: 3, name: 'Behavioral Therapy' },
    { id: 4, name: 'Hearing & Communication' },
    { id: 5, name: 'Assistive Learning' },
];

export const CENTER_LIST = [
    { id: 1, name: 'Ghaziabad' },
    { id: 2, name: 'Delhi' },
    { id: 3, name: 'Noida' },
];

export const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    phoneNo: '',
    emailId: '',
    selectedSpecialization: null,
    selectedCenter: null,
    searchFilter: '',
};
