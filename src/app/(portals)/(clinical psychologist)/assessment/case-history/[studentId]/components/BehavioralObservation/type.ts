export enum BehavioralSchemaFormKeys {
    IN_HAND_MANIPULATION = 'inHandManipulation',
}

export type BehavioralSchemaFormType = {
    [key in BehavioralSchemaFormKeys]: string;
};
