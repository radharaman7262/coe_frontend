import { Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

type Props = {
    criteria: string[];
};

const ScoringCriteria = (props: Props) => {
    const { criteria } = props;

    return (
        <div className={styles.container}>
            <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]} color='deep-purple'>
                Scoring Criteria:
            </Text>
            <Text tagType='div' className={styles.criteria}>
                {criteria.map((item, index) => (
                    <Text
                        tagType='span'
                        font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                        key={index as number}
                    >
                        {item}
                        {index !== criteria.length - 1 && ', '}
                    </Text>
                ))}
            </Text>
        </div>
    );
};

export default ScoringCriteria;
