import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Track, TrackDocument} from "./schemes/track.schema";
import {Comment, CommentDocument} from "./schemes/comment.schema";

@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
                ) {}


    async create(){

    }
    async getAll(){

    }
    async getOne(){

    }
    async delete(){

    }


}