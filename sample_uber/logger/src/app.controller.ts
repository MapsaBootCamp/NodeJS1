import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import {
  GetTripRequestPayload,
  TripRequestLog,
} from './dto/trip-request-log.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('log_trip_request')
  logTripRequest(data: TripRequestLog) {
    this.appService.logTripRequest(data);
  }

  @MessagePattern({ cmd: 'trip_request_log' })
  getTripRequests(data: GetTripRequestPayload) {
    return this.appService.getTripRequestLog(data.username);
  }
}
