import { JSX } from 'react';

export type TagType = keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label'
>;

/**
 * Image src type
 */
export type NextImageSrc =
    | {
          src: string;
          height: number;
          width: number;
          blurDataURL?: string;
      }
    | string;

export enum FontType {
    // ===== DISPLAY 2XL =====
    'display_Desktop_2xl_regular' = 'display_Desktop_2xl_regular',
    'display_Desktop_2xl_medium' = 'display_Desktop_2xl_medium',
    'display_Desktop_2xl_semibold' = 'display_Desktop_2xl_semibold',
    'display_Desktop_2xl_bold' = 'display_Desktop_2xl_bold',

    // ===== DISPLAY XL =====
    'display_Desktop_xl_regular' = 'display_Desktop_xl_regular',
    'display_Desktop_xl_medium' = 'display_Desktop_xl_medium',
    'display_Desktop_xl_semibold' = 'display_Desktop_xl_semibold',
    'display_Desktop_xl_bold' = 'display_Desktop_xl_bold',

    // ===== DISPLAY XLG =====
    'display_Desktop_xlg_regular' = 'display_Desktop_xlg_regular',
    'display_Desktop_xlg_medium' = 'display_Desktop_xlg_medium',
    'display_Desktop_xlg_semibold' = 'display_Desktop_xlg_semibold',
    'display_Desktop_xlg_bold' = 'display_Desktop_xlg_bold',

    // ===== DISPLAY LG =====
    'display_Desktop_lg_regular' = 'display_Desktop_lg_regular',
    'display_Desktop_lg_medium' = 'display_Desktop_lg_medium',
    'display_Desktop_lg_semibold' = 'display_Desktop_lg_semibold',
    'display_Desktop_lg_bold' = 'display_Desktop_lg_bold',

    // ===== DISPLAY MD =====
    'display_Desktop_xmd_regular' = 'display_Desktop_xmd_regular',
    'display_Desktop_xmd_medium' = 'display_Desktop_xmd_medium',
    'display_Desktop_xmd_semibold' = 'display_Desktop_xmd_semibold',
    'display_Desktop_xmd_bold' = 'display_Desktop_xmd_bold',

    // ===== DISPLAY MD =====
    'display_Desktop_md_regular' = 'display_Desktop_md_regular',
    'display_Desktop_md_medium' = 'display_Desktop_md_medium',
    'display_Desktop_md_semibold' = 'display_Desktop_md_semibold',
    'display_Desktop_md_bold' = 'display_Desktop_md_bold',

    // ===== DISPLAY SM =====
    'display_Desktop_sm_regular' = 'display_Desktop_sm_regular',
    'display_Desktop_sm_medium' = 'display_Desktop_sm_medium',
    'display_Desktop_sm_semibold' = 'display_Desktop_sm_semibold',
    'display_Desktop_sm_bold' = 'display_Desktop_sm_bold',

    // ===== TEXT XXL =====
    'text_xxl_regular' = 'text_xxl_regular',
    'text_xxl_medium' = 'text_xxl_medium',
    'text_xxl_semibold' = 'text_xxl_semibold',
    'text_xxl_bold' = 'text_xxl_bold',

    // ===== TEXT XL =====
    'text_xl_regular' = 'text_xl_regular',
    'text_xl_medium' = 'text_xl_medium',
    'text_xl_semibold' = 'text_xl_semibold',
    'text_xl_bold' = 'text_xl_bold',

    // ===== TEXT LG =====
    'text_lg_regular' = 'text_lg_regular',
    'text_lg_medium' = 'text_lg_medium',
    'text_lg_semibold' = 'text_lg_semibold',
    'text_lg_bold' = 'text_lg_bold',

    // ===== TEXT MD =====
    'text_md_regular' = 'text_md_regular',
    'text_md_medium' = 'text_md_medium',
    'text_md_semibold' = 'text_md_semibold',
    'text_md_bold' = 'text_md_bold',

