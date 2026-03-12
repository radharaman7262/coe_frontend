'use client';

import { BasicDatePicker, Dropdown, Input, Text } from '@/components/index';
import { Textarea } from '@/components/ui/TextArea';

import { FontType } from '@/types/typographyCommon';

import { DUMMY_DATA, DRAWER_DATA as text } from './constant';

import styles from './styles.module.scss';

const ChildInformationData = () => (
    <div className={styles['container-wrapper']}>
        <div className={styles['drawer-form']}>
            <div className={styles['input-container']}>
                <Text
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    color='text-idle'
                    required
                >
                    {text.fullName}
                </Text>

                <Input name='fullName' placeholder='Enter Full Name' value='' />
            </div>

            <div className={styles['input-second-container']}>
                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
                    >
                        {text.gender}
                    </Text>

                    <Dropdown
                        label={text.selectGender}
                        options={DUMMY_DATA}
                        selectValue='value'
                        value={null}
                        isSearchable={false}
                    />
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.dateofbirth}
                    </Text>

                    <BasicDatePicker value={null} />
                </div>
            </div>

            <div className={styles['input-second-container']}>
                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                        required
                    >
                        {text.udiseCode}
                    </Text>
                    <Input name='udisecode' placeholder='Enter code' value='' />
                </div>

                <div className={styles['input-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.schoolName}
                    </Text>
                    <Input name='school' placeholder='School' value='' disable />
                </div>
            </div>

            <div className={styles['input-container']}>
                <Text
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    color='text-idle'
                    required
                >
                    {text.grade}
                </Text>
                <Dropdown
                    label={text.selectGender}
                    options={DUMMY_DATA}
                    selectValue='value'
                    value={null}
                    isSearchable={false}
                />
            </div>

            <div className={styles['text-container']}>
                <Text
                    font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                    color='text-idle'
                    required
                >
                    {text.difficultiesFaced}
                </Text>

                <Textarea
                    name='difficultiesFaced'
                    placeholder='Enter difficulties'
                    value=''
                    rows={4}
                />
            </div>
        </div>
    </div>
);

export default ChildInformationData;
