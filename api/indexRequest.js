import { getServerUrl } from '../utils/function.js';

export const getPosts = (offset, limit) => {
    const result = fetch(
        `${getServerUrl()}/posts?offset=${offset}&limit=${limit}`,
        {
            credentials: 'include',
        },
    );
    return result;
};
