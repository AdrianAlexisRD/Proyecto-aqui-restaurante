// ✅ 1. Tipos básicos
let nombre: string = "Alex";
let edad: number = 28;
let activo: boolean = true;
let cosas: any = "puede ser cualquier cosa";
let numeros: number[] = [1, 2, 3];
let tupla: [string, number] = ["edad", 28];

// ✅ 2. Enums
enum Rol { Admin, Cliente, Invitado }
let rol: Rol = Rol.Cliente;

// ✅ 3. Interfaces (estructura de objetos)
interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  activo?: boolean; // opcional
}

const user: Usuario = {
  id: 1,
  nombre: "Alex",
  correo: "alex@example.com"
};

// ✅ 4. Type (alias)
type Coordenadas = [number, number];
const ubicacion: Coordenadas = [-70.7, 19.8];

// ✅ 5. Funciones
function saludar(nombre: string): string {
  return `Hola ${nombre}`;
}

const sumar = (a: number, b: number): number => a + b;

function log(mensaje: string): void {
  console.log(mensaje);
}

// ✅ 6. Union & literal types
type Estado = "activo" | "inactivo";
let estado: Estado = "activo";

function procesarEntrada(valor: number | string) {
  if (typeof valor === "string") {
    console.log("Es texto");
  } else {
    console.log("Es número");
  }
}

// ✅ 7. Clases
class Persona {
  constructor(
    public nombre: string,
    private edad: number
  ) {}

  mostrar(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }
}

const alex = new Persona("Alex", 28);

// ✅ 8. Generics
function envolver<T>(valor: T): T[] {
  return [valor];
}
const envuelto = envolver<number>(100);

// ✅ 9. Tipar React useState
// import { useState } from "react";
// const [contar, setContar] = useState<number>(0);

// ✅ 10. Tipar props de un componente (React)
type Props = {
  titulo: string;
  activo: boolean;
};

function Componente({ titulo, activo }: Props) {
  return <h1>{titulo} está {activo ? "activo" : "inactivo"}</h1>;
}

// ✅ 11. Tipar fetch
type Producto = {
  id: string;
  nombre: string;
};

async function getProducto(id: string): Promise<Producto> {
  const res = await fetch(`/api/productos/${id}`);
  return await res.json();
}

// ✅ 12. Nullable y optional chaining
type PersonaInfo = {
  nombre: string;
  direccion?: {
    ciudad: string;
  };
};

const persona: PersonaInfo = { nombre: "Juan" };
console.log(persona.direccion?.ciudad ?? "Ciudad no disponible");

// ✅ 13. Asserts y type guards
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function imprimir(valor: unknown) {
  if (esString(valor)) {
    console.log(valor.toUpperCase());
  }
}
