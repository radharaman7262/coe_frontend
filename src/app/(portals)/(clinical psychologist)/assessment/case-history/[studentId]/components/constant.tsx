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
import ChiefComplains from './ChiefComplains';
import CompliantDetailAnalysis from './CompliantDetailAnalysis';
import GrossMotor from './GrossMotor';
import MuscleTone from './MuscleTone';
import MuscleStrength from './MuscleStrength';
import ROM from './ROM';
import SpeedAndAgility from './SpeedAndAgility';
import Endurance from './Endurance';
import Reflexes from './Reflexes';
import FineMotorSkills from './FineMotorSkills';
import GrossDevelopmentChecklist from './GrossDevelopmentChecklist';
import InHandManipulation from './InHandManipulation';
import Coordination from './Coordination';
import NonEquilibriumTest from './NonEquilibriumTest';
import CognitiveAndPerceptual from './CognitiveAndPerceptual';
import CommunicationSkills from './CommunicationSkills';
import EmotionalAwarenessAndExpression from './EmotionalAwarenessAndExpression';
import SelfRegulation from './SelfRegulation';
import Behavior from './Behavior';
import SocialSkills from './SocialSkills';
import PlaySkills from './PlaySkills';
import ActivityOfDailyLiving from './ActivityOfDailyLiving';
import AssisstiveDevice from './AssisstiveDevice';
import SchoolReadiness from './SchoolReadiness';
import SensoryProcessing from './SensoryProcessing';

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
    '139': <ChiefComplains />,
    '140': <CompliantDetailAnalysis />,
    '123': <GrossMotor />,
    '122': <MuscleTone />,
    '124': <MuscleStrength />,
    '125': <ROM />,
    '127': <SpeedAndAgility />,
    '128': <Endurance />,
    '130': <Reflexes />,
    '129': <FineMotorSkills />,
    '131': <GrossDevelopmentChecklist />,
    '132': <InHandManipulation />,
    '133': <Coordination />,
    '134': <NonEquilibriumTest />,
    '136': <CognitiveAndPerceptual />,
    '141': <SensoryProcessing />,
    '142': <CommunicationSkills />,
    '143': <EmotionalAwarenessAndExpression />,
    '144': <SelfRegulation />,
    '145': <Behavior />,
    '146': <SocialSkills />,
    '147': <PlaySkills />,
    '148': <ActivityOfDailyLiving />,
    '149': <AssisstiveDevice />,
    '150': <SchoolReadiness />,
};
