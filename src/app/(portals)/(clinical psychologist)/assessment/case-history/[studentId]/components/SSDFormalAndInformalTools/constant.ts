import { SSDFormalAndInformalFormKeys, SSDFormalAndInformalFormType } from './type';

export const INITIAL_STATE: SSDFormalAndInformalFormType = {
    [SSDFormalAndInformalFormKeys.SPEECH_SAMPLE]: '',
    [SSDFormalAndInformalFormKeys.ERROR_ANALYSIS_METHOD]: '',
    [SSDFormalAndInformalFormKeys.STIMULATION_CHECKED]: '',
    [SSDFormalAndInformalFormKeys.FORMAL_TOOL_USED]: '',
};

export const SPEECH_SAMPLE_OPTIONS = [
    { key: 'spontaneous', label: 'Spontaneous', value: 'Spontaneous' },
    { key: 'repetition', label: 'Repetition', value: 'Repetition' },
    { key: 'structured play', label: 'Structured play', value: 'Structured play' },
];

export const FORMAL_TOOLS = [
    { key: 'deap', label: 'DEAP', value: 'DEAP' },
    { key: 'gfta', label: 'GFTA', value: 'GFTA' },
    { key: 'klpa', label: 'KLPA', value: 'KLPA' },
    { key: 'inpat', label: 'INPAT', value: 'INPAT' },
    { key: 'other', label: 'Other', value: 'Other' },
];
