/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'plwxqabxgatpxdfamdxu.supabase.co',
            port: '',
          },
        ],
      },
    
}

module.exports = nextConfig
