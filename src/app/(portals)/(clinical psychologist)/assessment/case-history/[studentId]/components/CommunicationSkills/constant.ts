import { CommunicationSkillsFormKeys, CommunicationSkillsFormType } from './type';

export const INITIAL_STATE: CommunicationSkillsFormType = {
    [CommunicationSkillsFormKeys.COMMENTS]: '',
    [CommunicationSkillsFormKeys.GENERAL]: '',
};

export const OPTIONS = [
    {
        label: 'Babbles (by 6–9 months)',
        value: 'Babbles (by 6–9 months)',
        key: 'babbles',
    },
    {
        label: 'Uses 5–10 words (by 15–18 months)',
        value: 'Uses 5–10 words (by 15–18 months)',
        key: 'uses5to10Words',
    },
    {
        label: 'Vocabulary of 50+ words (by 2 years)',
        value: 'Vocabulary of 50+ words (by 2 years)',
        key: 'vocabulary50Words',
    },
    {
        label: 'Combines 2–3 word phrases (by 2.5 years)',
        value: 'Combines 2–3 word phrases (by 2.5 years)',
        key: 'combines2to3Words',
    },
    {
        label: 'Uses full sentences (by 3.5–4 years)',
        value: 'Uses full sentences (by 3.5–4 years)',
        key: 'usesFullSentences',
    },
    {
        label: 'Understands simple instructions (by 18–24 months)',
        value: 'Understands simple instructions (by 18–24 months)',
        key: 'understandsSimpleInstructions',
    },
    {
        label: 'Gestures/points (by 9–12 months)',
        value: 'Gestures/points (by 9–12 months)',
        key: 'gesturesPoints',
    },
    {
        label: 'Maintains eye contact (by 6–9 months)',
        value: 'Maintains eye contact (by 6–9 months)',
        key: 'maintainsEyeContact',
    },
    {
        label: 'Uses communication for needs (by 2–2.5 years)',
        value: 'Uses communication for needs (by 2–2.5 years)',
        key: 'usesCommunicationForNeeds',
    },
    {
        label: 'Engages in simple conversation (by 3.5–4 years)',
        value: 'Engages in simple conversation (by 3.5–4 years)',
        key: 'engagesConversation',
    },
];
