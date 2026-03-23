export const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

export const NO_LEADING_SPACES_REGEX = /^\s+/;

export const USER_TYPE_REGEX = /^[A-Za-z\s]*$/;

export const ALPHA_NUMERIC_REGEX = /^(?=.*[a-zA-Z])[a-zA-Z ]{3,30}$/;

export const MOBILE_NUMBER_REGEX = /^[6-9]\d{9}$/;

export const MOBILE_INPUT_REGEX = /^\d{0,10}$/;

export const NAME_REGEX = /^(?=.{3,20}$)[A-Za-z]+(?: [A-Za-z]+)*$/;

export const CENTER_NAME_REGEX = /^(?=.{3,30}$)[A-Za-z]+(?: [A-Za-z]+)*$/;

export const UDISE_CODE_REGEX = /^\d{11}$/;

export const ADDRESS_CODE_REGEX = /^[a-zA-Z0-9\s,./#'()-]{5,}$/;
