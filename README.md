# Workshop Observability
* Centralized log
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
$docker compose up go --build
```

See result in grafana

## Step 3 :: Remove all resources
```
$docker compose down
```

