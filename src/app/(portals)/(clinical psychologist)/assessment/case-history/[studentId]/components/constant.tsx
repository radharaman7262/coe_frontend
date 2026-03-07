import React from 'react';

import PostNatalHistory from './PostNatalHistory';
import PrenatalBirthHistory from './PrenatalBirthHistory';
import NeonatalHistory from './NeonatalHistory';
import GrossMotorDevelopment from './GrossMotorDevelopment';
import DevelopmentalFineMotor from './DevelopmentalFineMotor';
import LanguageDevelopment from './LanguageDevelopment';
import SocialDevelopment from './SocialDevelopment';
import SelfHelpSkills from './SelfHelpSkills';
import MedicalHistory from './MedicalHistory';
import FamilyHistory from './FamilyHistory';
import SocialAndEnvironmentHistory from './SocialAndEnvironmentHistory';
import ScholasticHistory from './ScholasticHistory';
import GeneralObservation from './GeneralObservation';
import Diagnosis from './Diagnosis';
import PlayHistory from './PlayHistory';

export const COMPONENT_MAP: Record<string, React.JSX.Element> = {
    cpsPerenatalBirthHistory: <PrenatalBirthHistory />,
    cpsNeonatalHistory: <NeonatalHistory />,
    cpsPostNatalHistory: <PostNatalHistory />,
    cpsGrossMotor: <GrossMotorDevelopment />,
    cpsFineMotorCognition: <DevelopmentalFineMotor />,
    cpsLanguage: <LanguageDevelopment />,
    cpsSocialDevelopment: <SocialDevelopment />,
    cpsSelfHelp: <SelfHelpSkills />,
    cpsMedicalHistory: <MedicalHistory />,
    cpsFamilyHistory: <FamilyHistory />,
    cpsSocialEnvironmentalHistory: <SocialAndEnvironmentHistory />,
    cpsScholasticHistory: <ScholasticHistory />,
    cpsPlayHistory: <PlayHistory />,
    cpsGeneralObservation: <GeneralObservation />,
    cpsDiagnosis: <Diagnosis />,
};
