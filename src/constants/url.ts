const baseUrl = 'https://dummyjson.com';

export const urls = {
    allUsers: baseUrl + '/users',
    posts: baseUrl + '/posts',
    getCartUser: (id: number) => {
        return baseUrl + '/carts/' + id;
    }
}