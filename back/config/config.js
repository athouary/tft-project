import config from './config.json'

if (typeof config.SERVER_PORT !== 'number') {
  console.error('Config Loader - "PORT" should be a valid number.')
}

export default config
