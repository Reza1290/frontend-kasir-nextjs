/** @type {import('next').NextConfig} */
module.exports = {
    output: "standalone",
    headers: [
        {
            key: 'Access-Control-Allow-Origin',
            value: "*",
        }
    ],
    eslint:{
        ignoreDuringBuilds: true,
    }
};