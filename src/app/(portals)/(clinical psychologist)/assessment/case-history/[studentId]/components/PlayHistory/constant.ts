import { PlayHistoryFormKeys, PlayHistoryFormType } from './type';

export const INITIAL_STATE: PlayHistoryFormType = {
    [PlayHistoryFormKeys.STUDENT_ID]: '',
    [PlayHistoryFormKeys.BEHAVIOUR_IN_GROUP_PLAY]: '',
    [PlayHistoryFormKeys.KNOWLEDGE_OF_RULE_BASED_GAMES]: '',
    [PlayHistoryFormKeys.PLAY_BEHAVIOUR]: '',
    [PlayHistoryFormKeys.PLAY_PREFERENCE]: '',
    [PlayHistoryFormKeys.SPECIAL_LIKES_DISLIKES]: '',
    [PlayHistoryFormKeys.PLAY_PREFERENCE_NOTES]: '',
};
