'use client';

import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';

import { NextImageSrc } from '@/types/typographyCommon';

type MyImageProps = Omit<ImageProps, 'src'> & {
    icon: NextImageSrc;
    fallBackImage?: NextImageSrc;
    priority?: boolean;
};

const ImageContainer = (props: MyImageProps) => {
    const { icon, fallBackImage, priority = false, className, ...all } = props;

    const [imgSrc, setImgSrc] = useState<NextImageSrc>(icon);
    const [cacheBust, setCacheBust] = useState('');

    useEffect(() => {
        setImgSrc(icon);
        setCacheBust(`?cb=${Date.now()}`);
    }, [icon]);

    const customLoader = ({ src }: { src: string }) => `${src}${cacheBust}`;

    const baseProps = {
        ...all,
        src: imgSrc,
        loader: customLoader,
        className,
        onError: () => setImgSrc(fallBackImage!),
    };

    if (priority) {
        return <Image {...baseProps} priority />;
    }

    if (typeof imgSrc === 'object' && imgSrc?.blurDataURL) {
        return (
            <Image
                {...baseProps}
                placeholder='blur'
                blurDataURL={imgSrc.blurDataURL}
                loading='lazy'
                width={500}
            />
        );
    }

    return <Image {...baseProps} loading='lazy' />;
};

export default React.memo(ImageContainer);
