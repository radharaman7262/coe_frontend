export enum DevelopmentalHistoryFormKeys {
    NECK_HOLDING = 'neckHolding',
    STANDS_ALONE = 'standsAlone',
    WALKS_ALONE = 'walksAlone',
    RUNS_WALKS_UP_DOWN = 'runsWalksUpDown',
    RIDES_TRICYCLE = 'ridesTricycle',
}

export type DevelopmentalHistoryFormType = {
    [key in DevelopmentalHistoryFormKeys]: string;
};

export type DevelopmentalHistoryErrorMessagesType = {
    [key in DevelopmentalHistoryFormKeys]?: string;
};
