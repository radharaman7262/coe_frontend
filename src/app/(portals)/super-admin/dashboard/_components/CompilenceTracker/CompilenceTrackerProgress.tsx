import { Text } from '@/components/index';
import LinearProgressBar from '@/components/shared/LinearProgressBar';
import { FontType } from '@/types/typographyCommon';
import styles from './styles.module.scss';
import { DashboardTrackerData } from './type';

interface CompilenceTrackerProgressProps {
    item: DashboardTrackerData;
}

const CompilenceTrackerProgress = (props: CompilenceTrackerProgressProps) => {
    const { item } = props;

    const progress =
        item?.numberOfStudentTotalAdded > 0
            ? Math.min((item.numberOfStudentScreened / item.numberOfStudentTotalAdded) * 100, 100)
            : 0;

    return (
        <div key={item?.id} className={styles['tracker-row']}>
            <div className={styles['row-header']}>
                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-900'>
                    {item?.center}
                </Text>

                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-900'>
                    {item?.numberOfStudentScreened} of {item?.numberOfStudentTotalAdded}
                </Text>
            </div>

            <LinearProgressBar progress={progress} />
        </div>
    );
};

export default CompilenceTrackerProgress;
