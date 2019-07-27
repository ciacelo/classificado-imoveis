export class User{
    id: number;
    name: string;
    email: string;
    telefone: number;
    photos: string;

    constructor(
    id: number,
    name: string,
    email: string,
    telefone: number,
    photos: string
    ){
    this.id = id,
    this.name = name,
    this.email = email,
    this.telefone = telefone,
    this.photos = photos
    }

    setName(name:string):void{
        this.name = name;
    }
    getName(){
        return this.name;
    }
    
    setEmail(email:string):void{
        this.email = email;
    }
    getEmail(){
        return this.email;
    }
    setPhoto(photo: string):void{
        this.photos = photo;
    }
    getPhoto(): string{
        return this.photos;
    }
    setTelefone(telefone: number):void{
        this.telefone = telefone;
    }
    getTelefone(){
        return this.telefone
    }
    setId(id: number): void{
        this.id = id;
    }
    getId(){
        return this.id;
    }

}