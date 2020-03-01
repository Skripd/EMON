import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Permissions } from './permissions.decorator';
import { PermissionsGuard } from './permissions.guard';

@Controller()
export class AppController {
  constructor() {}

  // Users without role mapping can get this.
  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('user')
  @Permissions('emon-server:user')
  getUser(): string {
    return 'User route allowed';
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('poweruser')
  @Permissions('emon-server:poweruser')
  getPowerUser(): string {
    return 'PowerUser route allowed';
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Get('admin')
  @Permissions('emon-server:admin')
  getAdmin(): string {
    return 'Admin route allowed';
  }
}
