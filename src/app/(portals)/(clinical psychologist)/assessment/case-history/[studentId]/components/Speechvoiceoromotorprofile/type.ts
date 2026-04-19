/* eslint-disable @typescript-eslint/no-explicit-any */
type SpeechPhonology = {
    babbling: boolean;
    phonemes: boolean;
    sharesEnjoyment: boolean;
    intelligibility: string;
    processes: string;
};

type Behavior = {
    pickyEater: boolean;
    textureRefusal: boolean;
    pocketingFood: boolean;
    needsPrompts: boolean;
    careGiverFed: boolean;
};

type Fluency = {
    fast: boolean;
    slow: boolean;
    normal: boolean;
    repetitions: boolean;
    prolongations: boolean;
    cluttering: boolean;
};

type Voice = {
    pitch: {
        high: boolean;
        low: boolean;
        monotone: boolean;
        varied: boolean;
    };
    quality: {
        hoarse: boolean;
        breathy: boolean;
        normal: boolean;
    };
    resonance: {
        hypernasal: boolean;
        hyponasal: boolean;
        normal: boolean;
    };
};

export interface FormType {
    speechPhonology: SpeechPhonology;
    fluency: Fluency;
    voice: Voice;
    behavior: Behavior;
    structure: Record<string, any>;
    function: Record<string, any>;
    vegetativeSkills: Record<string, any>;
}
