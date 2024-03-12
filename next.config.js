/** @type {import('next').NextConfig} */
module.exports = {
    output: "standalone",
    headers: [
        {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_APP_URL,
        }
    ]
};