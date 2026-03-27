export const DISFLUENCY_KEYS = [
    {
        key: 'facialTension',
        label: 'Facial tension',
    },
    {
        key: 'eyeBlinking',
        label: 'Eye blinking',
    },
    {
        key: 'jawTongueTension',
        label: 'Jaw/tongue tension',
    },
    {
        key: 'tappingFootMovement',
        label: 'Tapping / Foot movement',
    },
    {
        key: 'headJerks',
        label: 'Head jerks / Arm movements',
    },
    {
        key: 'breathingIrregularities',
        label: 'Breathing irregularities',
    },
    {
        key: 'avoidance',
        label: 'Avoidance of words/situations',
    },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapBehaviorData = (data: any) => ({
    behaviors: {
        facialTension: {
            present: data?.behaviors?.facialTension?.present || '',
            frequency: data?.behaviors?.facialTension?.frequency || '',
            context: data?.behaviors?.facialTension?.context || '',
        },
        eyeBlinking: {
            present: data?.behaviors?.eyeBlinking?.present || '',
            frequency: data?.behaviors?.eyeBlinking?.frequency || '',
            context: data?.behaviors?.eyeBlinking?.context || '',
        },
        jawTongueTension: {
            present: data?.behaviors?.jawTongueTension?.present || '',
            frequency: data?.behaviors?.jawTongueTension?.frequency || '',
            context: data?.behaviors?.jawTongueTension?.context || '',
        },
        tappingFootMovement: {
            present: data?.behaviors?.tappingFootMovement?.present || '',
            frequency: data?.behaviors?.tappingFootMovement?.frequency || '',
            context: data?.behaviors?.tappingFootMovement?.context || '',
        },
        headJerks: {
            present: data?.behaviors?.headJerks?.present || '',
            frequency: data?.behaviors?.headJerks?.frequency || '',
            context: data?.behaviors?.headJerks?.context || '',
        },
        breathingIrregularities: {
            present: data?.behaviors?.breathingIrregularities?.present || '',
            frequency: data?.behaviors?.breathingIrregularities?.frequency || '',
            context: data?.behaviors?.breathingIrregularities?.context || '',
        },
        avoidance: {
            present: data?.behaviors?.avoidance?.present || '',
            frequency: data?.behaviors?.avoidance?.frequency || '',
            context: data?.behaviors?.avoidance?.context || '',
        },
    },
});
