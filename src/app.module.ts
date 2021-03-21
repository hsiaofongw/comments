import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';

const connStringTemplate = "mongodb+srv://<user>:<pass>@<host>/<db>?retryWrites=true&w=majority";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(
            connStringTemplate
            .replace("<user>", process.env?.MONGODB_USERNAME || "noUser")
            .replace("<pass>", process.env?.MONGODB_PASSWORD || "noPassword")
            .replace("<host>", process.env?.MONGODB_HOST || "noHost")
            .replace("<db>", process.env?.MONGODB_DBNAME),
            { useFindAndModify: false }
        ),
        CommentsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
