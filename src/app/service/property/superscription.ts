export class Superscription{
    id: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    address: string;

    constructor(id: number,  city: string, state: string, latitude: number, longitude: number, address: string){
        this.id = id;
        this.city = city;
        this.state = state;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
    }

    setId(id: number) : void{
        this.id = id;
    }  
    getId() : number{
        return this.id;
    } 

    setCity(city: string): void{
        this.city = city;
    }
    getCity(): string{
        return this.city;
    }

    setState(state: string): void{
        this.state = state;
    }
    getState(): string{
        return this.state;
    }

    setLatitude(latitude: number) : void{
        this.latitude = latitude;
    }
    getLatitude():number{
        return this.latitude;
    }

    setLongitude(longitude: number) : void{
        this.longitude = longitude;
    }
    getLongitude(longitude: number): number{
        return this.longitude;
    }

    setAddress(address: string): void{
        this.address = address;
    }
    getAddres(): string{
        return this.address;
    }

}
