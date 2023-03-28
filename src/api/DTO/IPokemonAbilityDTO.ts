export interface IPokemonAbilityDTO {
    effect_changes: any[]
    effect_entries: EffectEntry[]
    flavor_text_entries: FlavorTextEntry[]
    generation: Generation
    id: number
    is_main_series: boolean
    name: string
    names: Name[]
    pokemon: Pokemon[]
  }
  
  export interface EffectEntry {
    effect: string
    language: Language
    short_effect: string
  }
  
  export interface Language {
    name: string
    url: string
  }
  
  export interface FlavorTextEntry {
    flavor_text: string
    language: Language2
    version_group: VersionGroup
  }
  
  export interface Language2 {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Generation {
    name: string
    url: string
  }
  
  export interface Name {
    language: Language3
    name: string
  }
  
  export interface Language3 {
    name: string
    url: string
  }
  
  export interface Pokemon {
    is_hidden: boolean
    pokemon: Pokemon2
    slot: number
  }
  
  export interface Pokemon2 {
    name: string
    url: string
  }
  