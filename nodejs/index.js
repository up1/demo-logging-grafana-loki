const tracer = require("./tracer")("pricing-service");
const api = require('@opentelemetry/api');
const pino = require('pino');
const pinoLoki = require('pino-loki');

const transport = pino.transport < pinoLoki.LokiTransportOptions > ({
  target: "pino-loki",
  options: {
    batching: true,
    interval: 5,
    host: 'https://loki:3100',
  },
});
const logger = pino(transport);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // Get trace and span from current trace
  let current_span = api.trace.getSpan(api.context.active());
  let trace_id = current_span.spanContext().traceId;
  let span_id = current_span.spanContext().spanId;
  // Write log
  logger.error({ service: 'demo-service', "trace_id": trace_id, "span_id": span_id });

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`)
})
