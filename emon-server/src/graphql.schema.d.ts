
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum AverageDayOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    avGasUsage_ASC = "avGasUsage_ASC",
    avGasUsage_DESC = "avGasUsage_DESC",
    usageHigh_ASC = "usageHigh_ASC",
    usageHigh_DESC = "usageHigh_DESC",
    usageLow_ASC = "usageLow_ASC",
    usageLow_DESC = "usageLow_DESC",
    returnHigh_ASC = "returnHigh_ASC",
    returnHigh_DESC = "returnHigh_DESC",
    returnLow_ASC = "returnLow_ASC",
    returnLow_DESC = "returnLow_DESC",
    avCurrentUsage_ASC = "avCurrentUsage_ASC",
    avCurrentUsage_DESC = "avCurrentUsage_DESC",
    processingTime_ASC = "processingTime_ASC",
    processingTime_DESC = "processingTime_DESC",
    dateRecorded_ASC = "dateRecorded_ASC",
    dateRecorded_DESC = "dateRecorded_DESC",
    dateAddedToDatabase_ASC = "dateAddedToDatabase_ASC",
    dateAddedToDatabase_DESC = "dateAddedToDatabase_DESC"
}

export enum AverageHourOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    avGasUsage_ASC = "avGasUsage_ASC",
    avGasUsage_DESC = "avGasUsage_DESC",
    usageHigh_ASC = "usageHigh_ASC",
    usageHigh_DESC = "usageHigh_DESC",
    usageLow_ASC = "usageLow_ASC",
    usageLow_DESC = "usageLow_DESC",
    returnHigh_ASC = "returnHigh_ASC",
    returnHigh_DESC = "returnHigh_DESC",
    returnLow_ASC = "returnLow_ASC",
    returnLow_DESC = "returnLow_DESC",
    avCurrentUsage_ASC = "avCurrentUsage_ASC",
    avCurrentUsage_DESC = "avCurrentUsage_DESC",
    processingTime_ASC = "processingTime_ASC",
    processingTime_DESC = "processingTime_DESC",
    dateRecorded_ASC = "dateRecorded_ASC",
    dateRecorded_DESC = "dateRecorded_DESC",
    dateAddedToDatabase_ASC = "dateAddedToDatabase_ASC",
    dateAddedToDatabase_DESC = "dateAddedToDatabase_DESC"
}

export enum AverageMinuteOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    avGasUsage_ASC = "avGasUsage_ASC",
    avGasUsage_DESC = "avGasUsage_DESC",
    usageHigh_ASC = "usageHigh_ASC",
    usageHigh_DESC = "usageHigh_DESC",
    usageLow_ASC = "usageLow_ASC",
    usageLow_DESC = "usageLow_DESC",
    returnHigh_ASC = "returnHigh_ASC",
    returnHigh_DESC = "returnHigh_DESC",
    returnLow_ASC = "returnLow_ASC",
    returnLow_DESC = "returnLow_DESC",
    avCurrentUsage_ASC = "avCurrentUsage_ASC",
    avCurrentUsage_DESC = "avCurrentUsage_DESC",
    processingTime_ASC = "processingTime_ASC",
    processingTime_DESC = "processingTime_DESC",
    dateRecorded_ASC = "dateRecorded_ASC",
    dateRecorded_DESC = "dateRecorded_DESC",
    dateAddedToDatabase_ASC = "dateAddedToDatabase_ASC",
    dateAddedToDatabase_DESC = "dateAddedToDatabase_DESC"
}

export enum MeasurementOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    gasUsage_ASC = "gasUsage_ASC",
    gasUsage_DESC = "gasUsage_DESC",
    usageHigh_ASC = "usageHigh_ASC",
    usageHigh_DESC = "usageHigh_DESC",
    usageLow_ASC = "usageLow_ASC",
    usageLow_DESC = "usageLow_DESC",
    returnHigh_ASC = "returnHigh_ASC",
    returnHigh_DESC = "returnHigh_DESC",
    returnLow_ASC = "returnLow_ASC",
    returnLow_DESC = "returnLow_DESC",
    currentUsage_ASC = "currentUsage_ASC",
    currentUsage_DESC = "currentUsage_DESC",
    dateRecorded_ASC = "dateRecorded_ASC",
    dateRecorded_DESC = "dateRecorded_DESC",
    dateAddedToDatabase_ASC = "dateAddedToDatabase_ASC",
    dateAddedToDatabase_DESC = "dateAddedToDatabase_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export class AverageDayCreateInput {
    id?: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
}

