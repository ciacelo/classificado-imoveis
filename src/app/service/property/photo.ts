export class Photo{ 
    
    id: number;
    propertyId: number;
    path: string;

    constructor(id: number, propertyId: number, path: string){
        this.id = id;
        this.propertyId = propertyId;
        this.path = path;
    }
    

    setId(id: number) : void{
        this.id = id;
    }
    getId() : number{
        return this.id;
    }

    setPropertyId(propertyId: number) : void{
        this.propertyId = propertyId;
    }
    getPropertyId(): number{
        return this.propertyId;
    }

    setPath(path: string) : void{
        this.path = path;
    }
    getPath(): string{
        return this.path;
    }
}