export interface Cast {
  ID: string
  Name: string
}

export interface Genre {
  ID: string
  Title: string
}

export interface Show {
  ID: number
  Title: string
  Year: number
  Synopsis: string
  Images: {
    Background: string
  }
  Cast: Cast[]
  Genres: Genre[]
}

export interface Episode {
  ID: string
  Title: string
  Synopsis: string
  EpisodeNumber: number
  SeasonNumber: number
  Duration: number
  Image: string
}

export interface Season {
  SeasonNumber: number
  Episodes: Episode[]
}
