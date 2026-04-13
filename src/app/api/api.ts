import { Dayjs } from 'dayjs';

export type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};

export type QueryParamType = { [key: string]: string | null };

type callApiArgs = {
    url: string;
    method: METHOD;
    headers?: unknown;
    body?:
        | {
              [key: string]:
                  | null
                  | string
                  | number
                  | boolean
                  | number[]
                  | string[]
                  | undefined
                  | FileList
                  | FileList[]
                  | Dayjs
                  | Record<string, string | number>[]
                  | Record<string, string | boolean | number>;
          }
        | FormData;
    queryParams?: QueryParamType;
    downloadFile?: boolean;
};

const callApi = (args: callApiArgs) => {
    const { url, method, headers, body, queryParams, downloadFile } = args;

    const queryString = queryParams
        ? `?${Object.entries(queryParams)
              .map(([key, value]) => `${key}=${value}`)
              .join('&')}`
        : '';

    const newUrl = url + queryString;
    // added ? operator to handle the SSR scenario where document is not defined

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
        method,
        headers: {
            ...HEADERS,
        },
    };

    if (headers) {
        options.headers = {
            ...options.headers,
            ...headers,
        };
    }

    if (body) {
        if (body instanceof FormData) {
            options.body = body;
            // Let the browser set the correct Content-Type header for FormData
            delete options.headers['Content-Type'];
        } else {
            options.body = JSON.stringify(body);
        }
    }

    return fetch(newUrl, options).then(
        (response) => (downloadFile ? response.blob() : response.json()),
        (err) => console.error('err', err),
    );
};

export default callApi;
