import React from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import { ZERO_DATA } from '@/constant/appConstants';

import { goalTrackerType } from '../type';
import { COLUMNS } from './constant';

import styles from './styles.module.scss';

interface goalsSubgoalsType {
    studentGoalSubGoalList: goalTrackerType[];
}

const GoalsSubgoals = (props: goalsSubgoalsType) => {
    const { studentGoalSubGoalList } = props;

    const hasData = studentGoalSubGoalList?.length > ZERO_DATA;

    return (
        <div>
            <div>
                <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                    Goals & Subgoals Tracker
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
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color='black'
                        >
                            There is no goals added yet. Be the first one to add goal for the
                            student.
                        </Text>
                    </div>
                ) : (
                    <SmallTableBody
                        columns={COLUMNS}
                        data={studentGoalSubGoalList}
                        headerClassName={styles['header-className']}
                        headerBaseClass={styles.headerBaseClass}
                        smallTableClass={styles['small-table-class']}
                    />
                )}
            </div>
        </div>
    );
};

export default GoalsSubgoals;
