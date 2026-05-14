export interface ISession {
  day: string;
  start: string;
  end: string;
  patients: number | string;
}

export interface IEducation {
  degree: string;
  university: string;
  from: string;
  to: string;
}

export interface IAward {
  name: string;
  from: string;
}

export interface ICertification {
  name: string;
  from: string;
}

export interface IDoctor {
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  dob: string;
  year_of_experience: string;
  department_id: string;
  designation: string;
  medical_licese_number: string;
  language_spoken: string;
  blood_group: string;
  gender: string;
  bio: string;

  // Dynamic Fields
  sessions: ISession[];
  educations: IEducation[];
  awards: IAward[];
  certifications: ICertification[];
}