    // ===== TEXT SM =====
    'text_sm_regular' = 'text_sm_regular',
    'text_sm_medium' = 'text_sm_medium',
    'text_sm_semibold' = 'text_sm_semibold',
    'text_sm_bold' = 'text_sm_bold',

    // ===== TEXT XS =====
    'text_xs_regular' = 'text_xs_regular',
    'text_xs_medium' = 'text_xs_medium',
    'text_xs_semibold' = 'text_xs_semibold',
    'text_xs_bold' = 'text_xs_bold',

    // ===== TEXT XXS =====
    'text_xxs_regular' = 'text_xxs_regular',
    'text_xxs_medium' = 'text_xxs_medium',
    'text_xxs_semibold' = 'text_xxs_semibold',
    'text_xxs_bold' = 'text_xxs_bold',
}

export type ColorVariant =
    // ===== BASE =====
    | 'white'
    | 'black'

    // ===== PRIMARY =====
    | 'primary-nav-link'
    | 'primary-cta'
    | 'primary-cta-disable'

    // ===== TEXT =====
    | 'text-gray-900'
    | 'text-idle'
    | 'text-highlight'
    | 'text-cta-1'
    | 'text-cta-2'
    | 'text-cta-3'

    // ===== WIDGET =====
    | 'widget-pink'
    | 'widget-blue'
    | 'widget-green'
    | 'widget-orange'

    // ===== BACKGROUND =====
    | 'bg-gray'

    // ===== BADGE =====
    | 'badge-error'
    | 'badge-warning'
    | 'badge-success'
    | 'badge-info'
    | 'badge-neutral'
    | 'badge-dark'

    // ===== MISC =====
    | 'bar-graph'

    // ===== BLUE SCALE =====
    | 'blue-0'
    | 'blue-100'
    | 'blue-200'
    | 'blue-300'
    | 'blue-400'
    | 'blue-500'
    | 'blue-600'
    | 'blue-700'
    | 'blue-800'
    | 'blue-900'

    // ===== GREEN SCALE =====
    | 'green-0'
    | 'green-100'
    | 'green-200'
    | 'green-300'
    | 'green-400'
    | 'green-500'
    | 'green-600'
    | 'green-700'
    | 'green-800'
    | 'green-900'

    // ===== PURPLE SCALE =====
    | 'purple-0'
    | 'purple-100'
    | 'purple-200'
    | 'purple-300'
    | 'purple-400'
    | 'purple-500'
    | 'purple-600'
    | 'purple-700'
    | 'purple-800'
    | 'purple-900'

    // ===== RED SCALE =====
    | 'red-0'
    | 'red-100'
    | 'red-200'
    | 'red-300'
    | 'red-400'
    | 'red-500'
    | 'red-600'
    | 'red-700'
    | 'red-800'
    | 'red-900'

    // ===== ORANGE SCALE =====
    | 'orange-0'
    | 'orange-100'
    | 'orange-200'
    | 'orange-300'
    | 'orange-400'
    | 'orange-500'
    | 'orange-600'
    | 'orange-700'
    | 'orange-800'
    | 'orange-900'

    // ===== YELLOW SCALE =====
    | 'yellow-50'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'yellow-400'
    | 'yellow-500'
    | 'yellow-600'
    | 'yellow-700'
    | 'yellow-800'
    | 'yellow-900'

    // ===== GRAY SCALE =====
    | 'gray-50'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'text-gray'
    | 'text-bg-gray'
    | 'border-text-gray'
    | 'neutral-gray'
    | 'indigo-50'
    | 'indigo-blue';

/**
 * Button Variant
 */
export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINED = 'outline',
    NORMAL = 'normal',
    DISABLE = 'disable',
    PAGINATION = 'pagination',
    DISABLE_PAGINATION = 'disablePagination',
    REPORT_DOWNLOAD_BUTTON = 'reportDownloadButton',
    WARN = 'warn',
}
