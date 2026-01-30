import { getServerUrl } from '../utils/function.js';

export const getPost = postId => {
    const result = fetch(`${getServerUrl()}/posts/${postId}`, {
        credentials: 'include',
    });
    return result;
};

export const deletePost = async postId => {
    const result = await fetch(`${getServerUrl()}/posts/${postId}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    return result;
};

export const writeComment = async (pageId, comment) => {
    const result = await fetch(`${getServerUrl()}/posts/${pageId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ commentContent: comment }),
    });
    return result;
};

export const getComments = async postId => {
    const result = await fetch(`${getServerUrl()}/posts/${postId}/comments`, {
        credentials: 'include',
    });
    return result;
};
