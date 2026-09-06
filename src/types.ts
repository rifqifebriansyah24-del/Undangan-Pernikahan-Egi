export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export interface WeddingInfo {
  groom: string;
  bride: string;
  dateStr: string;
  timeStr: string;
  locationName: string;
  locationCity: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  mapsUrl: string;
}