export class AverageDaySubscriptionWhereInput {
    AND?: AverageDaySubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AverageDayWhereInput;
}

export class AverageDayUpdateInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageDayUpdateManyMutationInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageDayWhereInput {
    AND?: AverageDayWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    avGasUsage?: number;
    avGasUsage_not?: number;
    avGasUsage_in?: number[];
    avGasUsage_not_in?: number[];
    avGasUsage_lt?: number;
    avGasUsage_lte?: number;
    avGasUsage_gt?: number;
    avGasUsage_gte?: number;
    usageHigh?: number;
    usageHigh_not?: number;
    usageHigh_in?: number[];
    usageHigh_not_in?: number[];
    usageHigh_lt?: number;
    usageHigh_lte?: number;
    usageHigh_gt?: number;
    usageHigh_gte?: number;
    usageLow?: number;
    usageLow_not?: number;
    usageLow_in?: number[];
    usageLow_not_in?: number[];
    usageLow_lt?: number;
    usageLow_lte?: number;
    usageLow_gt?: number;
    usageLow_gte?: number;
    returnHigh?: number;
    returnHigh_not?: number;
    returnHigh_in?: number[];
    returnHigh_not_in?: number[];
    returnHigh_lt?: number;
    returnHigh_lte?: number;
    returnHigh_gt?: number;
    returnHigh_gte?: number;
    returnLow?: number;
    returnLow_not?: number;
    returnLow_in?: number[];
    returnLow_not_in?: number[];
    returnLow_lt?: number;
    returnLow_lte?: number;
    returnLow_gt?: number;
    returnLow_gte?: number;
    avCurrentUsage?: number;
    avCurrentUsage_not?: number;
    avCurrentUsage_in?: number[];
    avCurrentUsage_not_in?: number[];
    avCurrentUsage_lt?: number;
    avCurrentUsage_lte?: number;
    avCurrentUsage_gt?: number;
    avCurrentUsage_gte?: number;
    processingTime?: number;
    processingTime_not?: number;
    processingTime_in?: number[];
    processingTime_not_in?: number[];
    processingTime_lt?: number;
    processingTime_lte?: number;
    processingTime_gt?: number;
    processingTime_gte?: number;
    dateRecorded?: DateTime;
    dateRecorded_not?: DateTime;
    dateRecorded_in?: DateTime[];
    dateRecorded_not_in?: DateTime[];
    dateRecorded_lt?: DateTime;
    dateRecorded_lte?: DateTime;
    dateRecorded_gt?: DateTime;
    dateRecorded_gte?: DateTime;
    dateAddedToDatabase?: DateTime;
    dateAddedToDatabase_not?: DateTime;
    dateAddedToDatabase_in?: DateTime[];
    dateAddedToDatabase_not_in?: DateTime[];
    dateAddedToDatabase_lt?: DateTime;
    dateAddedToDatabase_lte?: DateTime;
    dateAddedToDatabase_gt?: DateTime;
    dateAddedToDatabase_gte?: DateTime;
}

export class AverageDayWhereUniqueInput {
    id?: string;
    dateRecorded?: DateTime;
}

export class AverageHourCreateInput {
    id?: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
}

export class AverageHourSubscriptionWhereInput {
    AND?: AverageHourSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AverageHourWhereInput;
}

