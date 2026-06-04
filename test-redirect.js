const http = require('http');

function checkRedirect(path) {
    return new Promise((resolve) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            console.log(`GET ${path} -> ${res.statusCode} ${res.headers.location || ''}`);
            resolve();
        }).on('error', (e) => {
            console.error(`Error ${path}:`, e.message);
            resolve();
        });
    });
}

async function main() {
    await checkRedirect('/api/products');
    await checkRedirect('/api/products/');
    await checkRedirect('/api/products/?limit=10');
    await checkRedirect('/api/products?limit=10');
}

main();
