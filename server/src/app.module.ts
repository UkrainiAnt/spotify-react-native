import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaController } from './prisma/prisma.controller';
import { PrismaService } from './prisma/prisma.service';
import { FileModule } from './file/file.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FirebaseModule } from './firebase/firebase.module';
import { StripeModule } from 'nestjs-stripe';

@Module({
	imports: [
		StripeModule.forRoot({
			apiKey: process.env.STRIPE_SECRET_KEY,
			apiVersion: '2020-08-27',
		}),
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, 'static'),
		}),
		ConfigModule.forRoot({
			envFilePath: '.env',
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		FileModule,
		FirebaseModule,
	],
	controllers: [PrismaController],
	providers: [PrismaService],
})
export class AppModule {}
