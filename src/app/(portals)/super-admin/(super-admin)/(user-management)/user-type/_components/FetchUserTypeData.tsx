import UserTypePage from './index';

import { getUserTypeApiCall } from '../utils';

const FetchUserType = async () => {
    const userTypeResponse = await getUserTypeApiCall();

    const { response: userData } = userTypeResponse || {};

    return <UserTypePage userData={userData} />;
};

export default FetchUserType;
