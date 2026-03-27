export interface RadioGroupProps {
    section: keyof FormState;
    field: string;
    options: string[];
    value?: string;
    onChange: (section: keyof FormState, field: string, value: string) => void;
}

type Option = string;

export interface FormState {
    structure: Record<string, Option>;
    function: Record<string, Option>;
    vegetativeSkills: Record<string, Option>;
}
