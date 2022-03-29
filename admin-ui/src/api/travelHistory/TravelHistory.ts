import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type TravelHistory = {
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  createdAt: Date;
  createdBy?: User | null;
  dateDeparted: Date | null;
  dateEntered: Date;
  destinationAirport: string | null;
  destinationCity: string | null;
  destinationCountry: string | null;
  id: string;
  reasonOfTravel: string;
  updatedAt: Date;
  updatedBy?: User | null;
};
