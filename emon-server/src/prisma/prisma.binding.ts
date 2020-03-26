import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    measurements: <T = Array<Measurement | null>>(args: { where?: MeasurementWhereInput | null, orderBy?: MeasurementOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageMinutes: <T = Array<AverageMinute | null>>(args: { where?: AverageMinuteWhereInput | null, orderBy?: AverageMinuteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageHours: <T = Array<AverageHour | null>>(args: { where?: AverageHourWhereInput | null, orderBy?: AverageHourOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageDays: <T = Array<AverageDay | null>>(args: { where?: AverageDayWhereInput | null, orderBy?: AverageDayOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    measurement: <T = Measurement | null>(args: { where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    averageMinute: <T = AverageMinute | null>(args: { where: AverageMinuteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    averageHour: <T = AverageHour | null>(args: { where: AverageHourWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    averageDay: <T = AverageDay | null>(args: { where: AverageDayWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    measurementsConnection: <T = MeasurementConnection>(args: { where?: MeasurementWhereInput | null, orderBy?: MeasurementOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageMinutesConnection: <T = AverageMinuteConnection>(args: { where?: AverageMinuteWhereInput | null, orderBy?: AverageMinuteOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageHoursConnection: <T = AverageHourConnection>(args: { where?: AverageHourWhereInput | null, orderBy?: AverageHourOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    averageDaysConnection: <T = AverageDayConnection>(args: { where?: AverageDayWhereInput | null, orderBy?: AverageDayOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createMeasurement: <T = Measurement>(args: { data: MeasurementCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAverageMinute: <T = AverageMinute>(args: { data: AverageMinuteCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAverageHour: <T = AverageHour>(args: { data: AverageHourCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAverageDay: <T = AverageDay>(args: { data: AverageDayCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeasurement: <T = Measurement | null>(args: { data: MeasurementUpdateInput, where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAverageMinute: <T = AverageMinute | null>(args: { data: AverageMinuteUpdateInput, where: AverageMinuteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAverageHour: <T = AverageHour | null>(args: { data: AverageHourUpdateInput, where: AverageHourWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAverageDay: <T = AverageDay | null>(args: { data: AverageDayUpdateInput, where: AverageDayWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMeasurement: <T = Measurement | null>(args: { where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAverageMinute: <T = AverageMinute | null>(args: { where: AverageMinuteWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAverageHour: <T = AverageHour | null>(args: { where: AverageHourWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAverageDay: <T = AverageDay | null>(args: { where: AverageDayWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertMeasurement: <T = Measurement>(args: { where: MeasurementWhereUniqueInput, create: MeasurementCreateInput, update: MeasurementUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAverageMinute: <T = AverageMinute>(args: { where: AverageMinuteWhereUniqueInput, create: AverageMinuteCreateInput, update: AverageMinuteUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAverageHour: <T = AverageHour>(args: { where: AverageHourWhereUniqueInput, create: AverageHourCreateInput, update: AverageHourUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAverageDay: <T = AverageDay>(args: { where: AverageDayWhereUniqueInput, create: AverageDayCreateInput, update: AverageDayUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeasurements: <T = BatchPayload>(args: { data: MeasurementUpdateManyMutationInput, where?: MeasurementWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAverageMinutes: <T = BatchPayload>(args: { data: AverageMinuteUpdateManyMutationInput, where?: AverageMinuteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAverageHours: <T = BatchPayload>(args: { data: AverageHourUpdateManyMutationInput, where?: AverageHourWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAverageDays: <T = BatchPayload>(args: { data: AverageDayUpdateManyMutationInput, where?: AverageDayWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeasurements: <T = BatchPayload>(args: { where?: MeasurementWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAverageMinutes: <T = BatchPayload>(args: { where?: AverageMinuteWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAverageHours: <T = BatchPayload>(args: { where?: AverageHourWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAverageDays: <T = BatchPayload>(args: { where?: AverageDayWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    measurement: <T = MeasurementSubscriptionPayload | null>(args: { where?: MeasurementSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    averageMinute: <T = AverageMinuteSubscriptionPayload | null>(args: { where?: AverageMinuteSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    averageHour: <T = AverageHourSubscriptionPayload | null>(args: { where?: AverageHourSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    averageDay: <T = AverageDaySubscriptionPayload | null>(args: { where?: AverageDaySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Measurement: (where?: MeasurementWhereInput) => Promise<boolean>
  AverageMinute: (where?: AverageMinuteWhereInput) => Promise<boolean>
  AverageHour: (where?: AverageHourWhereInput) => Promise<boolean>
  AverageDay: (where?: AverageDayWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAverageDay {
  count: Int!
}

type AggregateAverageHour {
  count: Int!
}

type AggregateAverageMinute {
  count: Int!
}

type AggregateMeasurement {
  count: Int!
}

type AverageDay implements Node {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

"""A connection to a list of items."""
type AverageDayConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AverageDayEdge]!
  aggregate: AggregateAverageDay!
}

input AverageDayCreateInput {
  id: ID
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
}

"""An edge in a connection."""
type AverageDayEdge {
  """The item at the end of the edge."""
  node: AverageDay!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AverageDayOrderByInput {
  id_ASC
  id_DESC
  avGasUsage_ASC
  avGasUsage_DESC
  usageHigh_ASC
  usageHigh_DESC
  usageLow_ASC
  usageLow_DESC
  returnHigh_ASC
  returnHigh_DESC
  returnLow_ASC
  returnLow_DESC
  avCurrentUsage_ASC
  avCurrentUsage_DESC
  processingTime_ASC
  processingTime_DESC
  dateRecorded_ASC
  dateRecorded_DESC
  dateAddedToDatabase_ASC
  dateAddedToDatabase_DESC
}

type AverageDayPreviousValues {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

type AverageDaySubscriptionPayload {
  mutation: MutationType!
  node: AverageDay
  updatedFields: [String!]
  previousValues: AverageDayPreviousValues
}

input AverageDaySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageDaySubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AverageDayWhereInput
}

input AverageDayUpdateInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageDayUpdateManyMutationInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageDayWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageDayWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  avGasUsage: Float

  """All values that are not equal to given value."""
  avGasUsage_not: Float

  """All values that are contained in given list."""
  avGasUsage_in: [Float!]

  """All values that are not contained in given list."""
  avGasUsage_not_in: [Float!]

  """All values less than the given value."""
  avGasUsage_lt: Float

  """All values less than or equal the given value."""
  avGasUsage_lte: Float

  """All values greater than the given value."""
  avGasUsage_gt: Float

  """All values greater than or equal the given value."""
  avGasUsage_gte: Float
  usageHigh: Float

  """All values that are not equal to given value."""
  usageHigh_not: Float

  """All values that are contained in given list."""
  usageHigh_in: [Float!]

  """All values that are not contained in given list."""
  usageHigh_not_in: [Float!]

  """All values less than the given value."""
  usageHigh_lt: Float

  """All values less than or equal the given value."""
  usageHigh_lte: Float

  """All values greater than the given value."""
  usageHigh_gt: Float

  """All values greater than or equal the given value."""
  usageHigh_gte: Float
  usageLow: Float

  """All values that are not equal to given value."""
  usageLow_not: Float

  """All values that are contained in given list."""
  usageLow_in: [Float!]

  """All values that are not contained in given list."""
  usageLow_not_in: [Float!]

  """All values less than the given value."""
  usageLow_lt: Float

  """All values less than or equal the given value."""
  usageLow_lte: Float

  """All values greater than the given value."""
  usageLow_gt: Float

  """All values greater than or equal the given value."""
  usageLow_gte: Float
  returnHigh: Float

  """All values that are not equal to given value."""
  returnHigh_not: Float

  """All values that are contained in given list."""
  returnHigh_in: [Float!]

  """All values that are not contained in given list."""
  returnHigh_not_in: [Float!]

  """All values less than the given value."""
  returnHigh_lt: Float

  """All values less than or equal the given value."""
  returnHigh_lte: Float

  """All values greater than the given value."""
  returnHigh_gt: Float

  """All values greater than or equal the given value."""
  returnHigh_gte: Float
  returnLow: Float

  """All values that are not equal to given value."""
  returnLow_not: Float

  """All values that are contained in given list."""
  returnLow_in: [Float!]

  """All values that are not contained in given list."""
  returnLow_not_in: [Float!]

  """All values less than the given value."""
  returnLow_lt: Float

  """All values less than or equal the given value."""
  returnLow_lte: Float

  """All values greater than the given value."""
  returnLow_gt: Float

  """All values greater than or equal the given value."""
  returnLow_gte: Float
  avCurrentUsage: Float

  """All values that are not equal to given value."""
  avCurrentUsage_not: Float

  """All values that are contained in given list."""
  avCurrentUsage_in: [Float!]

  """All values that are not contained in given list."""
  avCurrentUsage_not_in: [Float!]

  """All values less than the given value."""
  avCurrentUsage_lt: Float

  """All values less than or equal the given value."""
  avCurrentUsage_lte: Float

  """All values greater than the given value."""
  avCurrentUsage_gt: Float

  """All values greater than or equal the given value."""
  avCurrentUsage_gte: Float
  processingTime: Float

  """All values that are not equal to given value."""
  processingTime_not: Float

  """All values that are contained in given list."""
  processingTime_in: [Float!]

  """All values that are not contained in given list."""
  processingTime_not_in: [Float!]

  """All values less than the given value."""
  processingTime_lt: Float

  """All values less than or equal the given value."""
  processingTime_lte: Float

  """All values greater than the given value."""
  processingTime_gt: Float

  """All values greater than or equal the given value."""
  processingTime_gte: Float
  dateRecorded: DateTime

  """All values that are not equal to given value."""
  dateRecorded_not: DateTime

  """All values that are contained in given list."""
  dateRecorded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateRecorded_not_in: [DateTime!]

  """All values less than the given value."""
  dateRecorded_lt: DateTime

  """All values less than or equal the given value."""
  dateRecorded_lte: DateTime

  """All values greater than the given value."""
  dateRecorded_gt: DateTime

  """All values greater than or equal the given value."""
  dateRecorded_gte: DateTime
  dateAddedToDatabase: DateTime

  """All values that are not equal to given value."""
  dateAddedToDatabase_not: DateTime

  """All values that are contained in given list."""
  dateAddedToDatabase_in: [DateTime!]

  """All values that are not contained in given list."""
  dateAddedToDatabase_not_in: [DateTime!]

  """All values less than the given value."""
  dateAddedToDatabase_lt: DateTime

  """All values less than or equal the given value."""
  dateAddedToDatabase_lte: DateTime

  """All values greater than the given value."""
  dateAddedToDatabase_gt: DateTime

  """All values greater than or equal the given value."""
  dateAddedToDatabase_gte: DateTime
}

input AverageDayWhereUniqueInput {
  id: ID
  dateRecorded: DateTime
}

type AverageHour implements Node {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

"""A connection to a list of items."""
type AverageHourConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AverageHourEdge]!
  aggregate: AggregateAverageHour!
}

input AverageHourCreateInput {
  id: ID
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
}

"""An edge in a connection."""
type AverageHourEdge {
  """The item at the end of the edge."""
  node: AverageHour!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AverageHourOrderByInput {
  id_ASC
  id_DESC
  avGasUsage_ASC
  avGasUsage_DESC
  usageHigh_ASC
  usageHigh_DESC
  usageLow_ASC
  usageLow_DESC
  returnHigh_ASC
  returnHigh_DESC
  returnLow_ASC
  returnLow_DESC
  avCurrentUsage_ASC
  avCurrentUsage_DESC
  processingTime_ASC
  processingTime_DESC
  dateRecorded_ASC
  dateRecorded_DESC
  dateAddedToDatabase_ASC
  dateAddedToDatabase_DESC
}

type AverageHourPreviousValues {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

type AverageHourSubscriptionPayload {
  mutation: MutationType!
  node: AverageHour
  updatedFields: [String!]
  previousValues: AverageHourPreviousValues
}

input AverageHourSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageHourSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AverageHourWhereInput
}

input AverageHourUpdateInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageHourUpdateManyMutationInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageHourWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageHourWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  avGasUsage: Float

  """All values that are not equal to given value."""
  avGasUsage_not: Float

  """All values that are contained in given list."""
  avGasUsage_in: [Float!]

  """All values that are not contained in given list."""
  avGasUsage_not_in: [Float!]

  """All values less than the given value."""
  avGasUsage_lt: Float

  """All values less than or equal the given value."""
  avGasUsage_lte: Float

  """All values greater than the given value."""
  avGasUsage_gt: Float

  """All values greater than or equal the given value."""
  avGasUsage_gte: Float
  usageHigh: Float

  """All values that are not equal to given value."""
  usageHigh_not: Float

  """All values that are contained in given list."""
  usageHigh_in: [Float!]

  """All values that are not contained in given list."""
  usageHigh_not_in: [Float!]

  """All values less than the given value."""
  usageHigh_lt: Float

  """All values less than or equal the given value."""
  usageHigh_lte: Float

  """All values greater than the given value."""
  usageHigh_gt: Float

  """All values greater than or equal the given value."""
  usageHigh_gte: Float
  usageLow: Float

  """All values that are not equal to given value."""
  usageLow_not: Float

  """All values that are contained in given list."""
  usageLow_in: [Float!]

  """All values that are not contained in given list."""
  usageLow_not_in: [Float!]

  """All values less than the given value."""
  usageLow_lt: Float

  """All values less than or equal the given value."""
  usageLow_lte: Float

  """All values greater than the given value."""
  usageLow_gt: Float

  """All values greater than or equal the given value."""
  usageLow_gte: Float
  returnHigh: Float

  """All values that are not equal to given value."""
  returnHigh_not: Float

  """All values that are contained in given list."""
  returnHigh_in: [Float!]

  """All values that are not contained in given list."""
  returnHigh_not_in: [Float!]

  """All values less than the given value."""
  returnHigh_lt: Float

  """All values less than or equal the given value."""
  returnHigh_lte: Float

  """All values greater than the given value."""
  returnHigh_gt: Float

  """All values greater than or equal the given value."""
  returnHigh_gte: Float
  returnLow: Float

  """All values that are not equal to given value."""
  returnLow_not: Float

  """All values that are contained in given list."""
  returnLow_in: [Float!]

  """All values that are not contained in given list."""
  returnLow_not_in: [Float!]

  """All values less than the given value."""
  returnLow_lt: Float

  """All values less than or equal the given value."""
  returnLow_lte: Float

  """All values greater than the given value."""
  returnLow_gt: Float

  """All values greater than or equal the given value."""
  returnLow_gte: Float
  avCurrentUsage: Float

  """All values that are not equal to given value."""
  avCurrentUsage_not: Float

  """All values that are contained in given list."""
  avCurrentUsage_in: [Float!]

  """All values that are not contained in given list."""
  avCurrentUsage_not_in: [Float!]

  """All values less than the given value."""
  avCurrentUsage_lt: Float

  """All values less than or equal the given value."""
  avCurrentUsage_lte: Float

  """All values greater than the given value."""
  avCurrentUsage_gt: Float

  """All values greater than or equal the given value."""
  avCurrentUsage_gte: Float
  processingTime: Float

  """All values that are not equal to given value."""
  processingTime_not: Float

  """All values that are contained in given list."""
  processingTime_in: [Float!]

  """All values that are not contained in given list."""
  processingTime_not_in: [Float!]

  """All values less than the given value."""
  processingTime_lt: Float

  """All values less than or equal the given value."""
  processingTime_lte: Float

  """All values greater than the given value."""
  processingTime_gt: Float

  """All values greater than or equal the given value."""
  processingTime_gte: Float
  dateRecorded: DateTime

  """All values that are not equal to given value."""
  dateRecorded_not: DateTime

  """All values that are contained in given list."""
  dateRecorded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateRecorded_not_in: [DateTime!]

  """All values less than the given value."""
  dateRecorded_lt: DateTime

  """All values less than or equal the given value."""
  dateRecorded_lte: DateTime

  """All values greater than the given value."""
  dateRecorded_gt: DateTime

  """All values greater than or equal the given value."""
  dateRecorded_gte: DateTime
  dateAddedToDatabase: DateTime

  """All values that are not equal to given value."""
  dateAddedToDatabase_not: DateTime

  """All values that are contained in given list."""
  dateAddedToDatabase_in: [DateTime!]

  """All values that are not contained in given list."""
  dateAddedToDatabase_not_in: [DateTime!]

  """All values less than the given value."""
  dateAddedToDatabase_lt: DateTime

  """All values less than or equal the given value."""
  dateAddedToDatabase_lte: DateTime

  """All values greater than the given value."""
  dateAddedToDatabase_gt: DateTime

  """All values greater than or equal the given value."""
  dateAddedToDatabase_gte: DateTime
}

input AverageHourWhereUniqueInput {
  id: ID
  dateRecorded: DateTime
}

type AverageMinute implements Node {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

"""A connection to a list of items."""
type AverageMinuteConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AverageMinuteEdge]!
  aggregate: AggregateAverageMinute!
}

input AverageMinuteCreateInput {
  id: ID
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
}

"""An edge in a connection."""
type AverageMinuteEdge {
  """The item at the end of the edge."""
  node: AverageMinute!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AverageMinuteOrderByInput {
  id_ASC
  id_DESC
  avGasUsage_ASC
  avGasUsage_DESC
  usageHigh_ASC
  usageHigh_DESC
  usageLow_ASC
  usageLow_DESC
  returnHigh_ASC
  returnHigh_DESC
  returnLow_ASC
  returnLow_DESC
  avCurrentUsage_ASC
  avCurrentUsage_DESC
  processingTime_ASC
  processingTime_DESC
  dateRecorded_ASC
  dateRecorded_DESC
  dateAddedToDatabase_ASC
  dateAddedToDatabase_DESC
}

type AverageMinutePreviousValues {
  id: ID!
  avGasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  avCurrentUsage: Float!
  processingTime: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

type AverageMinuteSubscriptionPayload {
  mutation: MutationType!
  node: AverageMinute
  updatedFields: [String!]
  previousValues: AverageMinutePreviousValues
}

input AverageMinuteSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageMinuteSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AverageMinuteWhereInput
}

input AverageMinuteUpdateInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageMinuteUpdateManyMutationInput {
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

input AverageMinuteWhereInput {
  """Logical AND on all given filters."""
  AND: [AverageMinuteWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  avGasUsage: Float

  """All values that are not equal to given value."""
  avGasUsage_not: Float

  """All values that are contained in given list."""
  avGasUsage_in: [Float!]

  """All values that are not contained in given list."""
  avGasUsage_not_in: [Float!]

  """All values less than the given value."""
  avGasUsage_lt: Float

  """All values less than or equal the given value."""
  avGasUsage_lte: Float

  """All values greater than the given value."""
  avGasUsage_gt: Float

  """All values greater than or equal the given value."""
  avGasUsage_gte: Float
  usageHigh: Float

  """All values that are not equal to given value."""
  usageHigh_not: Float

  """All values that are contained in given list."""
  usageHigh_in: [Float!]

  """All values that are not contained in given list."""
  usageHigh_not_in: [Float!]

  """All values less than the given value."""
  usageHigh_lt: Float

  """All values less than or equal the given value."""
  usageHigh_lte: Float

  """All values greater than the given value."""
  usageHigh_gt: Float

  """All values greater than or equal the given value."""
  usageHigh_gte: Float
  usageLow: Float

  """All values that are not equal to given value."""
  usageLow_not: Float

  """All values that are contained in given list."""
  usageLow_in: [Float!]

  """All values that are not contained in given list."""
  usageLow_not_in: [Float!]

  """All values less than the given value."""
  usageLow_lt: Float

  """All values less than or equal the given value."""
  usageLow_lte: Float

  """All values greater than the given value."""
  usageLow_gt: Float

  """All values greater than or equal the given value."""
  usageLow_gte: Float
  returnHigh: Float

  """All values that are not equal to given value."""
  returnHigh_not: Float

  """All values that are contained in given list."""
  returnHigh_in: [Float!]

  """All values that are not contained in given list."""
  returnHigh_not_in: [Float!]

  """All values less than the given value."""
  returnHigh_lt: Float

  """All values less than or equal the given value."""
  returnHigh_lte: Float

  """All values greater than the given value."""
  returnHigh_gt: Float

  """All values greater than or equal the given value."""
  returnHigh_gte: Float
  returnLow: Float

  """All values that are not equal to given value."""
  returnLow_not: Float

  """All values that are contained in given list."""
  returnLow_in: [Float!]

  """All values that are not contained in given list."""
  returnLow_not_in: [Float!]

  """All values less than the given value."""
  returnLow_lt: Float

  """All values less than or equal the given value."""
  returnLow_lte: Float

  """All values greater than the given value."""
  returnLow_gt: Float

  """All values greater than or equal the given value."""
  returnLow_gte: Float
  avCurrentUsage: Float

  """All values that are not equal to given value."""
  avCurrentUsage_not: Float

  """All values that are contained in given list."""
  avCurrentUsage_in: [Float!]

  """All values that are not contained in given list."""
  avCurrentUsage_not_in: [Float!]

  """All values less than the given value."""
  avCurrentUsage_lt: Float

  """All values less than or equal the given value."""
  avCurrentUsage_lte: Float

  """All values greater than the given value."""
  avCurrentUsage_gt: Float

  """All values greater than or equal the given value."""
  avCurrentUsage_gte: Float
  processingTime: Float

  """All values that are not equal to given value."""
  processingTime_not: Float

  """All values that are contained in given list."""
  processingTime_in: [Float!]

  """All values that are not contained in given list."""
  processingTime_not_in: [Float!]

  """All values less than the given value."""
  processingTime_lt: Float

  """All values less than or equal the given value."""
  processingTime_lte: Float

  """All values greater than the given value."""
  processingTime_gt: Float

  """All values greater than or equal the given value."""
  processingTime_gte: Float
  dateRecorded: DateTime

  """All values that are not equal to given value."""
  dateRecorded_not: DateTime

  """All values that are contained in given list."""
  dateRecorded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateRecorded_not_in: [DateTime!]

  """All values less than the given value."""
  dateRecorded_lt: DateTime

  """All values less than or equal the given value."""
  dateRecorded_lte: DateTime

  """All values greater than the given value."""
  dateRecorded_gt: DateTime

  """All values greater than or equal the given value."""
  dateRecorded_gte: DateTime
  dateAddedToDatabase: DateTime

  """All values that are not equal to given value."""
  dateAddedToDatabase_not: DateTime

  """All values that are contained in given list."""
  dateAddedToDatabase_in: [DateTime!]

  """All values that are not contained in given list."""
  dateAddedToDatabase_not_in: [DateTime!]

  """All values less than the given value."""
  dateAddedToDatabase_lt: DateTime

  """All values less than or equal the given value."""
  dateAddedToDatabase_lte: DateTime

  """All values greater than the given value."""
  dateAddedToDatabase_gt: DateTime

  """All values greater than or equal the given value."""
  dateAddedToDatabase_gte: DateTime
}

input AverageMinuteWhereUniqueInput {
  id: ID
  dateRecorded: DateTime
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Measurement implements Node {
  id: ID!
  gasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  currentUsage: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

"""A connection to a list of items."""
type MeasurementConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MeasurementEdge]!
  aggregate: AggregateMeasurement!
}

input MeasurementCreateInput {
  id: ID
  gasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  currentUsage: Float!
  dateRecorded: DateTime!
}

"""An edge in a connection."""
type MeasurementEdge {
  """The item at the end of the edge."""
  node: Measurement!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MeasurementOrderByInput {
  id_ASC
  id_DESC
  gasUsage_ASC
  gasUsage_DESC
  usageHigh_ASC
  usageHigh_DESC
  usageLow_ASC
  usageLow_DESC
  returnHigh_ASC
  returnHigh_DESC
  returnLow_ASC
  returnLow_DESC
  currentUsage_ASC
  currentUsage_DESC
  dateRecorded_ASC
  dateRecorded_DESC
  dateAddedToDatabase_ASC
  dateAddedToDatabase_DESC
}

type MeasurementPreviousValues {
  id: ID!
  gasUsage: Float!
  usageHigh: Float!
  usageLow: Float!
  returnHigh: Float!
  returnLow: Float!
  currentUsage: Float!
  dateRecorded: DateTime!
  dateAddedToDatabase: DateTime!
}

type MeasurementSubscriptionPayload {
  mutation: MutationType!
  node: Measurement
  updatedFields: [String!]
  previousValues: MeasurementPreviousValues
}

input MeasurementSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MeasurementSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MeasurementWhereInput
}

input MeasurementUpdateInput {
  gasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  currentUsage: Float
  dateRecorded: DateTime
}

input MeasurementUpdateManyMutationInput {
  gasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  currentUsage: Float
  dateRecorded: DateTime
}

input MeasurementWhereInput {
  """Logical AND on all given filters."""
  AND: [MeasurementWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  gasUsage: Float

  """All values that are not equal to given value."""
  gasUsage_not: Float

  """All values that are contained in given list."""
  gasUsage_in: [Float!]

  """All values that are not contained in given list."""
  gasUsage_not_in: [Float!]

  """All values less than the given value."""
  gasUsage_lt: Float

  """All values less than or equal the given value."""
  gasUsage_lte: Float

  """All values greater than the given value."""
  gasUsage_gt: Float

  """All values greater than or equal the given value."""
  gasUsage_gte: Float
  usageHigh: Float

  """All values that are not equal to given value."""
  usageHigh_not: Float

  """All values that are contained in given list."""
  usageHigh_in: [Float!]

  """All values that are not contained in given list."""
  usageHigh_not_in: [Float!]

  """All values less than the given value."""
  usageHigh_lt: Float

  """All values less than or equal the given value."""
  usageHigh_lte: Float

  """All values greater than the given value."""
  usageHigh_gt: Float

  """All values greater than or equal the given value."""
  usageHigh_gte: Float
  usageLow: Float

  """All values that are not equal to given value."""
  usageLow_not: Float

  """All values that are contained in given list."""
  usageLow_in: [Float!]

  """All values that are not contained in given list."""
  usageLow_not_in: [Float!]

  """All values less than the given value."""
  usageLow_lt: Float

  """All values less than or equal the given value."""
  usageLow_lte: Float

  """All values greater than the given value."""
  usageLow_gt: Float

  """All values greater than or equal the given value."""
  usageLow_gte: Float
  returnHigh: Float

  """All values that are not equal to given value."""
  returnHigh_not: Float

  """All values that are contained in given list."""
  returnHigh_in: [Float!]

  """All values that are not contained in given list."""
  returnHigh_not_in: [Float!]

  """All values less than the given value."""
  returnHigh_lt: Float

  """All values less than or equal the given value."""
  returnHigh_lte: Float

  """All values greater than the given value."""
  returnHigh_gt: Float

  """All values greater than or equal the given value."""
  returnHigh_gte: Float
  returnLow: Float

  """All values that are not equal to given value."""
  returnLow_not: Float

  """All values that are contained in given list."""
  returnLow_in: [Float!]

  """All values that are not contained in given list."""
  returnLow_not_in: [Float!]

  """All values less than the given value."""
  returnLow_lt: Float

  """All values less than or equal the given value."""
  returnLow_lte: Float

  """All values greater than the given value."""
  returnLow_gt: Float

  """All values greater than or equal the given value."""
  returnLow_gte: Float
  currentUsage: Float

  """All values that are not equal to given value."""
  currentUsage_not: Float

  """All values that are contained in given list."""
  currentUsage_in: [Float!]

  """All values that are not contained in given list."""
  currentUsage_not_in: [Float!]

  """All values less than the given value."""
  currentUsage_lt: Float

  """All values less than or equal the given value."""
  currentUsage_lte: Float

  """All values greater than the given value."""
  currentUsage_gt: Float

  """All values greater than or equal the given value."""
  currentUsage_gte: Float
  dateRecorded: DateTime

  """All values that are not equal to given value."""
  dateRecorded_not: DateTime

  """All values that are contained in given list."""
  dateRecorded_in: [DateTime!]

  """All values that are not contained in given list."""
  dateRecorded_not_in: [DateTime!]

  """All values less than the given value."""
  dateRecorded_lt: DateTime

  """All values less than or equal the given value."""
  dateRecorded_lte: DateTime

  """All values greater than the given value."""
  dateRecorded_gt: DateTime

  """All values greater than or equal the given value."""
  dateRecorded_gte: DateTime
  dateAddedToDatabase: DateTime

  """All values that are not equal to given value."""
  dateAddedToDatabase_not: DateTime

  """All values that are contained in given list."""
  dateAddedToDatabase_in: [DateTime!]

  """All values that are not contained in given list."""
  dateAddedToDatabase_not_in: [DateTime!]

  """All values less than the given value."""
  dateAddedToDatabase_lt: DateTime

  """All values less than or equal the given value."""
  dateAddedToDatabase_lte: DateTime

  """All values greater than the given value."""
  dateAddedToDatabase_gt: DateTime

  """All values greater than or equal the given value."""
  dateAddedToDatabase_gte: DateTime
}

input MeasurementWhereUniqueInput {
  id: ID
  dateRecorded: DateTime
}

type Mutation {
  createMeasurement(data: MeasurementCreateInput!): Measurement!
  createAverageMinute(data: AverageMinuteCreateInput!): AverageMinute!
  createAverageHour(data: AverageHourCreateInput!): AverageHour!
  createAverageDay(data: AverageDayCreateInput!): AverageDay!
  updateMeasurement(data: MeasurementUpdateInput!, where: MeasurementWhereUniqueInput!): Measurement
  updateAverageMinute(data: AverageMinuteUpdateInput!, where: AverageMinuteWhereUniqueInput!): AverageMinute
  updateAverageHour(data: AverageHourUpdateInput!, where: AverageHourWhereUniqueInput!): AverageHour
  updateAverageDay(data: AverageDayUpdateInput!, where: AverageDayWhereUniqueInput!): AverageDay
  deleteMeasurement(where: MeasurementWhereUniqueInput!): Measurement
  deleteAverageMinute(where: AverageMinuteWhereUniqueInput!): AverageMinute
  deleteAverageHour(where: AverageHourWhereUniqueInput!): AverageHour
  deleteAverageDay(where: AverageDayWhereUniqueInput!): AverageDay
  upsertMeasurement(where: MeasurementWhereUniqueInput!, create: MeasurementCreateInput!, update: MeasurementUpdateInput!): Measurement!
  upsertAverageMinute(where: AverageMinuteWhereUniqueInput!, create: AverageMinuteCreateInput!, update: AverageMinuteUpdateInput!): AverageMinute!
  upsertAverageHour(where: AverageHourWhereUniqueInput!, create: AverageHourCreateInput!, update: AverageHourUpdateInput!): AverageHour!
  upsertAverageDay(where: AverageDayWhereUniqueInput!, create: AverageDayCreateInput!, update: AverageDayUpdateInput!): AverageDay!
  updateManyMeasurements(data: MeasurementUpdateManyMutationInput!, where: MeasurementWhereInput): BatchPayload!
  updateManyAverageMinutes(data: AverageMinuteUpdateManyMutationInput!, where: AverageMinuteWhereInput): BatchPayload!
  updateManyAverageHours(data: AverageHourUpdateManyMutationInput!, where: AverageHourWhereInput): BatchPayload!
  updateManyAverageDays(data: AverageDayUpdateManyMutationInput!, where: AverageDayWhereInput): BatchPayload!
  deleteManyMeasurements(where: MeasurementWhereInput): BatchPayload!
  deleteManyAverageMinutes(where: AverageMinuteWhereInput): BatchPayload!
  deleteManyAverageHours(where: AverageHourWhereInput): BatchPayload!
  deleteManyAverageDays(where: AverageDayWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  measurements(where: MeasurementWhereInput, orderBy: MeasurementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Measurement]!
  averageMinutes(where: AverageMinuteWhereInput, orderBy: AverageMinuteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AverageMinute]!
  averageHours(where: AverageHourWhereInput, orderBy: AverageHourOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AverageHour]!
  averageDays(where: AverageDayWhereInput, orderBy: AverageDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AverageDay]!
  measurement(where: MeasurementWhereUniqueInput!): Measurement
  averageMinute(where: AverageMinuteWhereUniqueInput!): AverageMinute
  averageHour(where: AverageHourWhereUniqueInput!): AverageHour
  averageDay(where: AverageDayWhereUniqueInput!): AverageDay
  measurementsConnection(where: MeasurementWhereInput, orderBy: MeasurementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeasurementConnection!
  averageMinutesConnection(where: AverageMinuteWhereInput, orderBy: AverageMinuteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AverageMinuteConnection!
  averageHoursConnection(where: AverageHourWhereInput, orderBy: AverageHourOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AverageHourConnection!
  averageDaysConnection(where: AverageDayWhereInput, orderBy: AverageDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AverageDayConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  measurement(where: MeasurementSubscriptionWhereInput): MeasurementSubscriptionPayload
  averageMinute(where: AverageMinuteSubscriptionWhereInput): AverageMinuteSubscriptionPayload
  averageHour(where: AverageHourSubscriptionWhereInput): AverageHourSubscriptionPayload
  averageDay(where: AverageDaySubscriptionWhereInput): AverageDaySubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AverageDayOrderByInput =   'id_ASC' |
  'id_DESC' |
  'avGasUsage_ASC' |
  'avGasUsage_DESC' |
  'usageHigh_ASC' |
  'usageHigh_DESC' |
  'usageLow_ASC' |
  'usageLow_DESC' |
  'returnHigh_ASC' |
  'returnHigh_DESC' |
  'returnLow_ASC' |
  'returnLow_DESC' |
  'avCurrentUsage_ASC' |
  'avCurrentUsage_DESC' |
  'processingTime_ASC' |
  'processingTime_DESC' |
  'dateRecorded_ASC' |
  'dateRecorded_DESC' |
  'dateAddedToDatabase_ASC' |
  'dateAddedToDatabase_DESC'

export type AverageHourOrderByInput =   'id_ASC' |
  'id_DESC' |
  'avGasUsage_ASC' |
  'avGasUsage_DESC' |
  'usageHigh_ASC' |
  'usageHigh_DESC' |
  'usageLow_ASC' |
  'usageLow_DESC' |
  'returnHigh_ASC' |
  'returnHigh_DESC' |
  'returnLow_ASC' |
  'returnLow_DESC' |
  'avCurrentUsage_ASC' |
  'avCurrentUsage_DESC' |
  'processingTime_ASC' |
  'processingTime_DESC' |
  'dateRecorded_ASC' |
  'dateRecorded_DESC' |
  'dateAddedToDatabase_ASC' |
  'dateAddedToDatabase_DESC'

export type AverageMinuteOrderByInput =   'id_ASC' |
  'id_DESC' |
  'avGasUsage_ASC' |
  'avGasUsage_DESC' |
  'usageHigh_ASC' |
  'usageHigh_DESC' |
  'usageLow_ASC' |
  'usageLow_DESC' |
  'returnHigh_ASC' |
  'returnHigh_DESC' |
  'returnLow_ASC' |
  'returnLow_DESC' |
  'avCurrentUsage_ASC' |
  'avCurrentUsage_DESC' |
  'processingTime_ASC' |
  'processingTime_DESC' |
  'dateRecorded_ASC' |
  'dateRecorded_DESC' |
  'dateAddedToDatabase_ASC' |
  'dateAddedToDatabase_DESC'

export type MeasurementOrderByInput =   'id_ASC' |
  'id_DESC' |
  'gasUsage_ASC' |
  'gasUsage_DESC' |
  'usageHigh_ASC' |
  'usageHigh_DESC' |
  'usageLow_ASC' |
  'usageLow_DESC' |
  'returnHigh_ASC' |
  'returnHigh_DESC' |
  'returnLow_ASC' |
  'returnLow_DESC' |
  'currentUsage_ASC' |
  'currentUsage_DESC' |
  'dateRecorded_ASC' |
  'dateRecorded_DESC' |
  'dateAddedToDatabase_ASC' |
  'dateAddedToDatabase_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface AverageDayCreateInput {
  id?: ID_Input | null
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

export interface AverageDaySubscriptionWhereInput {
  AND?: AverageDaySubscriptionWhereInput[] | AverageDaySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AverageDayWhereInput | null
}

export interface AverageDayUpdateInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageDayUpdateManyMutationInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageDayWhereInput {
  AND?: AverageDayWhereInput[] | AverageDayWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  avGasUsage?: Float | null
  avGasUsage_not?: Float | null
  avGasUsage_in?: Float[] | Float | null
  avGasUsage_not_in?: Float[] | Float | null
  avGasUsage_lt?: Float | null
  avGasUsage_lte?: Float | null
  avGasUsage_gt?: Float | null
  avGasUsage_gte?: Float | null
  usageHigh?: Float | null
  usageHigh_not?: Float | null
  usageHigh_in?: Float[] | Float | null
  usageHigh_not_in?: Float[] | Float | null
  usageHigh_lt?: Float | null
  usageHigh_lte?: Float | null
  usageHigh_gt?: Float | null
  usageHigh_gte?: Float | null
  usageLow?: Float | null
  usageLow_not?: Float | null
  usageLow_in?: Float[] | Float | null
  usageLow_not_in?: Float[] | Float | null
  usageLow_lt?: Float | null
  usageLow_lte?: Float | null
  usageLow_gt?: Float | null
  usageLow_gte?: Float | null
  returnHigh?: Float | null
  returnHigh_not?: Float | null
  returnHigh_in?: Float[] | Float | null
  returnHigh_not_in?: Float[] | Float | null
  returnHigh_lt?: Float | null
  returnHigh_lte?: Float | null
  returnHigh_gt?: Float | null
  returnHigh_gte?: Float | null
  returnLow?: Float | null
  returnLow_not?: Float | null
  returnLow_in?: Float[] | Float | null
  returnLow_not_in?: Float[] | Float | null
  returnLow_lt?: Float | null
  returnLow_lte?: Float | null
  returnLow_gt?: Float | null
  returnLow_gte?: Float | null
  avCurrentUsage?: Float | null
  avCurrentUsage_not?: Float | null
  avCurrentUsage_in?: Float[] | Float | null
  avCurrentUsage_not_in?: Float[] | Float | null
  avCurrentUsage_lt?: Float | null
  avCurrentUsage_lte?: Float | null
  avCurrentUsage_gt?: Float | null
  avCurrentUsage_gte?: Float | null
  processingTime?: Float | null
  processingTime_not?: Float | null
  processingTime_in?: Float[] | Float | null
  processingTime_not_in?: Float[] | Float | null
  processingTime_lt?: Float | null
  processingTime_lte?: Float | null
  processingTime_gt?: Float | null
  processingTime_gte?: Float | null
  dateRecorded?: DateTime | null
  dateRecorded_not?: DateTime | null
  dateRecorded_in?: DateTime[] | DateTime | null
  dateRecorded_not_in?: DateTime[] | DateTime | null
  dateRecorded_lt?: DateTime | null
  dateRecorded_lte?: DateTime | null
  dateRecorded_gt?: DateTime | null
  dateRecorded_gte?: DateTime | null
  dateAddedToDatabase?: DateTime | null
  dateAddedToDatabase_not?: DateTime | null
  dateAddedToDatabase_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_not_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_lt?: DateTime | null
  dateAddedToDatabase_lte?: DateTime | null
  dateAddedToDatabase_gt?: DateTime | null
  dateAddedToDatabase_gte?: DateTime | null
}

export interface AverageDayWhereUniqueInput {
  id?: ID_Input | null
  dateRecorded?: DateTime | null
}

export interface AverageHourCreateInput {
  id?: ID_Input | null
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

export interface AverageHourSubscriptionWhereInput {
  AND?: AverageHourSubscriptionWhereInput[] | AverageHourSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AverageHourWhereInput | null
}

export interface AverageHourUpdateInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageHourUpdateManyMutationInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageHourWhereInput {
  AND?: AverageHourWhereInput[] | AverageHourWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  avGasUsage?: Float | null
  avGasUsage_not?: Float | null
  avGasUsage_in?: Float[] | Float | null
  avGasUsage_not_in?: Float[] | Float | null
  avGasUsage_lt?: Float | null
  avGasUsage_lte?: Float | null
  avGasUsage_gt?: Float | null
  avGasUsage_gte?: Float | null
  usageHigh?: Float | null
  usageHigh_not?: Float | null
  usageHigh_in?: Float[] | Float | null
  usageHigh_not_in?: Float[] | Float | null
  usageHigh_lt?: Float | null
  usageHigh_lte?: Float | null
  usageHigh_gt?: Float | null
  usageHigh_gte?: Float | null
  usageLow?: Float | null
  usageLow_not?: Float | null
  usageLow_in?: Float[] | Float | null
  usageLow_not_in?: Float[] | Float | null
  usageLow_lt?: Float | null
  usageLow_lte?: Float | null
  usageLow_gt?: Float | null
  usageLow_gte?: Float | null
  returnHigh?: Float | null
  returnHigh_not?: Float | null
  returnHigh_in?: Float[] | Float | null
  returnHigh_not_in?: Float[] | Float | null
  returnHigh_lt?: Float | null
  returnHigh_lte?: Float | null
  returnHigh_gt?: Float | null
  returnHigh_gte?: Float | null
  returnLow?: Float | null
  returnLow_not?: Float | null
  returnLow_in?: Float[] | Float | null
  returnLow_not_in?: Float[] | Float | null
  returnLow_lt?: Float | null
  returnLow_lte?: Float | null
  returnLow_gt?: Float | null
  returnLow_gte?: Float | null
  avCurrentUsage?: Float | null
  avCurrentUsage_not?: Float | null
  avCurrentUsage_in?: Float[] | Float | null
  avCurrentUsage_not_in?: Float[] | Float | null
  avCurrentUsage_lt?: Float | null
  avCurrentUsage_lte?: Float | null
  avCurrentUsage_gt?: Float | null
  avCurrentUsage_gte?: Float | null
  processingTime?: Float | null
  processingTime_not?: Float | null
  processingTime_in?: Float[] | Float | null
  processingTime_not_in?: Float[] | Float | null
  processingTime_lt?: Float | null
  processingTime_lte?: Float | null
  processingTime_gt?: Float | null
  processingTime_gte?: Float | null
  dateRecorded?: DateTime | null
  dateRecorded_not?: DateTime | null
  dateRecorded_in?: DateTime[] | DateTime | null
  dateRecorded_not_in?: DateTime[] | DateTime | null
  dateRecorded_lt?: DateTime | null
  dateRecorded_lte?: DateTime | null
  dateRecorded_gt?: DateTime | null
  dateRecorded_gte?: DateTime | null
  dateAddedToDatabase?: DateTime | null
  dateAddedToDatabase_not?: DateTime | null
  dateAddedToDatabase_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_not_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_lt?: DateTime | null
  dateAddedToDatabase_lte?: DateTime | null
  dateAddedToDatabase_gt?: DateTime | null
  dateAddedToDatabase_gte?: DateTime | null
}

export interface AverageHourWhereUniqueInput {
  id?: ID_Input | null
  dateRecorded?: DateTime | null
}

export interface AverageMinuteCreateInput {
  id?: ID_Input | null
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
}

export interface AverageMinuteSubscriptionWhereInput {
  AND?: AverageMinuteSubscriptionWhereInput[] | AverageMinuteSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AverageMinuteWhereInput | null
}

export interface AverageMinuteUpdateInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageMinuteUpdateManyMutationInput {
  avGasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  avCurrentUsage?: Float | null
  processingTime?: Float | null
  dateRecorded?: DateTime | null
}

export interface AverageMinuteWhereInput {
  AND?: AverageMinuteWhereInput[] | AverageMinuteWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  avGasUsage?: Float | null
  avGasUsage_not?: Float | null
  avGasUsage_in?: Float[] | Float | null
  avGasUsage_not_in?: Float[] | Float | null
  avGasUsage_lt?: Float | null
  avGasUsage_lte?: Float | null
  avGasUsage_gt?: Float | null
  avGasUsage_gte?: Float | null
  usageHigh?: Float | null
  usageHigh_not?: Float | null
  usageHigh_in?: Float[] | Float | null
  usageHigh_not_in?: Float[] | Float | null
  usageHigh_lt?: Float | null
  usageHigh_lte?: Float | null
  usageHigh_gt?: Float | null
  usageHigh_gte?: Float | null
  usageLow?: Float | null
  usageLow_not?: Float | null
  usageLow_in?: Float[] | Float | null
  usageLow_not_in?: Float[] | Float | null
  usageLow_lt?: Float | null
  usageLow_lte?: Float | null
  usageLow_gt?: Float | null
  usageLow_gte?: Float | null
  returnHigh?: Float | null
  returnHigh_not?: Float | null
  returnHigh_in?: Float[] | Float | null
  returnHigh_not_in?: Float[] | Float | null
  returnHigh_lt?: Float | null
  returnHigh_lte?: Float | null
  returnHigh_gt?: Float | null
  returnHigh_gte?: Float | null
  returnLow?: Float | null
  returnLow_not?: Float | null
  returnLow_in?: Float[] | Float | null
  returnLow_not_in?: Float[] | Float | null
  returnLow_lt?: Float | null
  returnLow_lte?: Float | null
  returnLow_gt?: Float | null
  returnLow_gte?: Float | null
  avCurrentUsage?: Float | null
  avCurrentUsage_not?: Float | null
  avCurrentUsage_in?: Float[] | Float | null
  avCurrentUsage_not_in?: Float[] | Float | null
  avCurrentUsage_lt?: Float | null
  avCurrentUsage_lte?: Float | null
  avCurrentUsage_gt?: Float | null
  avCurrentUsage_gte?: Float | null
  processingTime?: Float | null
  processingTime_not?: Float | null
  processingTime_in?: Float[] | Float | null
  processingTime_not_in?: Float[] | Float | null
  processingTime_lt?: Float | null
  processingTime_lte?: Float | null
  processingTime_gt?: Float | null
  processingTime_gte?: Float | null
  dateRecorded?: DateTime | null
  dateRecorded_not?: DateTime | null
  dateRecorded_in?: DateTime[] | DateTime | null
  dateRecorded_not_in?: DateTime[] | DateTime | null
  dateRecorded_lt?: DateTime | null
  dateRecorded_lte?: DateTime | null
  dateRecorded_gt?: DateTime | null
  dateRecorded_gte?: DateTime | null
  dateAddedToDatabase?: DateTime | null
  dateAddedToDatabase_not?: DateTime | null
  dateAddedToDatabase_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_not_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_lt?: DateTime | null
  dateAddedToDatabase_lte?: DateTime | null
  dateAddedToDatabase_gt?: DateTime | null
  dateAddedToDatabase_gte?: DateTime | null
}

export interface AverageMinuteWhereUniqueInput {
  id?: ID_Input | null
  dateRecorded?: DateTime | null
}

export interface MeasurementCreateInput {
  id?: ID_Input | null
  gasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  currentUsage: Float
  dateRecorded: DateTime
}

export interface MeasurementSubscriptionWhereInput {
  AND?: MeasurementSubscriptionWhereInput[] | MeasurementSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MeasurementWhereInput | null
}

export interface MeasurementUpdateInput {
  gasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  currentUsage?: Float | null
  dateRecorded?: DateTime | null
}

export interface MeasurementUpdateManyMutationInput {
  gasUsage?: Float | null
  usageHigh?: Float | null
  usageLow?: Float | null
  returnHigh?: Float | null
  returnLow?: Float | null
  currentUsage?: Float | null
  dateRecorded?: DateTime | null
}

export interface MeasurementWhereInput {
  AND?: MeasurementWhereInput[] | MeasurementWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  gasUsage?: Float | null
  gasUsage_not?: Float | null
  gasUsage_in?: Float[] | Float | null
  gasUsage_not_in?: Float[] | Float | null
  gasUsage_lt?: Float | null
  gasUsage_lte?: Float | null
  gasUsage_gt?: Float | null
  gasUsage_gte?: Float | null
  usageHigh?: Float | null
  usageHigh_not?: Float | null
  usageHigh_in?: Float[] | Float | null
  usageHigh_not_in?: Float[] | Float | null
  usageHigh_lt?: Float | null
  usageHigh_lte?: Float | null
  usageHigh_gt?: Float | null
  usageHigh_gte?: Float | null
  usageLow?: Float | null
  usageLow_not?: Float | null
  usageLow_in?: Float[] | Float | null
  usageLow_not_in?: Float[] | Float | null
  usageLow_lt?: Float | null
  usageLow_lte?: Float | null
  usageLow_gt?: Float | null
  usageLow_gte?: Float | null
  returnHigh?: Float | null
  returnHigh_not?: Float | null
  returnHigh_in?: Float[] | Float | null
  returnHigh_not_in?: Float[] | Float | null
  returnHigh_lt?: Float | null
  returnHigh_lte?: Float | null
  returnHigh_gt?: Float | null
  returnHigh_gte?: Float | null
  returnLow?: Float | null
  returnLow_not?: Float | null
  returnLow_in?: Float[] | Float | null
  returnLow_not_in?: Float[] | Float | null
  returnLow_lt?: Float | null
  returnLow_lte?: Float | null
  returnLow_gt?: Float | null
  returnLow_gte?: Float | null
  currentUsage?: Float | null
  currentUsage_not?: Float | null
  currentUsage_in?: Float[] | Float | null
  currentUsage_not_in?: Float[] | Float | null
  currentUsage_lt?: Float | null
  currentUsage_lte?: Float | null
  currentUsage_gt?: Float | null
  currentUsage_gte?: Float | null
  dateRecorded?: DateTime | null
  dateRecorded_not?: DateTime | null
  dateRecorded_in?: DateTime[] | DateTime | null
  dateRecorded_not_in?: DateTime[] | DateTime | null
  dateRecorded_lt?: DateTime | null
  dateRecorded_lte?: DateTime | null
  dateRecorded_gt?: DateTime | null
  dateRecorded_gte?: DateTime | null
  dateAddedToDatabase?: DateTime | null
  dateAddedToDatabase_not?: DateTime | null
  dateAddedToDatabase_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_not_in?: DateTime[] | DateTime | null
  dateAddedToDatabase_lt?: DateTime | null
  dateAddedToDatabase_lte?: DateTime | null
  dateAddedToDatabase_gt?: DateTime | null
  dateAddedToDatabase_gte?: DateTime | null
}

export interface MeasurementWhereUniqueInput {
  id?: ID_Input | null
  dateRecorded?: DateTime | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAverageDay {
  count: Int
}

export interface AggregateAverageHour {
  count: Int
}

export interface AggregateAverageMinute {
  count: Int
}

export interface AggregateMeasurement {
  count: Int
}

export interface AverageDay extends Node {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

/*
 * A connection to a list of items.

 */
export interface AverageDayConnection {
  pageInfo: PageInfo
  edges: Array<AverageDayEdge | null>
  aggregate: AggregateAverageDay
}

/*
 * An edge in a connection.

 */
export interface AverageDayEdge {
  node: AverageDay
  cursor: String
}

export interface AverageDayPreviousValues {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

export interface AverageDaySubscriptionPayload {
  mutation: MutationType
  node?: AverageDay | null
  updatedFields?: Array<String> | null
  previousValues?: AverageDayPreviousValues | null
}

export interface AverageHour extends Node {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

/*
 * A connection to a list of items.

 */
export interface AverageHourConnection {
  pageInfo: PageInfo
  edges: Array<AverageHourEdge | null>
  aggregate: AggregateAverageHour
}

/*
 * An edge in a connection.

 */
export interface AverageHourEdge {
  node: AverageHour
  cursor: String
}

export interface AverageHourPreviousValues {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

export interface AverageHourSubscriptionPayload {
  mutation: MutationType
  node?: AverageHour | null
  updatedFields?: Array<String> | null
  previousValues?: AverageHourPreviousValues | null
}

export interface AverageMinute extends Node {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

/*
 * A connection to a list of items.

 */
export interface AverageMinuteConnection {
  pageInfo: PageInfo
  edges: Array<AverageMinuteEdge | null>
  aggregate: AggregateAverageMinute
}

/*
 * An edge in a connection.

 */
export interface AverageMinuteEdge {
  node: AverageMinute
  cursor: String
}

export interface AverageMinutePreviousValues {
  id: ID_Output
  avGasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  avCurrentUsage: Float
  processingTime: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

export interface AverageMinuteSubscriptionPayload {
  mutation: MutationType
  node?: AverageMinute | null
  updatedFields?: Array<String> | null
  previousValues?: AverageMinutePreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Measurement extends Node {
  id: ID_Output
  gasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  currentUsage: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

/*
 * A connection to a list of items.

 */
export interface MeasurementConnection {
  pageInfo: PageInfo
  edges: Array<MeasurementEdge | null>
  aggregate: AggregateMeasurement
}

/*
 * An edge in a connection.

 */
export interface MeasurementEdge {
  node: Measurement
  cursor: String
}

export interface MeasurementPreviousValues {
  id: ID_Output
  gasUsage: Float
  usageHigh: Float
  usageLow: Float
  returnHigh: Float
  returnLow: Float
  currentUsage: Float
  dateRecorded: DateTime
  dateAddedToDatabase: DateTime
}

export interface MeasurementSubscriptionPayload {
  mutation: MutationType
  node?: Measurement | null
  updatedFields?: Array<String> | null
  previousValues?: MeasurementPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string