export enum DevelopmentalSelfHelpFormKeys {
    FEEDS_INDEPENDENTLY = 'feedsIndependently',
    BRUSHES_TEETH = 'brushesTeeth',
    BOWEL_CONTROL = 'bowelControl',
    BLADDER_CONTROL = 'bladderControl',
    DRESSES_SELF = 'dressesSelf',
}

export type DevelopmentalSelfHelpFormType = {
    [key in DevelopmentalSelfHelpFormKeys]: string;
};

export type DevelopmentalSelfHelpErrorMessagesType = {
    [key in DevelopmentalSelfHelpFormKeys]?: string;
};
