import React from 'react';

import { Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';
import { studentRemarkType } from '../type';

interface remarkAndNotesData {
    studentRemarkList: studentRemarkType[];
}

const RemarkAndNotes = (props: remarkAndNotesData) => {
    const { studentRemarkList } = props;

    return (
        <div className={styles['remark-container-wrap']}>
            <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                Remarks & Notes
            </Text>

            <div className={styles['container-wrapper']}>
                {studentRemarkList?.length > 0 ? (
                    studentRemarkList?.map((item) => (
                        <div className={styles['text-wrap']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='text-cta-3'
                            >
                                {`${item?.createdDate} By ${item?.user}`}
                            </Text>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='black'
                            >
                                {item?.remarks}
                            </Text>
                        </div>
                    ))
                ) : (
                    <div className={styles['no-data-found']}>
                        <Text
                            font={[FontType.text_lg_medium, FontType.text_lg_medium]}
                            color='black'
                        >
                            No Data Found
                        </Text>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RemarkAndNotes;
