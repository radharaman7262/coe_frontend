export enum ImpactOnCommunicationFormKeys {
    DISRUPTS_DAILY_INTERACTION = 'voiceDisruptsDailyInteraction',
    SOCIAL_WITHDRAWAL = 'socialWithdrawalEmbarrassment',
    PEER_TEASING = 'peerTeasingImitation',
    CHILD_AWARENESS = 'childAwarenessOfVoiceDifference',
    PARENT_CONCERN = 'parentConcernAboutFunctionalImpact',
}

export type ImpactOnCommunicationFormType = {
    [key in ImpactOnCommunicationFormKeys]: string;
};
