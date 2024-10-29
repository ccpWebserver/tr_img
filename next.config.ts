/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    END_POINT: process.env.END_POINT,
  },
  compress: true,
  output: 'standalone',
};

export default nextConfig;
