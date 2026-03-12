import { SiblingType } from './type';

export const DRAWER_DATA = {
    parentInformation: 'Parent Information',
    step2of2: 'Step 2 of 2',
    fathersName: `Father's Name`,
    fathersAge: `Father's Age`,
    fathersOccupation: `Father's Occupation`,
    fathersNo: `Father's Ph. number`,
    selectOccupation: 'Select Occupation',
    mothersName: `Mother's Name`,
    mothersAge: `Mother's Age`,
    mothersOccupation: `Mother's Occupation`,
    phoneNo: 'Phone number',
    languageSpokenAtHome: 'Language Spoken at home:',
    selectLanguage: 'Select Language',
    familyType: 'Family Type:',
    jointFamily: 'Joint Family',
    nuclearFamily: 'Nuclear Family',
    siblings: 'Siblings:',
    uploadsupportingfile: 'Upload any supporting file here...',
    choosefiles: 'Choose Files',
};

export const BUTTON_TEXT = {
    addStudent: 'Add Student',
};

export const DUMMY_DATA = [
    { label: 'Business', value: 'Business' },
    { label: 'Job', value: 'Job' },
    { label: 'Engineer', value: 'Engineer' },
];

export const LANGUAGE_DATA = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
];

export const SIBLING_OPTIONS: SiblingType[] = [
    { id: 1, name: 'Yes' },
    { id: 2, name: 'No' },
];
