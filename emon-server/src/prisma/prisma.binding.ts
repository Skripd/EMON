import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    measurements: <T = Array<Measurement | null>>(args: { where?: MeasurementWhereInput | null, orderBy?: MeasurementOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    measurement: <T = Measurement | null>(args: { where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    measurementsConnection: <T = MeasurementConnection>(args: { where?: MeasurementWhereInput | null, orderBy?: MeasurementOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createMeasurement: <T = Measurement>(args: { data: MeasurementCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMeasurement: <T = Measurement | null>(args: { data: MeasurementUpdateInput, where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMeasurement: <T = Measurement | null>(args: { where: MeasurementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertMeasurement: <T = Measurement>(args: { where: MeasurementWhereUniqueInput, create: MeasurementCreateInput, update: MeasurementUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMeasurements: <T = BatchPayload>(args: { data: MeasurementUpdateManyMutationInput, where?: MeasurementWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMeasurements: <T = BatchPayload>(args: { where?: MeasurementWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    measurement: <T = MeasurementSubscriptionPayload | null>(args: { where?: MeasurementSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Measurement: (where?: MeasurementWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateMeasurement {
  count: Int!
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
  gasUsage: Int!
  usageHigh: Int!
  usageLow: Int!
  returnHigh: Int!
  returnLow: Int!
  currentUsage: Int!
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
  gasUsage: Int!
  usageHigh: Int!
  usageLow: Int!
  returnHigh: Int!
  returnLow: Int!
  currentUsage: Int!
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
  gasUsage: Int!
  usageHigh: Int!
  usageLow: Int!
  returnHigh: Int!
  returnLow: Int!
  currentUsage: Int!
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
  gasUsage: Int
  usageHigh: Int
  usageLow: Int
  returnHigh: Int
  returnLow: Int
  currentUsage: Int
  dateRecorded: DateTime
}

input MeasurementUpdateManyMutationInput {
  gasUsage: Int
  usageHigh: Int
  usageLow: Int
  returnHigh: Int
  returnLow: Int
  currentUsage: Int
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
  gasUsage: Int

  """All values that are not equal to given value."""
  gasUsage_not: Int

  """All values that are contained in given list."""
  gasUsage_in: [Int!]

  """All values that are not contained in given list."""
  gasUsage_not_in: [Int!]

  """All values less than the given value."""
  gasUsage_lt: Int

  """All values less than or equal the given value."""
  gasUsage_lte: Int

  """All values greater than the given value."""
  gasUsage_gt: Int

  """All values greater than or equal the given value."""
  gasUsage_gte: Int
  usageHigh: Int

  """All values that are not equal to given value."""
  usageHigh_not: Int

  """All values that are contained in given list."""
  usageHigh_in: [Int!]

  """All values that are not contained in given list."""
  usageHigh_not_in: [Int!]

  """All values less than the given value."""
  usageHigh_lt: Int

  """All values less than or equal the given value."""
  usageHigh_lte: Int

  """All values greater than the given value."""
  usageHigh_gt: Int

  """All values greater than or equal the given value."""
  usageHigh_gte: Int
  usageLow: Int

  """All values that are not equal to given value."""
  usageLow_not: Int

  """All values that are contained in given list."""
  usageLow_in: [Int!]

  """All values that are not contained in given list."""
  usageLow_not_in: [Int!]

  """All values less than the given value."""
  usageLow_lt: Int

  """All values less than or equal the given value."""
  usageLow_lte: Int

  """All values greater than the given value."""
  usageLow_gt: Int

  """All values greater than or equal the given value."""
  usageLow_gte: Int
  returnHigh: Int

  """All values that are not equal to given value."""
  returnHigh_not: Int

  """All values that are contained in given list."""
  returnHigh_in: [Int!]

  """All values that are not contained in given list."""
  returnHigh_not_in: [Int!]

  """All values less than the given value."""
  returnHigh_lt: Int

  """All values less than or equal the given value."""
  returnHigh_lte: Int

  """All values greater than the given value."""
  returnHigh_gt: Int

  """All values greater than or equal the given value."""
  returnHigh_gte: Int
  returnLow: Int

  """All values that are not equal to given value."""
  returnLow_not: Int

  """All values that are contained in given list."""
  returnLow_in: [Int!]

  """All values that are not contained in given list."""
  returnLow_not_in: [Int!]

  """All values less than the given value."""
  returnLow_lt: Int

  """All values less than or equal the given value."""
  returnLow_lte: Int

  """All values greater than the given value."""
  returnLow_gt: Int

  """All values greater than or equal the given value."""
  returnLow_gte: Int
  currentUsage: Int

  """All values that are not equal to given value."""
  currentUsage_not: Int

  """All values that are contained in given list."""
  currentUsage_in: [Int!]

  """All values that are not contained in given list."""
  currentUsage_not_in: [Int!]

  """All values less than the given value."""
  currentUsage_lt: Int

  """All values less than or equal the given value."""
  currentUsage_lte: Int

  """All values greater than the given value."""
  currentUsage_gt: Int

  """All values greater than or equal the given value."""
  currentUsage_gte: Int
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
  updateMeasurement(data: MeasurementUpdateInput!, where: MeasurementWhereUniqueInput!): Measurement
  deleteMeasurement(where: MeasurementWhereUniqueInput!): Measurement
  upsertMeasurement(where: MeasurementWhereUniqueInput!, create: MeasurementCreateInput!, update: MeasurementUpdateInput!): Measurement!
  updateManyMeasurements(data: MeasurementUpdateManyMutationInput!, where: MeasurementWhereInput): BatchPayload!
  deleteManyMeasurements(where: MeasurementWhereInput): BatchPayload!
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
  measurement(where: MeasurementWhereUniqueInput!): Measurement
  measurementsConnection(where: MeasurementWhereInput, orderBy: MeasurementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeasurementConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  measurement(where: MeasurementSubscriptionWhereInput): MeasurementSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

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

export interface MeasurementCreateInput {
  id?: ID_Input | null
  gasUsage: Int
  usageHigh: Int
  usageLow: Int
  returnHigh: Int
  returnLow: Int
  currentUsage: Int
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
  gasUsage?: Int | null
  usageHigh?: Int | null
  usageLow?: Int | null
  returnHigh?: Int | null
  returnLow?: Int | null
  currentUsage?: Int | null
  dateRecorded?: DateTime | null
}

export interface MeasurementUpdateManyMutationInput {
  gasUsage?: Int | null
  usageHigh?: Int | null
  usageLow?: Int | null
  returnHigh?: Int | null
  returnLow?: Int | null
  currentUsage?: Int | null
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
  gasUsage?: Int | null
  gasUsage_not?: Int | null
  gasUsage_in?: Int[] | Int | null
  gasUsage_not_in?: Int[] | Int | null
  gasUsage_lt?: Int | null
  gasUsage_lte?: Int | null
  gasUsage_gt?: Int | null
  gasUsage_gte?: Int | null
  usageHigh?: Int | null
  usageHigh_not?: Int | null
  usageHigh_in?: Int[] | Int | null
  usageHigh_not_in?: Int[] | Int | null
  usageHigh_lt?: Int | null
  usageHigh_lte?: Int | null
  usageHigh_gt?: Int | null
  usageHigh_gte?: Int | null
  usageLow?: Int | null
  usageLow_not?: Int | null
  usageLow_in?: Int[] | Int | null
  usageLow_not_in?: Int[] | Int | null
  usageLow_lt?: Int | null
  usageLow_lte?: Int | null
  usageLow_gt?: Int | null
  usageLow_gte?: Int | null
  returnHigh?: Int | null
  returnHigh_not?: Int | null
  returnHigh_in?: Int[] | Int | null
  returnHigh_not_in?: Int[] | Int | null
  returnHigh_lt?: Int | null
  returnHigh_lte?: Int | null
  returnHigh_gt?: Int | null
  returnHigh_gte?: Int | null
  returnLow?: Int | null
  returnLow_not?: Int | null
  returnLow_in?: Int[] | Int | null
  returnLow_not_in?: Int[] | Int | null
  returnLow_lt?: Int | null
  returnLow_lte?: Int | null
  returnLow_gt?: Int | null
  returnLow_gte?: Int | null
  currentUsage?: Int | null
  currentUsage_not?: Int | null
  currentUsage_in?: Int[] | Int | null
  currentUsage_not_in?: Int[] | Int | null
  currentUsage_lt?: Int | null
  currentUsage_lte?: Int | null
  currentUsage_gt?: Int | null
  currentUsage_gte?: Int | null
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

export interface AggregateMeasurement {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Measurement extends Node {
  id: ID_Output
  gasUsage: Int
  usageHigh: Int
  usageLow: Int
  returnHigh: Int
  returnLow: Int
  currentUsage: Int
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
  gasUsage: Int
  usageHigh: Int
  usageLow: Int
  returnHigh: Int
  returnLow: Int
  currentUsage: Int
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