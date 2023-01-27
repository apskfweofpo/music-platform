import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";

@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.6eebrjh.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}