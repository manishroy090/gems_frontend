  export interface Ionboarding {
    name: string,
    email: string,
    password: string,
    confirm_password: string,
    registration_number: string,
    tax_id: string,
    website?: string ,
    emergency_contact: string,
    established_date: string,
    total_beds: string,
    address_line1: string,
    address_line2?: string,
    city: string,
    state: string,
    country_id: number
    logo?: string,
    postal_code:string
  }