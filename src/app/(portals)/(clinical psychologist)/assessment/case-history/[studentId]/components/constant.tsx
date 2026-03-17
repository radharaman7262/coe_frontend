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
    '15': <PrenatalBirthHistory />,
    '16': <NeonatalHistory />,
    '17': <PostNatalHistory />,
    '18': <GrossMotorDevelopment />,
    '19': <DevelopmentalFineMotor />,
    '20': <LanguageDevelopment />,
    '21': <SocialDevelopment />,
    '22': <SelfHelpSkills />,
    '23': <MedicalHistory />,
    '24': <FamilyHistory />,
    '26': <SocialAndEnvironmentHistory />,
    '27': <ScholasticHistory />,
    '28': <PlayHistory />,
    '29': <GeneralObservation />,
    '30': <Diagnosis />,
};
