const pino = require('pino');
const pinoLoki = require('pino-loki');

const transport = pino.transport<pinoLoki.LokiTransportOptions>({
  target: "pino-loki",
  options: {
    batching: true,
    interval: 5,
    host: 'https://loki:3100',
  },
});

const logger = pino(transport);
for (i = 0; i < 10; i++) {
    logger.error({ counter: i, service: 'demo-service' })
}
