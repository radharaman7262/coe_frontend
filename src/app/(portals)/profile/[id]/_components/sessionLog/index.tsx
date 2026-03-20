import React, { useMemo } from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';

import ViewMove from '@public/assets/svg/chevron-right.svg';

import { COLUMNS } from './constant';

import { sessionLogType } from '../type';

import styles from './styles.module.scss';

interface sessionlogTableType {
    studentSessionList: sessionLogType[];
}

const SessionLogTable = (props: sessionlogTableType) => {
    const { studentSessionList } = props;

    const getSessionLogList = (results: sessionLogType[]) => {
        const data = results?.map((item: sessionLogType) => ({
            ...item,
            action: (
                <div className={styles['action-icon']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        View
                    </Text>
                    <ViewMove />
                </div>
            ),
        }));

        return data;
    };

    const finalSessionLogtList = useMemo(
        () => getSessionLogList(studentSessionList),
        [studentSessionList],
    );

    const hasData = studentSessionList?.length > ZERO_DATA;

    return (
        <div>
            <div>
                <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                    Session Log
                </Text>
            </div>

            <div className={styles['assesment-table-wrap']}>
                {!hasData ? (
                    <div className={styles['no-data']}>
                        <Text
                            font={[FontType.text_lg_medium, FontType.text_lg_medium]}
                            color='black'
                        >
                            No Data Yet !!!
                        </Text>
                    </div>
                ) : (
                    <SmallTableBody
                        columns={COLUMNS}
                        data={finalSessionLogtList}
                        headerClassName={styles['header-className']}
                        headerBaseClass={styles.headerBaseClass}
                        smallTableClass={styles['small-table-class']}
                    />
                )}
            </div>
        </div>
    );
};

export default SessionLogTable;
