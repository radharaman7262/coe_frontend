export enum PlayHistoryFormKeys {
    STUDENT_ID = 'studentId',
    PLAY_BEHAVIOUR = 'playBehaviour',
    PLAY_PREFERENCE = 'playPreference',
    KNOWLEDGE_OF_RULE_BASED_GAMES = 'knowledgeOfGames',
    BEHAVIOUR_IN_GROUP_PLAY = 'behaviourInGroup',
    SPECIAL_LIKES_DISLIKES = 'specialLikesDislikes',
    PLAY_PREFERENCE_NOTES = 'playPreferenceNote',
}

export type PlayHistoryFormType = {
    [key in PlayHistoryFormKeys]: string;
};

export type PlayHistoryErrorMessagesType = {
    [key in PlayHistoryFormKeys]?: string;
};
