
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
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

export class AggregateMeasurement {
    count: number;
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
    abstract updateMeasurement(data: MeasurementUpdateInput, where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract deleteMeasurement(where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract upsertMeasurement(where: MeasurementWhereUniqueInput, create: MeasurementCreateInput, update: MeasurementUpdateInput): Measurement | Promise<Measurement>;
    abstract updateManyMeasurements(data: MeasurementUpdateManyMutationInput, where?: MeasurementWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyMeasurements(where?: MeasurementWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract measurements(where?: MeasurementWhereInput, orderBy?: MeasurementOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Measurement[] | Promise<Measurement[]>;
    abstract measurement(where: MeasurementWhereUniqueInput): Measurement | Promise<Measurement>;
    abstract measurementsConnection(where?: MeasurementWhereInput, orderBy?: MeasurementOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): MeasurementConnection | Promise<MeasurementConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export abstract class ISubscription {
    abstract measurement(where?: MeasurementSubscriptionWhereInput): MeasurementSubscriptionPayload | Promise<MeasurementSubscriptionPayload>;
}

export type DateTime = any;
export type Long = any;
