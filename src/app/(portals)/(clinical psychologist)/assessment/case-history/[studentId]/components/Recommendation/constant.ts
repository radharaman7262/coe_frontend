import { RecommendationFormKeys , RecommendationFormType } from './type';

export const INITIAL_STATE: RecommendationFormType = {
    [RecommendationFormKeys.THERAPY]: '',
    [RecommendationFormKeys.PARENT_ID]: '',
    [RecommendationFormKeys.THERAPY_FREQUENCY]: '',
};

export const OPTIONS = [
            { label: 'Speech therapy for articulation / resonance', value: 'Speech therapy for articulation / resonance',key:'speechTherapy' },
            { label: 'Focus on oral airflow, pressure consonants', value: 'Focus on oral airflow, pressure consonants' , key:'languageTherapy' },
            { label: 'Nasality monitoring exercises', value: 'Nasality monitoring exercises' , key:'nasilityMonitoring' },
            { label: 'ENT / Audiology referral (if not done recently)', value: 'ENT / Audiology referral (if not done recently)' , key:'ent' },
            { label: 'Dental / orthodontic consult', value: 'Dental / orthodontic consult' , key:'dental' },
            { label: 'Parent training for home practice', value: 'Parent training for home practice' , key:'parentTraining' },
            { label: 'Multidisciplinary cleft team follow-up', value: 'Multidisciplinary cleft team follow-up' , key:'multiDisciplinary' },
        ]