//OBJETO LITERAL
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],

    //Crear un metodo para aprobar un curso
    aprobarCurso(nuevoCursito) {
      //this hace referencia al mismo objeto, en este caso natalia  
      this.cursosAprobados.push(nuevoCursito);
    },
  };

//Hacer que Natalia apruebe otro curso  
natalia.cursosAprobados.push("Curso de Responsive Design") 
//esto lo reemplazamos por un metodo dentro del mismo objeto

//PROTOTIPO.nuestro-molde 
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
}

//es como ocultamos este metodo en _proto_
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

//Juanita es una instancia del prototipo Student
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

//Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        //Recibimos un solo parametro {} que sea de tipo objeto
        //asi no importa el orden que tenemos porque pueden ser muchos parametros 
        //y cuesta acordarse el orden
        //o si nunca enviamos un parametro, lo admite
        name, 
        age, 
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.email = email
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2 ({
    email: "miguelito@platzi.com",
    age: 28,
    name: "Miguel",
})

