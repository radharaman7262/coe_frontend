export enum ImpactOnCommunicationFormKeys {
    EMOTIONAL_SOCIAL_IMPACT = 'emotionalSocialImpact',
}

export type ImpactOnCommunicationFormType = {
    [key in ImpactOnCommunicationFormKeys]: string | number | boolean;
};