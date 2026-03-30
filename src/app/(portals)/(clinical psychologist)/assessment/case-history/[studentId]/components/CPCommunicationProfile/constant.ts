/* eslint-disable @typescript-eslint/no-explicit-any */

export const mapCommunicationProfile = (data: any) => {
    const exp = data?.expressiveLanguage || {};

    return {
        // ---------- RECEPTIVE ----------
        receptiveLanguage: {
            alertnessOrientation: !!data?.receptiveLanguage?.alertnessOrientation,
            responseToName: !!data?.receptiveLanguage?.responseToName,
            followsCommands: !!data?.receptiveLanguage?.followsCommands,
            understandsGestures: !!data?.receptiveLanguage?.understandsGestures,
        },

        // ---------- EXPRESSIVE ----------
        expressiveLanguage: {
            modeOfExpression: data?.expressiveLanguage?.modeOfExpression || {},

            intentionality: exp.intentionality || '',

            wordLevel: exp.wordLevel || '',

            functionsExpressed: data?.expressiveLanguage?.functionsExpressed || {},

            vocabulary: data?.expressiveLanguage?.vocabulary || {},
        },

        // ---------- PRAGMATIC ----------
        pragmaticSkills: {
            eyeContact: data?.pragmaticSkills?.eyeContact || '',
            jointAttention: data?.pragmaticSkills?.jointAttention || '',
            socialInteraction: data?.pragmaticSkills?.socialInteraction || '',
            initiationTurnTaking: data?.pragmaticSkills?.initiationTurnTaking || '',
        },
    };
};
