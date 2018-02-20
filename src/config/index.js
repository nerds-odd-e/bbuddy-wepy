export const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const hosts = {
  dev: 'http://localhost:3000/',
  prod: 'https://prod.com'
}

export const HOST = hosts[env]
