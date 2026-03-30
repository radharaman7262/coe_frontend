export type FieldKey =
    | 'sittingToStanding'
    | 'standingToSitting'
    | 'transfers'
    | 'standingUnsupported'
    | 'sittingUnsupported'
    | 'standingEyesClosed'
    | 'standingFeetTogether'
    | 'standingFootInFront'
    | 'standingOneFoot'
    | 'turning360'
    | 'turningLookBehind'
    | 'retrievingObject'
    | 'placingFootOnStool'
    | 'reachingForward';

export type FieldData = {
    score: Record<string, string | number> | null;
    seconds: number | '';
    comments: string;
};

export type FormState = Record<FieldKey, FieldData>;
