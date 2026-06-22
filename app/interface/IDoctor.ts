export interface ISession {
  id?:string | number ;
  day: string;
  start_time: string;
  end_time: string;
  patients: number | string;
}

export interface IEducation {
  id?:string | number
  degree: string;
  university: string;
  from: string;
  to: string;
}

export interface IAward {
  id?:string | number
  name: string;
  from: string;
}

export interface ICertification {
  id?:string | number
  name: string;
  from: string;
}

export interface IDoctor {
  image?:any,
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  dob: any;
  year_of_experience: string;
  department_id: string;
  designation: string;
  medical_licese_number: string;
  language_spoken: string;
  blood_group: string;
  gender: string;
  fee:string,
  status:string,
  feature_on_website?:Boolean;
  bio: string;
  country_id:string
  state:string,
  city:string,
  address:string,
  address_2?:string
  pin_code:string

  // Dynamic Fields
  sessions?: ISession[] |undefined;
  educations?: IEducation[] | undefined;
  awards?: IAward[] |undefined;
  certifications?: ICertification[] |undefined;
}