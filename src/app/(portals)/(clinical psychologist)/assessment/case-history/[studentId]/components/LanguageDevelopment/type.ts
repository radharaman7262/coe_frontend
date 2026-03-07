export enum DevelopmentalLanguageFormKeys {
    BABBLING = 'babbling',
    DISYLLABLES = 'disyllables',
    TWO_THREE_WORD_SENTENCES = 'twoThreeWordSentences',
    KNOWS_FULL_NAME_GENDER = 'knowsFullNameGender',
    TELLS_STORY_POEM = 'tellsStoryPoem',
    ASK_MEANING_OF_WORDS = 'askMeaningOfWords',
}

export type DevelopmentalFineMotorHistoryFormType = {
    [key in DevelopmentalLanguageFormKeys]: string;
};

export type DevelopmentalFineMotorErrorMessagesType = {
    [key in DevelopmentalLanguageFormKeys]?: string;
};
