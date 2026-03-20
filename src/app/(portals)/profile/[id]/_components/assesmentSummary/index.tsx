import React, { useMemo } from 'react';

import { SmallTableBody, Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';
import { ZERO_DATA } from '@/constant/appConstants';

import PdfIcon from '@public/assets/svg/pdf-icon.svg';
import EyeIcon from '@public/assets/svg/small-icon.svg';
import DownloadIcon from '@public/assets/svg/download-orange.svg';

import { ASSESSMENT_SUMMARY_TEXT, COLUMNS } from './constant';
import { studentAssesmentType } from '../type';

import styles from './styles.module.scss';

interface studentAssesmentListData {
    studentAssesmentList: studentAssesmentType[];
}

const AssesmentSummary = (props: studentAssesmentListData) => {
    const { studentAssesmentList } = props;

    const getAssessmentList = (results: studentAssesmentType[]) => {
        const data = results?.map((item: studentAssesmentType) => ({
            ...item,
            assessmentType: (
                <div className={styles['assessment-type']}>
                    <PdfIcon />
                    <div className={styles['assessment-text-wrap']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='black'
                        >
                            {item?.assessmentType}
                        </Text>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='blue-500'
                        >
                            {ASSESSMENT_SUMMARY_TEXT.BY}{' '}
                            {item?.user || ASSESSMENT_SUMMARY_TEXT.FALLBACK_USER}
                        </Text>
                    </div>
                </div>
            ),
            assessmentDate: item?.assessmentDate,
            view: (
                <div className={styles['action-icon']}>
                    <EyeIcon />
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {ASSESSMENT_SUMMARY_TEXT.VIEW}
                    </Text>
                </div>
            ),
            report: (
                <div className={styles['action-icon']}>
                    <DownloadIcon />
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-cta-3'
                    >
                        {ASSESSMENT_SUMMARY_TEXT.DOWNLOAD}
                    </Text>
                </div>
            ),
        }));

        return data;
    };

    const finalUpAssesmentList = useMemo(
        () => getAssessmentList(studentAssesmentList),
        [studentAssesmentList],
    );

    const hasData = finalUpAssesmentList?.length > ZERO_DATA;

    return (
        <div className={styles['assesment-summary-container']}>
            <div>
                <Text font={[FontType.text_md_bold, FontType.text_md_bold]} color='black'>
                    {ASSESSMENT_SUMMARY_TEXT.TITLE}
                </Text>
            </div>

            <div className={styles['assesment-table-wrap']}>
                {!hasData ? (
                    <div className={styles['no-data']}>
                        <Text
                            font={[FontType.text_lg_medium, FontType.text_lg_medium]}
                            color='black'
                        >
                            {ASSESSMENT_SUMMARY_TEXT.NO_DATA}
                        </Text>
                    </div>
                ) : (
                    <SmallTableBody
                        columns={COLUMNS}
                        data={finalUpAssesmentList}
                        headerClassName={styles['header-className']}
                        headerBaseClass={styles.headerBaseClass}
                        smallTableClass={styles['small-table-class']}
                    />
                )}
            </div>
        </div>
    );
};

export default AssesmentSummary;
