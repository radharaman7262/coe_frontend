import React from 'react';

export interface getCenterSetupListType {
    address: string;
    adminId: string;
    centerAdmin: string;
    centerId: string;
    email: string;
    name: string;
    phone: string;
    status: number | React.JSX.Element;
    edit?: React.JSX.Element;
}
