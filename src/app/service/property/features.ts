export class Features{
    id: number;
    type: string;
    area: number;
    rooms: number;

    constructor(id: number, type: string, area: number, rooms: number){
        this.id = id;
        this.type = type;
        this.area = area;
        this.rooms = rooms;
    }

    setId(id: number) : void{
        this.id =  id;
    }
    getId(): number{
        return this.id;
    }
    
    setType(type: string) : void{
        this.type = type;
    }
    getType() : string{
        return this.type;
    }

    setArea(area: number) : void{
        this.area = area;
    }
    getArea() : number{
        return this.area;
    }

    setRooms(rooms: number) : void{
        this.rooms = rooms;
    }
    getRooms(): number{
        return this.rooms;
    }
}