import { Text } from '@/components/index';

import { FontType } from '@/types/typographyCommon';

import { getRandomColor } from '@/constant/appConstants';

import { ACTIVITY_TEXT as text } from '../../constant';

import { NewUserAdded } from '../../type';

import styles from '../../styles.module.scss';

interface NewUserActivityProps {
    item: NewUserAdded;
}

const formatDate = (date?: string) => date?.split('T')[0];

const getSpecializations = (list?: { SpecializationName: string }[]) =>
    list?.map((s) => s.SpecializationName).join(', ');

const NewUserActivity = (props: NewUserActivityProps) => {
    const { item } = props;

    return (
        <div className={styles['instruction-aligned']}>
            <hr
                className={styles['hr-instruction-line']}
                style={{ backgroundColor: getRandomColor() }}
            />
            <div>
                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-900'>
                    {text.newUserAdded}&nbsp;
                </Text>

                <Text font={[FontType.text_xs_medium, FontType.text_xs_medium]} color='gray-400'>
                    {`${item?.name} (${getSpecializations(
                        item?.specialization,
                    )}) at ${formatDate(item?.dateTime)}`}
                </Text>
            </div>
        </div>
    );
};

export default NewUserActivity;