export class AverageHourUpdateInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageHourUpdateManyMutationInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageHourWhereInput {
    AND?: AverageHourWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    avGasUsage?: number;
    avGasUsage_not?: number;
    avGasUsage_in?: number[];
    avGasUsage_not_in?: number[];
    avGasUsage_lt?: number;
    avGasUsage_lte?: number;
    avGasUsage_gt?: number;
    avGasUsage_gte?: number;
    usageHigh?: number;
    usageHigh_not?: number;
    usageHigh_in?: number[];
    usageHigh_not_in?: number[];
    usageHigh_lt?: number;
    usageHigh_lte?: number;
    usageHigh_gt?: number;
    usageHigh_gte?: number;
    usageLow?: number;
    usageLow_not?: number;
    usageLow_in?: number[];
    usageLow_not_in?: number[];
    usageLow_lt?: number;
    usageLow_lte?: number;
    usageLow_gt?: number;
    usageLow_gte?: number;
    returnHigh?: number;
    returnHigh_not?: number;
    returnHigh_in?: number[];
    returnHigh_not_in?: number[];
    returnHigh_lt?: number;
    returnHigh_lte?: number;
    returnHigh_gt?: number;
    returnHigh_gte?: number;
    returnLow?: number;
    returnLow_not?: number;
    returnLow_in?: number[];
    returnLow_not_in?: number[];
    returnLow_lt?: number;
    returnLow_lte?: number;
    returnLow_gt?: number;
    returnLow_gte?: number;
    avCurrentUsage?: number;
    avCurrentUsage_not?: number;
    avCurrentUsage_in?: number[];
    avCurrentUsage_not_in?: number[];
    avCurrentUsage_lt?: number;
    avCurrentUsage_lte?: number;
    avCurrentUsage_gt?: number;
    avCurrentUsage_gte?: number;
    processingTime?: number;
    processingTime_not?: number;
    processingTime_in?: number[];
    processingTime_not_in?: number[];
    processingTime_lt?: number;
    processingTime_lte?: number;
    processingTime_gt?: number;
    processingTime_gte?: number;
    dateRecorded?: DateTime;
    dateRecorded_not?: DateTime;
    dateRecorded_in?: DateTime[];
    dateRecorded_not_in?: DateTime[];
    dateRecorded_lt?: DateTime;
    dateRecorded_lte?: DateTime;
    dateRecorded_gt?: DateTime;
    dateRecorded_gte?: DateTime;
    dateAddedToDatabase?: DateTime;
    dateAddedToDatabase_not?: DateTime;
    dateAddedToDatabase_in?: DateTime[];
    dateAddedToDatabase_not_in?: DateTime[];
    dateAddedToDatabase_lt?: DateTime;
    dateAddedToDatabase_lte?: DateTime;
    dateAddedToDatabase_gt?: DateTime;
    dateAddedToDatabase_gte?: DateTime;
}

export class AverageHourWhereUniqueInput {
    id?: string;
    dateRecorded?: DateTime;
}

export class AverageMinuteCreateInput {
    id?: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
}

export class AverageMinuteSubscriptionWhereInput {
    AND?: AverageMinuteSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AverageMinuteWhereInput;
}

export class AverageMinuteUpdateInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageMinuteUpdateManyMutationInput {
    avGasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    avCurrentUsage?: number;
    processingTime?: number;
    dateRecorded?: DateTime;
}

