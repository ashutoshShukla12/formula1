export interface RaceResult {
  position: number
  driver: string
  team: string
  points: number
  time?: string
  status?: string
}

export interface Practice {
  name: string // e.g., "Practice 1", "Practice 2", "Practice 3"
  date: string // ISO date string
  time: string // e.g., "14:30"
}

export interface Race {
  id: string
  name: string
  round: number
  circuitName: string
  circuitImage: string
  location: {
    city: string
    country: string
    countryCode: string
    flagImage: string
  }
  date: string // ISO date string
  time: string // e.g., "15:00"
  status: "upcoming" | "completed" | "ongoing" | "canceled"
  practices: Practice[]
  qualifying: {
    date: string
    time: string
  }
  sprint?: {
    date: string
    time: string
    results?: RaceResult[]
  }
  results?: RaceResult[]
  trackLength: number // in kilometers
  laps: number
  lapRecord?: {
    time: string
    driver: string
    year: number
  }
  firstGrandPrix: number
  trackMap: string
}

export interface CalendarResponse {
  races: Race[]
  season: number
  nextRace?: Race
  lastRace?: Race
}

export interface CalendarFilters {
  status?: "upcoming" | "completed" | "all"
  season?: number
}
