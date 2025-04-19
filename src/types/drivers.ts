export interface DriverStats {
  wins: number
  podiums: number
  polePositions: number
  fastestLaps: number
  championships: number
  careerPoints: number
  racesEntered: number
  firstRace: string
  firstWin?: string
}

export interface DriverTeam {
  id: string
  name: string
  logo: string
  color: string
  joinedYear: number
}

export interface Driver {
  id: string
  name: string
  number: number
  code: string
  nationality: string
  countryCode: string
  flagImage: string
  dateOfBirth: string
  placeOfBirth: string
  image: string
  helmetImage: string
  team: DriverTeam
  stats: DriverStats
  biography: string
  socialMedia: {
    twitter?: string
    instagram?: string
    facebook?: string
    website?: string
  }
}

export interface DriversResponse {
  drivers: Driver[]
}
