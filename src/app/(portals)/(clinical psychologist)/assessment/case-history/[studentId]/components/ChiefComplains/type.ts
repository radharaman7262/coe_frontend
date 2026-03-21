export enum ChiefComplainsFormKeys {
    CHIEF_COMPLAINTS = 'chiefComplaints',
    GENERAL_OBSERVATION = 'generalObservation',
}

export type ChiefComplainFormType = {
    [key in ChiefComplainsFormKeys]: string;
};

export type ChiefComplainErrorMessagesType = {
    [key in ChiefComplainsFormKeys]?: string;
};
