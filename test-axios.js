const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(
    (config) => {
        if (config.url) {
            let [path, query] = config.url.split('?');
            if (path && !path.endsWith('/')) {
                path = `${path}/`;
            }
            
            const cb = `_cb=${Date.now()}`;
            query = query ? `${query}&${cb}` : cb;
            
            config.url = `${path}?${query}`;
        }
        return config;
    }
);

async function test() {
    try {
        const res = await api.get('/products', { params: { limit: 10 } });
        console.log('Success!', res.status, res.config.url);
    } catch (e) {
        console.error('Error:', e.message);
    }
}

test();
