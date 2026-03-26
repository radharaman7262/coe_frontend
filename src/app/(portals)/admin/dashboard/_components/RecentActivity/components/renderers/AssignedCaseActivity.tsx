import { Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';
import { getRandomColor } from '@/constant/appConstants';
import { ACTIVITY_TEXT as text } from '../../constant';
import { Assigned } from '../../type';
import styles from '../../styles.module.scss';

const formatDate = (date?: string) => date?.split('T')[0];

const getSpecializations = (list?: { SpecializationName: string }[]) =>
    list?.map((s) => s.SpecializationName).join(', ');

interface AssignedCaseActivityProps {
    item: Assigned;
}

const AssignedCaseActivity = (props: AssignedCaseActivityProps) => {
    const { item } = props;

    return (
        <div className={styles['instruction-aligned']}>
            <hr
                className={styles['hr-instruction-line']}
                style={{ backgroundColor: getRandomColor() }}
            />
            <div>
                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-900'>
                    {text.studentCaseAssigned}&nbsp;
                </Text>

                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-400'>
                    {`${item?.fromUsername} assigned (${getSpecializations(
                        item?.fromUserSpecialization,
                    )}) ${item?.studentName} to ${item?.toUsername} (${getSpecializations(
                        item?.toUserSpecialization,
                    )}) at ${formatDate(item?.dateTime)}`}
                </Text>
            </div>
        </div>
    );
};

export default AssignedCaseActivity;
