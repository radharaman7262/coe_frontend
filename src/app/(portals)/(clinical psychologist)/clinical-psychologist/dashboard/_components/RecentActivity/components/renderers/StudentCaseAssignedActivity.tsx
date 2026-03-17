import { Text } from '@/components/index';
import { FontType } from '@/types/typographyCommon';
import { ACTIVITY_TEXT as text } from '../../constant';
import { StudentCaseAssigned } from '../../type';

const formatDate = (date?: string) => date?.split('T')[0];

const getSpecializations = (list?: { SpecializationName: string }[]) =>
    list?.map((s) => s.SpecializationName).join(', ');

interface StudentCaseAssignedActivityProps {
    item: StudentCaseAssigned;
}

const StudentCaseAssignedActivity = (props: StudentCaseAssignedActivityProps) => {
    const { item } = props;

    return (
        <div>
            <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-900'>
                {text.studentCaseAssigned}&nbsp;
            </Text>

            <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-400'>
                {`${item?.fromUsername} linked to (${getSpecializations(
                    item?.fromUserSpecialization,
                )}) ${item?.studentName} to ${item?.toUsername} (${getSpecializations(
                    item?.toUserSpecialization,
                )}) at ${formatDate(item?.dateTime)}`}
            </Text>
        </div>
    );
};

export default StudentCaseAssignedActivity;
