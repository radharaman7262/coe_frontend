'use client';

import { useState } from 'react';

import styles from './styles.module.scss';

type FieldKey =
    | 'sittingToStanding'
    | 'standingToSitting'
    | 'transfers'
    | 'standingUnsupported'
    | 'sittingUnsupported'
    | 'standingEyesClosed'
    | 'standingFeetTogether'
    | 'standingFootInFront'
    | 'standingOneFoot'
    | 'turning360'
    | 'turningLookBehind'
    | 'retrievingObject'
    | 'placingFootOnStool'
    | 'reachingForward';

type FieldData = {
    score: number | '';
    seconds: number | '';
    comments: string;
};

type FormState = Record<FieldKey, FieldData>;

const INITIAL_STATE: FormState = {
    sittingToStanding: { score: '', seconds: '', comments: '' },
    standingToSitting: { score: '', seconds: '', comments: '' },
    transfers: { score: '', seconds: '', comments: '' },
    standingUnsupported: { score: '', seconds: '', comments: '' },
    sittingUnsupported: { score: '', seconds: '', comments: '' },
    standingEyesClosed: { score: '', seconds: '', comments: '' },
    standingFeetTogether: { score: '', seconds: '', comments: '' },
    standingFootInFront: { score: '', seconds: '', comments: '' },
    standingOneFoot: { score: '', seconds: '', comments: '' },
    turning360: { score: '', seconds: '', comments: '' },
    turningLookBehind: { score: '', seconds: '', comments: '' },
    retrievingObject: { score: '', seconds: '', comments: '' },
    placingFootOnStool: { score: '', seconds: '', comments: '' },
    reachingForward: { score: '', seconds: '', comments: '' },
};

const FIELD_LABELS: Record<FieldKey, string> = {
    sittingToStanding: 'Sitting to standing',
    standingToSitting: 'Standing to sitting',
    transfers: 'Transfers',
    standingUnsupported: 'Standing unsupported',
    sittingUnsupported: 'Sitting unsupported',
    standingEyesClosed: 'Standing with eyes closed',
    standingFeetTogether: 'Standing with feet together',
    standingFootInFront: 'Standing with one foot in front',
    standingOneFoot: 'Standing on one foot',
    turning360: 'Turning 360 degrees',
    turningLookBehind: 'Turning to look behind',
    retrievingObject: 'Retrieving object from floor',
    placingFootOnStool: 'Placing alternate foot on stool',
    reachingForward: 'Reaching forward with outstretched arm',
};

const SCORE_OPTIONS = [0, 1, 2, 3, 4];

const BalanceForm = () => {
    const [form, setForm] = useState<FormState>(INITIAL_STATE);

    const handleChange = (key: FieldKey, field: keyof FieldData, value: string) => {
        setForm((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: field === 'comments' ? value : value === '' ? '' : Number(value),
            },
        }));
    };

    const totalScore = Object.values(form).reduce(
        (acc, curr) => acc + (typeof curr.score === 'number' ? curr.score : 0),
        0,
    );

    const percentage = Math.round((totalScore / (14 * 4)) * 100);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                BALANCE
                <span>Pediatric Balance Scale (0–4)</span>
            </div>

            <div className={styles.sectionTitle}>Lower Extremity</div>

            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <div>Description</div>
                    <div>Score (0–4)</div>
                    <div>Seconds/Opto</div>
                    <div>Comments</div>
                </div>

                {Object.keys(form).map((key) => {
                    const k = key as FieldKey;

                    return (
                        <div key={k} className={styles.row}>
                            <div className={styles.label}>{FIELD_LABELS[k]}</div>

                            <select
                                value={form[k].score}
                                onChange={(e) => handleChange(k, 'score', e.target.value)}
                            >
                                <option value=''>Select</option>
                                {SCORE_OPTIONS.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>

                            <input
                                type='number'
                                placeholder='Enter here'
                                value={form[k].seconds}
                                onChange={(e) => handleChange(k, 'seconds', e.target.value)}
                            />

                            <input
                                type='text'
                                placeholder='Enter here'
                                value={form[k].comments}
                                onChange={(e) => handleChange(k, 'comments', e.target.value)}
                            />
                        </div>
                    );
                })}

                <div className={styles.footer}>
                    <div>Total Score</div>
                    <div>{totalScore}</div>
                    &nbsp;
                    <div>{percentage}%</div>
                </div>
            </div>
        </div>
    );
};

export default BalanceForm;
