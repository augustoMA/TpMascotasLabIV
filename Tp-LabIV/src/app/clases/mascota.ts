export class Mascota {
    
    nombre:string;
    tipo:string;
    url:string;
    color:string;
    id:string;

    constructor(nombre,tipo,url){
        
        this.nombre=nombre;
        this.tipo=tipo;
        this.url=url;
        
        switch(tipo)
        {
            case "perro": 
                this.color="color:green";
                break;
            case "gato":
                this.color="color:red";
                break;
            case "pez":
                this.color="color:blue";
                break;
        }
    }
}
