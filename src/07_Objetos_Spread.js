const carro = {
    id: 1,
    nombre:'LaFerrari',
    date: new Date(),
    marca:{
        id: 1,
        nombre:'Ferrari',
        ubicacion: 'Europa',
        age: 100
    },
    inventarios:[
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 1100000
        },
        {
            id: 1,
            color:'Blanco',
            cantidad: 5,
            precio: 1000000
        },
        {
            id: 1,
            color:'Amarillo',
            cantidad: 5,
            precio: 1100000
        },
    ],
    totalInventario: function(){
        let total=0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio*inventario.precio;
        });
        return total;
    },
    
    costo: 10000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}
//carro.nombre ='F40'
carro.costo = 150000000
console.log(carro);
const salu = carro.saludo();
console.log(salu);
console.log(carro.totalInventario());

//spread
const carro2 = {...carro};

const valida = carro2 == carro;

console.log(valida);

carro2.id = 20;
console.log(carro.id);
console.log(carro2.id);