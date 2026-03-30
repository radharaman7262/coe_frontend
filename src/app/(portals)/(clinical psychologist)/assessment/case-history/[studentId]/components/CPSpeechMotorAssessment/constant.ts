/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapCommunicationProfile = (data: any) => ({
    // ---------- A. RESPIRATION ----------
    respirationPhonation: {
        loudness: data?.respirationPhonation?.loudness || '',
        breathSupport: data?.respirationPhonation?.breathSupport || '',
        phonation: data?.respirationPhonation?.phonation || '',
    },

    // ---------- B. ARTICULATION ----------
    articulationIntelligibility: {
        jawControl: data?.articulationIntelligibility?.jawControl || '',
        lipClosure: data?.articulationIntelligibility?.lipClosure || '',
        tongueMovement: data?.articulationIntelligibility?.tongueMovement || '',
        intelligibility: data?.articulationIntelligibility?.intelligibility || '',
        phonologicalPatterns: data?.articulationIntelligibility?.phonologicalPatterns || '',
        rateOfSpeech: data?.articulationIntelligibility?.rateOfSpeech || '',
    },

    // ---------- C. PROSODY ----------
    prosodyVoice: {
        pitch: data?.prosodyVoice?.pitch || '',
        nasality: data?.prosodyVoice?.nasality || '',
        voiceQuality: data?.prosodyVoice?.voiceQuality || '',
    },
});
