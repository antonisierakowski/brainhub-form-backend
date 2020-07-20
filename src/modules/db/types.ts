export enum Table {
  Event = 'public.event'
}

export interface EventDbRow {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  date: Date,
}
