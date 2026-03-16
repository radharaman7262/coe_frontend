import { Suspense } from 'react';

import { ShimmerUiContainer } from '@/components/index';
import FetchPsychologistDashboard from './_components/FetchPsychologistData';

const PsychologistDashboard = () => (
    <Suspense fallback={<ShimmerUiContainer />}>
        <FetchPsychologistDashboard />
    </Suspense>
);

export default PsychologistDashboard;
