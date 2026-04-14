import { getRoleMasterTypeApiCall } from '../utils';

import RoleMasterPage from './index';

const FetchRoleMaster = async () => {
    const roleMasterResponse = await getRoleMasterTypeApiCall();

    const { response: roleMasterData } = roleMasterResponse || {};

    return <RoleMasterPage roleMasterData={roleMasterData} />;
};

export default FetchRoleMaster;
