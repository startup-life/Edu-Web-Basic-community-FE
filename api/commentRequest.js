import { getServerUrl } from '../utils/function.js';

export const deleteComment = (postId, commentId) => {
    const result = fetch(
        `${getServerUrl()}/posts/${postId}/comments/${commentId}`,
        {
            method: 'DELETE',
            credentials: 'include',
        },
    );
    return result;
};

export const updateComment = (postId, commentId, commentContent) => {
    const result = fetch(
        `${getServerUrl()}/posts/${postId}/comments/${commentId}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(commentContent),
        },
    );
    return result;
};
