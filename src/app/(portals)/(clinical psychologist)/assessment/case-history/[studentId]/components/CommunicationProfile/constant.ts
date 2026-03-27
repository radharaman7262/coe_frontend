// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapCommunicationProfile = (data: any) => ({
    receptiveLanguage: {
        respondsToName: !!data?.receptiveLanguage?.respondsToName,
        understandsVocabulary: !!data?.receptiveLanguage?.understandsVocabulary,
        usesVisualSupport: data?.receptiveLanguage?.usesVisualSupport || '',
    },

    expressiveLanguage: {
        speechOutput: data?.expressiveLanguage?.speechOutput || '',
        vocabulary: data?.expressiveLanguage?.vocabulary || '',
        mode: {
            verbal: !!data?.expressiveLanguage?.mode?.verbal,
            aac: !!data?.expressiveLanguage?.mode?.aac,
            gestures: !!data?.expressiveLanguage?.mode?.gestures,
            echolalia: !!data?.expressiveLanguage?.mode?.echolalia,
        },
    },

    pragmaticSkills: {
        eyeContact: data?.pragmaticSkills?.eyeContact || '',
        jointAttention: data?.pragmaticSkills?.jointAttention || '',
        turnTaking: data?.pragmaticSkills?.turnTaking || '',
        initiation: data?.pragmaticSkills?.initiation || '',
    },
});