export class AverageMinuteWhereInput {
    AND?: AverageMinuteWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    avGasUsage?: number;
    avGasUsage_not?: number;
    avGasUsage_in?: number[];
    avGasUsage_not_in?: number[];
    avGasUsage_lt?: number;
    avGasUsage_lte?: number;
    avGasUsage_gt?: number;
    avGasUsage_gte?: number;
    usageHigh?: number;
    usageHigh_not?: number;
    usageHigh_in?: number[];
    usageHigh_not_in?: number[];
    usageHigh_lt?: number;
    usageHigh_lte?: number;
    usageHigh_gt?: number;
    usageHigh_gte?: number;
    usageLow?: number;
    usageLow_not?: number;
    usageLow_in?: number[];
    usageLow_not_in?: number[];
    usageLow_lt?: number;
    usageLow_lte?: number;
    usageLow_gt?: number;
    usageLow_gte?: number;
    returnHigh?: number;
    returnHigh_not?: number;
    returnHigh_in?: number[];
    returnHigh_not_in?: number[];
    returnHigh_lt?: number;
    returnHigh_lte?: number;
    returnHigh_gt?: number;
    returnHigh_gte?: number;
    returnLow?: number;
    returnLow_not?: number;
    returnLow_in?: number[];
    returnLow_not_in?: number[];
    returnLow_lt?: number;
    returnLow_lte?: number;
    returnLow_gt?: number;
    returnLow_gte?: number;
    avCurrentUsage?: number;
    avCurrentUsage_not?: number;
    avCurrentUsage_in?: number[];
    avCurrentUsage_not_in?: number[];
    avCurrentUsage_lt?: number;
    avCurrentUsage_lte?: number;
    avCurrentUsage_gt?: number;
    avCurrentUsage_gte?: number;
    processingTime?: number;
    processingTime_not?: number;
    processingTime_in?: number[];
    processingTime_not_in?: number[];
    processingTime_lt?: number;
    processingTime_lte?: number;
    processingTime_gt?: number;
    processingTime_gte?: number;
    dateRecorded?: DateTime;
    dateRecorded_not?: DateTime;
    dateRecorded_in?: DateTime[];
    dateRecorded_not_in?: DateTime[];
    dateRecorded_lt?: DateTime;
    dateRecorded_lte?: DateTime;
    dateRecorded_gt?: DateTime;
    dateRecorded_gte?: DateTime;
    dateAddedToDatabase?: DateTime;
    dateAddedToDatabase_not?: DateTime;
    dateAddedToDatabase_in?: DateTime[];
    dateAddedToDatabase_not_in?: DateTime[];
    dateAddedToDatabase_lt?: DateTime;
    dateAddedToDatabase_lte?: DateTime;
    dateAddedToDatabase_gt?: DateTime;
    dateAddedToDatabase_gte?: DateTime;
}

export class AverageMinuteWhereUniqueInput {
    id?: string;
    dateRecorded?: DateTime;
}

export class MeasurementCreateInput {
    id?: string;
    gasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    currentUsage: number;
    dateRecorded: DateTime;
}

export class MeasurementSubscriptionWhereInput {
    AND?: MeasurementSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: MeasurementWhereInput;
}

export class MeasurementUpdateInput {
    gasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    currentUsage?: number;
    dateRecorded?: DateTime;
}

export class MeasurementUpdateManyMutationInput {
    gasUsage?: number;
    usageHigh?: number;
    usageLow?: number;
    returnHigh?: number;
    returnLow?: number;
    currentUsage?: number;
    dateRecorded?: DateTime;
}

export class MeasurementWhereInput {
    AND?: MeasurementWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    gasUsage?: number;
    gasUsage_not?: number;
    gasUsage_in?: number[];
    gasUsage_not_in?: number[];
    gasUsage_lt?: number;
    gasUsage_lte?: number;
    gasUsage_gt?: number;
    gasUsage_gte?: number;
    usageHigh?: number;
    usageHigh_not?: number;
    usageHigh_in?: number[];
    usageHigh_not_in?: number[];
    usageHigh_lt?: number;
    usageHigh_lte?: number;
    usageHigh_gt?: number;
    usageHigh_gte?: number;
    usageLow?: number;
    usageLow_not?: number;
    usageLow_in?: number[];
    usageLow_not_in?: number[];
    usageLow_lt?: number;
    usageLow_lte?: number;
    usageLow_gt?: number;
    usageLow_gte?: number;
    returnHigh?: number;
    returnHigh_not?: number;
    returnHigh_in?: number[];
    returnHigh_not_in?: number[];
    returnHigh_lt?: number;
    returnHigh_lte?: number;
    returnHigh_gt?: number;
    returnHigh_gte?: number;
    returnLow?: number;
    returnLow_not?: number;
    returnLow_in?: number[];
    returnLow_not_in?: number[];
    returnLow_lt?: number;
    returnLow_lte?: number;
    returnLow_gt?: number;
    returnLow_gte?: number;
    currentUsage?: number;
    currentUsage_not?: number;
    currentUsage_in?: number[];
    currentUsage_not_in?: number[];
    currentUsage_lt?: number;
    currentUsage_lte?: number;
    currentUsage_gt?: number;
    currentUsage_gte?: number;
    dateRecorded?: DateTime;
    dateRecorded_not?: DateTime;
    dateRecorded_in?: DateTime[];
    dateRecorded_not_in?: DateTime[];
    dateRecorded_lt?: DateTime;
    dateRecorded_lte?: DateTime;
    dateRecorded_gt?: DateTime;
    dateRecorded_gte?: DateTime;
    dateAddedToDatabase?: DateTime;
    dateAddedToDatabase_not?: DateTime;
    dateAddedToDatabase_in?: DateTime[];
    dateAddedToDatabase_not_in?: DateTime[];
    dateAddedToDatabase_lt?: DateTime;
    dateAddedToDatabase_lte?: DateTime;
    dateAddedToDatabase_gt?: DateTime;
    dateAddedToDatabase_gte?: DateTime;
}

