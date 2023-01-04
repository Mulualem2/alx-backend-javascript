// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Creating a teacher and a director
const teacher3: Teacher = {
  firstName: 'Mike',
  lastName: 'Doe',
  location: 'Florida',
  fullTimeEmployee: false,
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'Miami',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Mike', 'Doe'));

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface classConstructor {
  new (firstName: string, lastName: string): classInterface;

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentClass: StudentClass = new StudentClass('Nora', 'Sanchez');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
