/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image domains configuration
  images: {
    domains: [
      "images.unsplash.com",
      "diaitzhiuookikyffbgt.supabase.co",
      process.env.NEXT_PUBLIC_SUPABASE_URL ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname : "diaitzhiuookikyffbgt.supabase.co"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/**',
      },
    ],
  },
  
  // Remove the experimental.ppr setting
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tanstack/react-query': require.resolve('@tanstack/react-query')
    };
    return config;
  },
  // Properly handle environment variables
  serverRuntimeConfig: {
    // Will only be available on the server side
    THIRDWEB_SECRET_KEY: process.env.THIRDWEB_SECRET_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_SWING_PROJECT_ID: process.env.NEXT_PUBLIC_SWING_PROJECT_ID,
    NEXT_PUBLIC_THIRDWEB_RPC_URL: process.env.NEXT_PUBLIC_THIRDWEB_RPC_URL
  },
  
  // Extend timeout for static generation
  staticPageGenerationTimeout: 180,
  
  // Instead of PPR, use this to make all routes dynamic
  output: 'standalone'
};

// Use CommonJS export format instead of ES Module format in Next.js config
module.exports = nextConfig;