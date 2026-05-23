export interface ISession {
  day: string;
  start_time: string;
  end_time: string;
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
  image:any,
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
  fee:String,
  status:String,
  feature_on_website:Boolean;
  bio: string;
  country_id:String
  state:String,
  city:String,
  address:String,
  address_2:String
  pin_code:String

  // Dynamic Fields
  sessions: ISession[];
  educations: IEducation[];
  awards: IAward[];
  certifications: ICertification[];
}