export enum NeonatalHistoryFormKeys {
    TERM = 'term',
    TYPE_OF_DELIVERY = 'typeOfDelivery',
    COMPLICATIONS_DURING_BIRTH = 'complicationsDuringBirth',
    HEAD_INJURY_DURING_BIRTH = 'headInjuryDuringBirth',
    BIRTH_WEIGHT = 'birthWeight',
    BIRTH_CRY = 'birthCry',
    NICU_STAY = 'nicuStay',
    NICU_DURATION = 'nicuStayDuration',
    BIRTH_POSITION_TETHERED_CORD = 'birthPositionTetheredCord',
}

export type NeonatalHistoryFormType = {
    [key in NeonatalHistoryFormKeys]: string;
};

export type NeoNatalHistoryErrorMessagesType = {
    [key in NeonatalHistoryFormKeys]?: string;
};
