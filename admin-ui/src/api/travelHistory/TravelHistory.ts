import { Applicant } from "../applicant/Applicant";
import { User } from "../user/User";

export type TravelHistory = {
  applicant?: Applicant | null;
  archived: boolean | null;
  archivedBy?: User | null;
  createdAt: Date | null;
  createdBy?: User | null;
  dateDeparted: Date | null;
  dateEntered: Date | null;
  destinationCity: string | null;
  destinationCountry: string | null;
  destinationHub: string | null;
  id: string;
  reasonOfTravel: string | null;
  updatedAt: Date | null;
  updatedBy?: User | null;
};
