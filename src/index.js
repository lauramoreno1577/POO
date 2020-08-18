import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class Carro {
  constructor(tamaño, color, modelo, marca){
    this.tamaño = tamaño;
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
  }
  buscar(){
   console.log(
   `Buscando carro ${this.tamaño}, ${this.color},${this.modelo}, ${this.marca}`
   );
   return this;
  }

 estilos(){
   console.log(`buscando estilos`);
   console.log(`ya se encontraron los estilos relacionados`);
   return this;
 }
 
 solicitar(){
  console.log(`solicitando tu carro...`);
  console.log(`El carro se esta reservando`);
  return this;
 }

}
 
const carroAudi = new Carro(`grande`,`negro`, [`2017`], [`Audi`]);
console.log(carroAudi.buscar());
console.log(carroAudi.estilos());
console.log(carroAudi.solicitar());

