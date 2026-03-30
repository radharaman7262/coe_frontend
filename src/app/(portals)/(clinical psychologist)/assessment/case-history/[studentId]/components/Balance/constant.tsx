/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldKey, FormState } from './type';

export const FIELD_LABELS: Record<FieldKey, string> = {
    sittingToStanding: 'Sitting to standing',
    standingToSitting: 'Standing to sitting',
    transfers: 'Transfers',
    standingUnsupported: 'Standing unsupported',
    sittingUnsupported: 'Sitting unsupported',
    standingEyesClosed: 'Standing with eyes closed',
    standingFeetTogether: 'Standing with feet together',
    standingFootInFront: 'Standing with one foot in front',
    standingOneFoot: 'Standing on one foot',
    turning360: 'Turning 360 degrees',
    turningLookBehind: 'Turning to look behind',
    retrievingObject: 'Retrieving object from floor',
    placingFootOnStool: 'Placing alternate foot on stool',
    reachingForward: 'Reaching forward with outstretched arm',
};

export const INITIAL_STATE: FormState = {
    sittingToStanding: { score: null, seconds: '', comments: '' },
    standingToSitting: { score: null, seconds: '', comments: '' },
    transfers: { score: null, seconds: '', comments: '' },
    standingUnsupported: { score: null, seconds: '', comments: '' },
    sittingUnsupported: { score: null, seconds: '', comments: '' },
    standingEyesClosed: { score: null, seconds: '', comments: '' },
    standingFeetTogether: { score: null, seconds: '', comments: '' },
    standingFootInFront: { score: null, seconds: '', comments: '' },
    standingOneFoot: { score: null, seconds: '', comments: '' },
    turning360: { score: null, seconds: '', comments: '' },
    turningLookBehind: { score: null, seconds: '', comments: '' },
    retrievingObject: { score: null, seconds: '', comments: '' },
    placingFootOnStool: { score: null, seconds: '', comments: '' },
    reachingForward: { score: null, seconds: '', comments: '' },
};

export const SCORE_OPTIONS = [
    { id: '0', label: 0 },
    { id: '1', label: 1 },
    { id: '2', label: 2 },
    { id: '3', label: 3 },
    { id: '4', label: 4 },
];

export const mapLowerExtremity = (data: any) => {
    const api = data?.lowerextermity || {};
    const mapped: any = {};

    Object.keys(INITIAL_STATE).forEach((key) => {
        const item = api?.[key];

        mapped[key] = {
            // ✅ FIX SCORE (object → number)
            score:
                typeof item?.score === 'object'
                    ? item.score
                    : typeof item?.score === 'number'
                      ? item.score
                      : '',

            // ✅ seconds
            seconds: typeof item?.seconds === 'number' ? item.seconds : '',

            // ✅ comments
            comments: item?.comments || '',
        };
    });

    return mapped;
};
