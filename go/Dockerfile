FROM golang:1.21.2-alpine3.18 as build
WORKDIR /app
COPY . .
RUN go mod tidy
RUN go build -o ./server server.go

FROM alpine
WORKDIR /app
COPY --from=build /app/server .
CMD ["./server"]