# Workshop Observability
* Centralized log with Distributed tracing
  * Docker logging
    * Go
    * NodeJS
  * Grafana Loki
  * Promtail agent
    * Ship the content of local logs to Grafana Loki
  * Grafana

## Step 1 :: Create Centralized log system

### [Grafana Loki](https://grafana.com/oss/loki/)
```
$docker compose up -d loki
$docker compose ps
```

### [Promtail agent](https://grafana.com/docs/loki/latest/send-data/promtail/)
```
$docker compose up -d promtail
$docker compose ps
```

### [Grafana](https://grafana.com/)
```
$docker compose up -d grafana
$docker compose ps
```

Go to grafana dahsboard :: http://localhost:3000/
* user=admin
* password=admin

Go to explore page :: http://localhost:3000/explore
* Select datasource = Loki


## Step 2 :: Run service with go
```
$docker compose up -d go --build

$docker compose ps
$docker compose logs --follow
```

Run with URL
* http://localhost:8080/

See result in grafana

## Step 3 :: Run service with NodeJS
* [Pino-loki](https://github.com/Julien-R44/pino-loki)
  * Run in thread (not main)
* [JavaScript TraceId and SpanId injection into logs](https://help.sumologic.com/docs/apm/traces/get-started-transaction-tracing/opentelemetry-instrumentation/javascript/traceid-spanid-injection-into-logs/)
```
$docker compose up -d nodejs --build

$docker compose ps
$docker compose logs --follow
```

Run with URL
* http://localhost:3002/

See result in grafana

## Step 4 :: Remove all resources
```
$docker compose down
```

