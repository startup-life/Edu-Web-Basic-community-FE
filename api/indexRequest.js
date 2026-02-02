import { getServerUrl } from '../utils/function.js';
import { requestJson } from '../utils/request.js';

export const getPosts = (offset, limit) => {
    const result = requestJson(
        `${getServerUrl()}/v1/posts?offset=${offset}&limit=${limit}`,
        {
            credentials: 'include',
        },
    );
    return result;
};
