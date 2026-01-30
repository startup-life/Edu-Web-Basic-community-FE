import { getServerUrl } from '../utils/function.js';

export const changePassword = async (userId, password) => {
    const result = fetch(`${getServerUrl()}/users/${userId}/password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            password,
        }),
    });
    return result;
};
