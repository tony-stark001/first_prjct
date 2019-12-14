module.exports = {
  apps: [{
    name: 'app',
    script: 'bin/www',
    watch: true,
    autorestart: true,
    restart_delay : 2000,
    ignore_watch: ['./logs'],
    log_date_format: 'YYYY-MM-DD HH:MM:SS',
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    env: {
      NODE_ENV: 'development',
      PORT: 4500
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8443
    }
  }]
};