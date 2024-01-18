const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
          // `this` se usa para hacer referencia a la propiedad `approvedCourses`
          // del objeto en cuestión.
      this.approvedCourses.push(newCourse);
    }
  };