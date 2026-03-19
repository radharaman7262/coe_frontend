import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';
// import FetchSpeechTherapistDashboard from './_components/FetchSpeechTherapistData';
import FetchSpecialEducatorDashboard from '../../specialist/dashboard/_components/FetchSpecialEducatorData';

const SpeechTherapistDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer />}>
        <FetchSpecialEducatorDashboard />
    </Suspense>
);

export default SpeechTherapistDashboard;
