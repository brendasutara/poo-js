class LearningPath {
    constructor({
        name,
        courses = [],
        id,
        teacher,
        lessons = [],
    }) {
        this.id = id
        this.name = name;
        this.courses = courses;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}

//nuevas instancias de rutas
const escuelaWeb = new LearningPath({
    id: 4512,
    name: "Escuela de Desarrollo Web",
    courses: [
      'cursoJS',
      'cursoReact',
      'cursoNextJS',
    ],
  });
  
  const escuelaData = new LearningPath({
    id: 1268,
    name: "Escuela de Data Science",
    courses: [
      'cursoPython',
      'CursoMatematicas',
      'CursoExcel',
    ],
  });

//ESTE ES NUESTRO HERMOSO MOLDE-PROTOTIPO
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});