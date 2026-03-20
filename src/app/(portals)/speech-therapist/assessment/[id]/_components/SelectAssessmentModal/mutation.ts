'use client';

import { useMutation } from '@tanstack/react-query';

import { postSelectAssessment } from './util';

export const usePostSelectAssessment = () =>
    useMutation({
        mutationFn: postSelectAssessment,
    });
