class ClassesForCourses {
    constructor ({
        title,
        id,
        comment = [],
    }) {
        this.title = title;
        this.id = id;
        this.comment = comment
    }
}

//clase generica de POO de futbol
const futbolPOO = new ClassesForCourses({
    id: 38618,
    title: 'Bonus: fútbol y programación orientada a objetos',
})

class Comment {
    constructor ({
        user,
        date,
        content,
        answer = [],
    }){
        this.user = user;
        this.date = date;
        this.content = content;
        this.answer = answer;
    }
}

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: futbolPOO,
})
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

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
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});
  
const escuelaData = new LearningPath({
    id: 1268,
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        'CursoMatematicas',
        'CursoExcel',
    ],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
})

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