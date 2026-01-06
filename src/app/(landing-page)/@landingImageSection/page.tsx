'use client';

import React from 'react';

import { ImageContainer, Text } from '@/components';

import { FontType } from '@/types/typographyCommon';

import LandingPageImage from '@/public/assets/png/landing/landing-page.png';

import { LANDING_IMAGE_TEXT as title } from './constant';

import styles from './styles.module.scss';

const LandingImageSection = () => (
    <div className={styles['hero-wrapper']}>
        <ImageContainer
            icon={LandingPageImage}
            alt='Landing page image'
            fill
            priority
            className={styles['hero-image']}
        />

        <div className={styles['hero-content']}>
            <Text
                font={[FontType.display_Desktop_xlg_bold, FontType.display_Desktop_xlg_bold]}
                color='white'
            >
                {title.mothersGrace}
            </Text>

            <div className={styles['tagline-text']}>
                <Text font={[FontType.text_lg_regular, FontType.text_lg_regular]} color='white'>
                    {title.onePlatform}
                </Text>
            </div>

            <div className={styles['description-text']}>
                <Text font={[FontType.text_md_regular, FontType.text_md_regular]} color='white'>
                    {title.manageStudent}
                </Text>
            </div>
        </div>
    </div>
);

export default LandingImageSection;
