from django.conf import settings
from django.utils.deprecation import MiddlewareMixin
from time import time
from influxdb import InfluxDBClient
from socket import gethostname


def get_influxdb_client():
    client = InfluxDBClient(
        settings.INFLUXDB_HOST,
        settings.INFLUXDB_PORT,
        settings.INFLUXDB_USERNAME,
        settings.INFLUXDB_PASSWORD,
        settings.INFLUXDB_DATABASE,
        timeout=getattr(settings, 'INFLUXDB_TIMEOUT', 10),
        ssl=getattr(settings, 'INFLUXDB_SSL', False),
        verify_ssl=getattr(settings, 'INFLUXDB_VERIFY_SSL', False),
    )
    return client


class StatsMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response
        self.influxClient = get_influxdb_client()
        measurements = self.influxClient.get_list_measurements()
        if len(measurements) < 1 or not any(x['name'] == 'stats' for x in measurements if x):
            self.influxClient.query("create measurement 'stats")

    def process_request(self, request):
        request.start_time = time()

    def process_response(self, request, response):
        result = time() - request.start_time
        json_body = [{
            "measurement": "stats",
            "tags": {
                "host": gethostname(),
                "request": "total"
            },
            "fields": {
                "value": result
            }
        }]
        client = get_influxdb_client()
        client.write_points(json_body)
        return response
