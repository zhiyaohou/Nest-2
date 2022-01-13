import { Controller, Get, Post, Delete, Patch, Param} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
