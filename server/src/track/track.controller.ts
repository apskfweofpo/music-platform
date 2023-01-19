import {Controller, Get} from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
     create(){

    }
    @Get()
    getAll(){
        return '123'
    }
     getOne(){

    }
     delete(){

    }
}