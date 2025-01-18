import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from './strategies/local.strategy'
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy'
import { JwtAccessStrategy } from './strategies/jwt-access.strategy'
import { GoogleStrategy } from './strategies/google.strategy'

@Module({
  imports: [UsersModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
      AuthService, 
      LocalStrategy, 
      JwtRefreshStrategy, 
      JwtAccessStrategy, 
      GoogleStrategy
  ]
})
export class AuthModule {}
