// Contact (a)
// export interface Contact { 
//   id?: string,
//   firstName?: string,
//   lastName?: string,
//   dateOfBirth?: Date | null,
//   favoritesRanking?: number | null,
//   phone?: Phone,
//   address?: Address,
// }

//with getrawValue()
// export interface Contact {
//   id?: string,
//   firstName: string,
//   lastName: string,
//   dateOfBirth: Date | null,
//   favoritesRanking: number | null,
//   phone?: Phone,
//   address?: Address,
// }

//using Partial Data Type fo Typescript
export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  phone: Phone,
  address: Address,
}



// export interface Contact {
//   id: string,
//   firstName: string,
//   lastName: string,
//   dateOfBirth: Date | null,
//   favoritesRanking: number | null,
//   phone: Phone,
//   address?: Address,
// }

export interface Phone {
  phoneNumber: string,
  phoneType: string,
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}