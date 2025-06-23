// Eğerki nesnenin bir özelliğinin tipi kapsamlıysa ayrıca tanımlamak uzun vadede daha mantıklı
interface IAddress {
  street: string;
  city: string;
  country: string;
}

interface IEducation {
  school: string;
  degree: string;
  startDate: Date;
  endDate: Date;
}

interface IJob {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
}

interface IPerson {
  id: string;
  firstname: string;
  lastname: string;
  age: number;

  address: IAddress;
  education: IEducation;
  job: IJob[];
}

// interface'leri patça parça oluşturmak bu noktada işimize yaradı
const updateLocation = (new_address: IAddress) => {};

// Oluşturduğumuz interface'i kullanarak bir nesne oluşturlaım

const person: IPerson = {
  id: "1",
  firstname: "John",
  lastname: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  education: {
    school: "University of Anytown",
    degree: "Bachelor of Science",
    startDate: new Date("2010-09-01"),
    endDate: new Date("2014-05-01"),
  },
  job: [
    {
      company: "Google",
      position: "Software Engineer",
      startDate: new Date("2014-05-01"),
      endDate: new Date("2018-05-01"),
    },
  ],
};
