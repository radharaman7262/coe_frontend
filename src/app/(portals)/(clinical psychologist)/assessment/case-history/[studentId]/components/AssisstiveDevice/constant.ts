import { AssisstiveDeviceFormKeys, AssisstiveDeviceFormType } from './type';

export const INITIAL_STATE: AssisstiveDeviceFormType = {
    [AssisstiveDeviceFormKeys.GENERAL]: '',
    [AssisstiveDeviceFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    {
        label: 'Orthotics',
        value: 'Orthotics',
        key: 'orthotics',
    },
    {
        label: 'Wheelchair/walker',
        value: 'Wheelchair/walker',
        key: 'wheelchair',
    },
    {
        label: 'Modified utensils',
        value: 'Modified utensils',
        key: 'modifiedUtensils',
    },
    {
        label: 'Communication devices',
        value: 'Communication devices',
        key: 'communicationDevices',
    },
    {
        label: 'Sensory tools (vest, chewies, headphones)',
        value: 'Sensory tools (vest, chewies, headphones)',
        key: 'sensoryTools',
    },
];
