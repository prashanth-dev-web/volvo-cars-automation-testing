export const serverConfig = {
  // hostname: process.env.HUB_HOST || '192.168.64.7',
  hostname: process.env.HUB_HOST || 'localhost',
  // port: parseInt(process.env.HUB_PORT, 10) || 32137,
  port: parseInt(process.env.HUB_PORT, 10) || 4444,
  // path: '/wd/hub',
  // protocol: 'http',
};
