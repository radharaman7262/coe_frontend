import { VoiceFormalToolFormKeys, VoiceFormalToolFormType } from './type';

export const VOICE_ASSESSMENT_TOOLS_OPTIONS = [
    { label: 'CAPE-V', value: 'CAPE-V', key: 'cape_v' },
    { label: 'GRBAS', value: 'GRBAS', key: 'grbas' },
    {
        label: 'VRQOL (Voice-Related Quality of Life Scale,)',
        value: 'VRQOL (Voice-Related Quality of Life Scale)',
        key: 'vrqol',
    },
    {
        label: 'Pediatric Voice Handicap Index (pVHI)',
        value: 'Pediatric Voice Handicap Index (pVHI)',
        key: 'pvhi',
    },
    {
        label: 'Acoustic lab analysis (e.g Praat, CSL)',
        value: 'Acoustic lab analysis (e.g Praat, CSL)',
        key: 'acoustic_lab_analysis',
    },
    {
        label: 'Respiratory support charting (spirometry if referred)',
        value: 'Respiratory support charting (spirometry if referred)',
        key: 'respiratory_support_charting',
    },
];

export const INITIAL_STATE: VoiceFormalToolFormType = {
    [VoiceFormalToolFormKeys.VOICE_SPEECH_ASSESSMENT]: '',
};