export class MeasurementWhereUniqueInput {
    id?: string;
    dateRecorded?: DateTime;
}

export interface Node {
    id: string;
}

export class AggregateAverageDay {
    count: number;
}

export class AggregateAverageHour {
    count: number;
}

export class AggregateAverageMinute {
    count: number;
}

export class AggregateMeasurement {
    count: number;
}

export class AverageDay implements Node {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageDayConnection {
    pageInfo: PageInfo;
    edges: AverageDayEdge[];
    aggregate: AggregateAverageDay;
}

export class AverageDayEdge {
    node: AverageDay;
    cursor: string;
}

export class AverageDayPreviousValues {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageDaySubscriptionPayload {
    mutation: MutationType;
    node?: AverageDay;
    updatedFields?: string[];
    previousValues?: AverageDayPreviousValues;
}

export class AverageHour implements Node {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageHourConnection {
    pageInfo: PageInfo;
    edges: AverageHourEdge[];
    aggregate: AggregateAverageHour;
}

export class AverageHourEdge {
    node: AverageHour;
    cursor: string;
}

export class AverageHourPreviousValues {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageHourSubscriptionPayload {
    mutation: MutationType;
    node?: AverageHour;
    updatedFields?: string[];
    previousValues?: AverageHourPreviousValues;
}

export class AverageMinute implements Node {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageMinuteConnection {
    pageInfo: PageInfo;
    edges: AverageMinuteEdge[];
    aggregate: AggregateAverageMinute;
}

export class AverageMinuteEdge {
    node: AverageMinute;
    cursor: string;
}

export class AverageMinutePreviousValues {
    id: string;
    avGasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    avCurrentUsage: number;
    processingTime: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class AverageMinuteSubscriptionPayload {
    mutation: MutationType;
    node?: AverageMinute;
    updatedFields?: string[];
    previousValues?: AverageMinutePreviousValues;
}

export class BatchPayload {
    count: Long;
}

export class Measurement implements Node {
    id: string;
    gasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    currentUsage: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class MeasurementConnection {
    pageInfo: PageInfo;
    edges: MeasurementEdge[];
    aggregate: AggregateMeasurement;
}

export class MeasurementEdge {
    node: Measurement;
    cursor: string;
}

export class MeasurementPreviousValues {
    id: string;
    gasUsage: number;
    usageHigh: number;
    usageLow: number;
    returnHigh: number;
    returnLow: number;
    currentUsage: number;
    dateRecorded: DateTime;
    dateAddedToDatabase: DateTime;
}

export class MeasurementSubscriptionPayload {
    mutation: MutationType;
    node?: Measurement;
    updatedFields?: string[];
    previousValues?: MeasurementPreviousValues;
}

export abstract class IMutation {
    abstract createMeasurement(data: MeasurementCreateInput): Measurement | Promise<Measurement>;
    abstract createAverageMinute(data: AverageMinuteCreateInput): AverageMinute | Promise<AverageMinute>;
    abstract createAverageHour(data: AverageHourCreateInput): AverageHour | Promise<AverageHour>;
    abstract createAverageDay(data: AverageDayCreateInput): AverageDay | Promise<AverageDay>;
    abstract updateMeasurement(data: MeasurementUpdateInput, where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract updateAverageMinute(data: AverageMinuteUpdateInput, where: AverageMinuteWhereUniqueInput): AverageMinute | Promise<AverageMinute>;
    abstract updateAverageHour(data: AverageHourUpdateInput, where: AverageHourWhereUniqueInput): AverageHour | Promise<AverageHour>;
    abstract updateAverageDay(data: AverageDayUpdateInput, where: AverageDayWhereUniqueInput): AverageDay | Promise<AverageDay>;
    abstract deleteMeasurement(where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract deleteAverageMinute(where: AverageMinuteWhereUniqueInput): AverageMinute | Promise<AverageMinute>;
    abstract deleteAverageHour(where: AverageHourWhereUniqueInput): AverageHour | Promise<AverageHour>;
    abstract deleteAverageDay(where: AverageDayWhereUniqueInput): AverageDay | Promise<AverageDay>;
    abstract upsertMeasurement(where: MeasurementWhereUniqueInput, create: MeasurementCreateInput, update: MeasurementUpdateInput): Measurement | Promise<Measurement>;
    abstract upsertAverageMinute(where: AverageMinuteWhereUniqueInput, create: AverageMinuteCreateInput, update: AverageMinuteUpdateInput): AverageMinute | Promise<AverageMinute>;
    abstract upsertAverageHour(where: AverageHourWhereUniqueInput, create: AverageHourCreateInput, update: AverageHourUpdateInput): AverageHour | Promise<AverageHour>;
    abstract upsertAverageDay(where: AverageDayWhereUniqueInput, create: AverageDayCreateInput, update: AverageDayUpdateInput): AverageDay | Promise<AverageDay>;
    abstract updateManyMeasurements(data: MeasurementUpdateManyMutationInput, where?: MeasurementWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyAverageMinutes(data: AverageMinuteUpdateManyMutationInput, where?: AverageMinuteWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyAverageHours(data: AverageHourUpdateManyMutationInput, where?: AverageHourWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyAverageDays(data: AverageDayUpdateManyMutationInput, where?: AverageDayWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyMeasurements(where?: MeasurementWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAverageMinutes(where?: AverageMinuteWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAverageHours(where?: AverageHourWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAverageDays(where?: AverageDayWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract measurements(where?: MeasurementWhereInput, orderBy?: MeasurementOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Measurement[] | Promise<Measurement[]>;
    abstract averageMinutes(where?: AverageMinuteWhereInput, orderBy?: AverageMinuteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageMinute[] | Promise<AverageMinute[]>;
    abstract averageHours(where?: AverageHourWhereInput, orderBy?: AverageHourOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageHour[] | Promise<AverageHour[]>;
    abstract averageDays(where?: AverageDayWhereInput, orderBy?: AverageDayOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageDay[] | Promise<AverageDay[]>;
    abstract measurement(where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract averageMinute(where: AverageMinuteWhereUniqueInput): AverageMinute | Promise<AverageMinute>;
    abstract averageHour(where: AverageHourWhereUniqueInput): AverageHour | Promise<AverageHour>;
    abstract averageDay(where: AverageDayWhereUniqueInput): AverageDay | Promise<AverageDay>;
    abstract measurementsConnection(where?: MeasurementWhereInput, orderBy?: MeasurementOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MeasurementConnection | Promise<MeasurementConnection>;
    abstract averageMinutesConnection(where?: AverageMinuteWhereInput, orderBy?: AverageMinuteOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageMinuteConnection | Promise<AverageMinuteConnection>;
    abstract averageHoursConnection(where?: AverageHourWhereInput, orderBy?: AverageHourOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageHourConnection | Promise<AverageHourConnection>;
    abstract averageDaysConnection(where?: AverageDayWhereInput, orderBy?: AverageDayOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AverageDayConnection | Promise<AverageDayConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract measurement(where?: MeasurementSubscriptionWhereInput): MeasurementSubscriptionPayload | Promise<MeasurementSubscriptionPayload>;
    abstract averageMinute(where?: AverageMinuteSubscriptionWhereInput): AverageMinuteSubscriptionPayload | Promise<AverageMinuteSubscriptionPayload>;
    abstract averageHour(where?: AverageHourSubscriptionWhereInput): AverageHourSubscriptionPayload | Promise<AverageHourSubscriptionPayload>;
    abstract averageDay(where?: AverageDaySubscriptionWhereInput): AverageDaySubscriptionPayload | Promise<AverageDaySubscriptionPayload>;
}

export type DateTime = any;
export type Long = any;
