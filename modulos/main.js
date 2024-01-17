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
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

//queremos ocultar la url de nuestros videos
class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        //poniendole el _ bloqueamos el cambio de cualquier persona no habilitada
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name
    }

    set name (nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: futbolPOO,
    isFree: true,
})

//Vamos a hacer como que name sea un metodo
//ya no hacen falta los parentesis porque los estamos poniendo en get
cursoProgBasica.name

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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
//CLASE MAMÁ
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

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

//CLASES HIJOS

//HIJO FREE
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

// HIJO BASIC
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
  }
}

//HIJO EXPERT
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

//HIJO TEARCHER
class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const juan = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});