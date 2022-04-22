import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TravelHistoryUpdateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  archived?: boolean | null;
  archivedBy?: UserWhereUniqueInput | null;
  createdBy?: UserWhereUniqueInput | null;
  dateDeparted?: Date | null;
  dateEntered?: Date | null;
  destinationAirport?: string | null;
  destinationCity?: string | null;
  destinationCountry?: string | null;
  reasonOfTravel?: string;
  updatedBy?: UserWhereUniqueInput | null;
};
