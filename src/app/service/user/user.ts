
export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number;
    photo: string;

    constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phone: number,
    photo: string
    ){
    this.id = id,
    this.name = name,
    this.email = email,
    this.password = password,
    this.phone = phone,
    this.photo = photo;
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
    setPassword(password: string): void{
        this.password = password;
    }
    getPassword(): string{
        return this.password;
    }
    setPhoto(photo: string): void{
        this.photo = photo;
    }
    getPhoto(){
        return this.photo;
    }
    setTelefone(phone: number):void{
        this.phone = phone;
    }
    getTelefone(){
        return this.phone
    }
    setId(id: number): void{
        this.id = id;
    }
    getId(){
        return this.id;
    }

}