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
import LanguageReceptive from './LanguageReceptive';
import LanguageExpressive from './LanguageExpressive';
import VisualPerception from './VisualPerception';
import Writing from './Writing';
import FunctionalReading from './FunctionalReading';
import ReadingSkills from './ReadingSkills';
import MathematicalSkills from './MathematicalSkills';
import BehavioralObservation from './BehavioralObservation';
import DiagnosticFormulation from './DiagnosticFormulation';
import ProvisionalDiagnosis from './ProvisionalDiagnosis';
import FormalAndInformalTools from './FormalAndInformalTools';
import DiagnosticImpression from './DiagnosticImpression';
import Recommendation from './Recommendation';
import MedicalDevelopmentalHistory from './MedicalDevelopmentalHistory';
import HomeEnvironment from './HomeEnvironment';
import EquilibriumTest from './EquilibriumTest';
import MedicalAndSurgicalHistory from './MedicalAndSurgicalHistory';
import DevelopmentalMilestone from './DevelopmentalMilestone';
import SpeechAndArticulation from './SpeechAndArticulation';
import ResonanceAndVoice from './ResonanceAndVoice';
import AacAndAlternateModes from './AacAndAlternateModes';
import CPProvisionalDiagnosis from './CPProvisionalDiagnosis';
import CPDiagnosticImpression from './CPDiagnosticImpression';
import CPFormalTools from './CPFormalTools';
import FluenceSpecific from './FluenceSpecific';
import ObservationalFindings from './ObservationalFindings';
import ImpactOnFunctionalCommunication from './ImpactOnFunctionalCommunication';
import SeverityRating from './SeverityRating';
import ClinicalImpression from './ClinicalImpression';
import VoiceCaseHistory from './VoiceCaseHistory';
import BehavioralAndClinicalImpression from './BehavioralAndClinicalImpression';
import PerceptionAndVoiceAnalysis from './PerceptionAndVoiceAnalysis';
import AerodynamicAspects from './AerodynamicAspects';
import ImpactOnCommunication from './ImpactOnCommunication';
import VoiceFormalTools from './VoiceFormalTools';
import VoiceDiagnosticImpression from './VoiceDiagnosticImpression';
import ImpulseControl from './ImpulseControl';
import GSLSensoryProfile from './GSLSensoryProfile';
import GSLFormalTools from './ProvisionalDiagnosis copy';
import SSDDiagnosisImpression from './SSDDiagnosisImpression';
import SSDFormalAndInformalTools from './SSDFormalAndInformalTools';
import SpeechAndPhonology from './SpeechAndPhonology';
import AcousticAnalysis from './AcousticAnalysis';
import GeneralSpeechRecommendation from './GeneralSpeechRecommendation';
import CPRecommendations from './CPRecommendation';
import VoiceRecommendation from './VoiceRecommendation';
import FluencyRecommendation from './FluencyRecommendation';
import SSDRecommendations from './SSDRecommendation';
import CommunicationProfile from './CommunicationProfile';
import FluencyCharacteristics from './FluencyCharacterstics';
import AssociatedSecondaryBehavior from './AssociatedSecondaryBehavior';
import GSLCommunicationProfile from './GSLCommunicationProfile';
// import CommunicationProfile from './CommunicationProfile';

export const COMPONENT_MAP: Record<string, React.JSX.Element> = {
    '15': <PrenatalBirthHistory />,
    '16': <NeonatalHistory />,
    '17': <PostNatalHistory />,
    '18': <GrossMotorDevelopment />,
    '19': <DevelopmentalFineMotor />,
    '20': <LanguageDevelopment />,
    '21': <SocialDevelopment />,
    '32': <HomeEnvironment />,
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
    '135': <EquilibriumTest />,
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
    '151': <LanguageReceptive />,
    '152': <LanguageExpressive />,
    '153': <VisualPerception />,
    '154': <Writing />,
    '155': <FunctionalReading />,
    '156': <ReadingSkills />,
    '157': <MathematicalSkills />,
    '158': <BehavioralObservation />,
    '159': <GSLCommunicationProfile />,
    '160': <ImpulseControl />,
    '162': <GSLSensoryProfile />,
    '163': <GSLFormalTools />,
    '164': <DiagnosticFormulation />,
    '166': <ProvisionalDiagnosis />,
    '174': <FormalAndInformalTools />,
    '175': <DiagnosticImpression />,
    '176': <Recommendation />,
    '177': <MedicalDevelopmentalHistory />,
    '167': <GeneralSpeechRecommendation />,
    '168': <MedicalAndSurgicalHistory />,
    '169': <DevelopmentalMilestone />,
    '171': <SpeechAndArticulation />,
    '172': <ResonanceAndVoice />,
    '181': <AacAndAlternateModes />,
    '182': <CPFormalTools />,
    '183': <CPDiagnosticImpression />,
    '184': <CPProvisionalDiagnosis />,
    '185': <CPRecommendations />,
    '186': <FluenceSpecific />,
    '187': <ObservationalFindings />,
    '188': <FluencyCharacteristics />,
    '189': <AssociatedSecondaryBehavior />,
    '190': <ImpactOnFunctionalCommunication />,
    '192': <SeverityRating />,
    '193': <ClinicalImpression />,
    '194': <FluencyRecommendation />,
    '196': <VoiceCaseHistory />,
    '197': <AcousticAnalysis />,
    '195': <BehavioralAndClinicalImpression />,
    '198': <AerodynamicAspects />,
    '200': <ImpactOnCommunication />,
    '201': <VoiceFormalTools />,
    '202': <VoiceDiagnosticImpression />,
    '203': <VoiceRecommendation />,
    '204': <PerceptionAndVoiceAnalysis />,
    '205': <CommunicationProfile />,
    '206': <SpeechAndPhonology />,
    '208': <SSDFormalAndInformalTools />,
    '209': <SSDDiagnosisImpression />,
    '210': <SSDRecommendations />,
};
