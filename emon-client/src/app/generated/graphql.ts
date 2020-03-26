export type Maybe<T> = T | null;

export interface MeasurementWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MeasurementWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  gasUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  gasUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  gasUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  gasUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  gasUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  gasUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  gasUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  gasUsage_gte?: Maybe<number>;

  usageHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageHigh_gte?: Maybe<number>;

  usageLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageLow_gte?: Maybe<number>;

  returnHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnHigh_gte?: Maybe<number>;

  returnLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnLow_gte?: Maybe<number>;

  currentUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  currentUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  currentUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  currentUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  currentUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  currentUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  currentUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  currentUsage_gte?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateRecorded_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateRecorded_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateRecorded_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateRecorded_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateRecorded_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateRecorded_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateRecorded_gte?: Maybe<DateTime>;

  dateAddedToDatabase?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateAddedToDatabase_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateAddedToDatabase_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateAddedToDatabase_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateAddedToDatabase_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateAddedToDatabase_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateAddedToDatabase_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateAddedToDatabase_gte?: Maybe<DateTime>;
}

export interface AverageMinuteWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageMinuteWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  avGasUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avGasUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avGasUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avGasUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avGasUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avGasUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avGasUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avGasUsage_gte?: Maybe<number>;

  usageHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageHigh_gte?: Maybe<number>;

  usageLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageLow_gte?: Maybe<number>;

  returnHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnHigh_gte?: Maybe<number>;

  returnLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnLow_gte?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avCurrentUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avCurrentUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avCurrentUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avCurrentUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avCurrentUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avCurrentUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avCurrentUsage_gte?: Maybe<number>;

  processingTime?: Maybe<number>;
  /** All values that are not equal to given value. */
  processingTime_not?: Maybe<number>;
  /** All values that are contained in given list. */
  processingTime_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  processingTime_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  processingTime_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  processingTime_lte?: Maybe<number>;
  /** All values greater than the given value. */
  processingTime_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  processingTime_gte?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateRecorded_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateRecorded_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateRecorded_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateRecorded_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateRecorded_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateRecorded_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateRecorded_gte?: Maybe<DateTime>;

  dateAddedToDatabase?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateAddedToDatabase_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateAddedToDatabase_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateAddedToDatabase_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateAddedToDatabase_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateAddedToDatabase_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateAddedToDatabase_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateAddedToDatabase_gte?: Maybe<DateTime>;
}

export interface AverageHourWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageHourWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  avGasUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avGasUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avGasUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avGasUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avGasUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avGasUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avGasUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avGasUsage_gte?: Maybe<number>;

  usageHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageHigh_gte?: Maybe<number>;

  usageLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageLow_gte?: Maybe<number>;

  returnHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnHigh_gte?: Maybe<number>;

  returnLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnLow_gte?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avCurrentUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avCurrentUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avCurrentUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avCurrentUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avCurrentUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avCurrentUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avCurrentUsage_gte?: Maybe<number>;

  processingTime?: Maybe<number>;
  /** All values that are not equal to given value. */
  processingTime_not?: Maybe<number>;
  /** All values that are contained in given list. */
  processingTime_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  processingTime_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  processingTime_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  processingTime_lte?: Maybe<number>;
  /** All values greater than the given value. */
  processingTime_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  processingTime_gte?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateRecorded_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateRecorded_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateRecorded_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateRecorded_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateRecorded_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateRecorded_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateRecorded_gte?: Maybe<DateTime>;

  dateAddedToDatabase?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateAddedToDatabase_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateAddedToDatabase_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateAddedToDatabase_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateAddedToDatabase_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateAddedToDatabase_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateAddedToDatabase_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateAddedToDatabase_gte?: Maybe<DateTime>;
}

export interface AverageDayWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageDayWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  avGasUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avGasUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avGasUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avGasUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avGasUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avGasUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avGasUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avGasUsage_gte?: Maybe<number>;

  usageHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageHigh_gte?: Maybe<number>;

  usageLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  usageLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  usageLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  usageLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  usageLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  usageLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  usageLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  usageLow_gte?: Maybe<number>;

  returnHigh?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnHigh_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnHigh_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnHigh_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnHigh_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnHigh_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnHigh_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnHigh_gte?: Maybe<number>;

  returnLow?: Maybe<number>;
  /** All values that are not equal to given value. */
  returnLow_not?: Maybe<number>;
  /** All values that are contained in given list. */
  returnLow_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  returnLow_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  returnLow_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  returnLow_lte?: Maybe<number>;
  /** All values greater than the given value. */
  returnLow_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  returnLow_gte?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;
  /** All values that are not equal to given value. */
  avCurrentUsage_not?: Maybe<number>;
  /** All values that are contained in given list. */
  avCurrentUsage_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  avCurrentUsage_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  avCurrentUsage_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  avCurrentUsage_lte?: Maybe<number>;
  /** All values greater than the given value. */
  avCurrentUsage_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  avCurrentUsage_gte?: Maybe<number>;

  processingTime?: Maybe<number>;
  /** All values that are not equal to given value. */
  processingTime_not?: Maybe<number>;
  /** All values that are contained in given list. */
  processingTime_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  processingTime_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  processingTime_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  processingTime_lte?: Maybe<number>;
  /** All values greater than the given value. */
  processingTime_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  processingTime_gte?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateRecorded_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateRecorded_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateRecorded_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateRecorded_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateRecorded_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateRecorded_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateRecorded_gte?: Maybe<DateTime>;

  dateAddedToDatabase?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  dateAddedToDatabase_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  dateAddedToDatabase_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  dateAddedToDatabase_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  dateAddedToDatabase_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  dateAddedToDatabase_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  dateAddedToDatabase_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  dateAddedToDatabase_gte?: Maybe<DateTime>;
}

export interface MeasurementWhereUniqueInput {
  id?: Maybe<string>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageMinuteWhereUniqueInput {
  id?: Maybe<string>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageHourWhereUniqueInput {
  id?: Maybe<string>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageDayWhereUniqueInput {
  id?: Maybe<string>;

  dateRecorded?: Maybe<DateTime>;
}

export interface MeasurementCreateInput {
  id?: Maybe<string>;

  gasUsage: number;

  usageHigh: number;

  usageLow: number;

  returnHigh: number;

  returnLow: number;

  currentUsage: number;

  dateRecorded: DateTime;
}

export interface AverageMinuteCreateInput {
  id?: Maybe<string>;

  avGasUsage: number;

  usageHigh: number;

  usageLow: number;

  returnHigh: number;

  returnLow: number;

  avCurrentUsage: number;

  processingTime: number;

  dateRecorded: DateTime;
}

export interface AverageHourCreateInput {
  id?: Maybe<string>;

  avGasUsage: number;

  usageHigh: number;

  usageLow: number;

  returnHigh: number;

  returnLow: number;

  avCurrentUsage: number;

  processingTime: number;

  dateRecorded: DateTime;
}

export interface AverageDayCreateInput {
  id?: Maybe<string>;

  avGasUsage: number;

  usageHigh: number;

  usageLow: number;

  returnHigh: number;

  returnLow: number;

  avCurrentUsage: number;

  processingTime: number;

  dateRecorded: DateTime;
}

export interface MeasurementUpdateInput {
  gasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  currentUsage?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageMinuteUpdateInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageHourUpdateInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageDayUpdateInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface MeasurementUpdateManyMutationInput {
  gasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  currentUsage?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageMinuteUpdateManyMutationInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageHourUpdateManyMutationInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface AverageDayUpdateManyMutationInput {
  avGasUsage?: Maybe<number>;

  usageHigh?: Maybe<number>;

  usageLow?: Maybe<number>;

  returnHigh?: Maybe<number>;

  returnLow?: Maybe<number>;

  avCurrentUsage?: Maybe<number>;

  processingTime?: Maybe<number>;

  dateRecorded?: Maybe<DateTime>;
}

export interface MeasurementSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<MeasurementSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<MeasurementWhereInput>;
}

export interface AverageMinuteSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageMinuteSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<AverageMinuteWhereInput>;
}

export interface AverageHourSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageHourSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<AverageHourWhereInput>;
}

export interface AverageDaySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<AverageDaySubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<AverageDayWhereInput>;
}

export enum MeasurementOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  GasUsageAsc = "gasUsage_ASC",
  GasUsageDesc = "gasUsage_DESC",
  UsageHighAsc = "usageHigh_ASC",
  UsageHighDesc = "usageHigh_DESC",
  UsageLowAsc = "usageLow_ASC",
  UsageLowDesc = "usageLow_DESC",
  ReturnHighAsc = "returnHigh_ASC",
  ReturnHighDesc = "returnHigh_DESC",
  ReturnLowAsc = "returnLow_ASC",
  ReturnLowDesc = "returnLow_DESC",
  CurrentUsageAsc = "currentUsage_ASC",
  CurrentUsageDesc = "currentUsage_DESC",
  DateRecordedAsc = "dateRecorded_ASC",
  DateRecordedDesc = "dateRecorded_DESC",
  DateAddedToDatabaseAsc = "dateAddedToDatabase_ASC",
  DateAddedToDatabaseDesc = "dateAddedToDatabase_DESC"
}

export enum AverageMinuteOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  AvGasUsageAsc = "avGasUsage_ASC",
  AvGasUsageDesc = "avGasUsage_DESC",
  UsageHighAsc = "usageHigh_ASC",
  UsageHighDesc = "usageHigh_DESC",
  UsageLowAsc = "usageLow_ASC",
  UsageLowDesc = "usageLow_DESC",
  ReturnHighAsc = "returnHigh_ASC",
  ReturnHighDesc = "returnHigh_DESC",
  ReturnLowAsc = "returnLow_ASC",
  ReturnLowDesc = "returnLow_DESC",
  AvCurrentUsageAsc = "avCurrentUsage_ASC",
  AvCurrentUsageDesc = "avCurrentUsage_DESC",
  ProcessingTimeAsc = "processingTime_ASC",
  ProcessingTimeDesc = "processingTime_DESC",
  DateRecordedAsc = "dateRecorded_ASC",
  DateRecordedDesc = "dateRecorded_DESC",
  DateAddedToDatabaseAsc = "dateAddedToDatabase_ASC",
  DateAddedToDatabaseDesc = "dateAddedToDatabase_DESC"
}

export enum AverageHourOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  AvGasUsageAsc = "avGasUsage_ASC",
  AvGasUsageDesc = "avGasUsage_DESC",
  UsageHighAsc = "usageHigh_ASC",
  UsageHighDesc = "usageHigh_DESC",
  UsageLowAsc = "usageLow_ASC",
  UsageLowDesc = "usageLow_DESC",
  ReturnHighAsc = "returnHigh_ASC",
  ReturnHighDesc = "returnHigh_DESC",
  ReturnLowAsc = "returnLow_ASC",
  ReturnLowDesc = "returnLow_DESC",
  AvCurrentUsageAsc = "avCurrentUsage_ASC",
  AvCurrentUsageDesc = "avCurrentUsage_DESC",
  ProcessingTimeAsc = "processingTime_ASC",
  ProcessingTimeDesc = "processingTime_DESC",
  DateRecordedAsc = "dateRecorded_ASC",
  DateRecordedDesc = "dateRecorded_DESC",
  DateAddedToDatabaseAsc = "dateAddedToDatabase_ASC",
  DateAddedToDatabaseDesc = "dateAddedToDatabase_DESC"
}

export enum AverageDayOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  AvGasUsageAsc = "avGasUsage_ASC",
  AvGasUsageDesc = "avGasUsage_DESC",
  UsageHighAsc = "usageHigh_ASC",
  UsageHighDesc = "usageHigh_DESC",
  UsageLowAsc = "usageLow_ASC",
  UsageLowDesc = "usageLow_DESC",
  ReturnHighAsc = "returnHigh_ASC",
  ReturnHighDesc = "returnHigh_DESC",
  ReturnLowAsc = "returnLow_ASC",
  ReturnLowDesc = "returnLow_DESC",
  AvCurrentUsageAsc = "avCurrentUsage_ASC",
  AvCurrentUsageDesc = "avCurrentUsage_DESC",
  ProcessingTimeAsc = "processingTime_ASC",
  ProcessingTimeDesc = "processingTime_DESC",
  DateRecordedAsc = "dateRecorded_ASC",
  DateRecordedDesc = "dateRecorded_DESC",
  DateAddedToDatabaseAsc = "dateAddedToDatabase_ASC",
  DateAddedToDatabaseDesc = "dateAddedToDatabase_DESC"
}

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Documents
// ====================================================

export namespace GetDaysPage {
  export type Variables = {
    dateRecorded_gte: DateTime;
    dateRecorded_lte: DateTime;
  };

  export type Query = {
    __typename?: "Query";

    averageDays: (Maybe<AverageDays>)[];
  };

  export type AverageDays = {
    __typename?: "AverageDay";

    id: string;

    avCurrentUsage: number;

    avGasUsage: number;

    usageHigh: number;

    usageLow: number;

    dateRecorded: DateTime;

    processingTime: number;
  };
}

export namespace GetHoursPage {
  export type Variables = {
    dateRecorded_gte: DateTime;
    dateRecorded_lte: DateTime;
  };

  export type Query = {
    __typename?: "Query";

    averageHours: (Maybe<AverageHours>)[];
  };

  export type AverageHours = {
    __typename?: "AverageHour";

    id: string;

    avCurrentUsage: number;

    avGasUsage: number;

    usageHigh: number;

    usageLow: number;

    dateRecorded: DateTime;

    processingTime: number;
  };
}

export namespace GetPowerUsagePage {
  export type Variables = {
    last: number;
  };

  export type Query = {
    __typename?: "Query";

    measurements: (Maybe<Measurements>)[];
  };

  export type Measurements = {
    __typename?: "Measurement";

    id: string;

    dateRecorded: DateTime;

    currentUsage: number;
  };
}

export namespace LiveMeasurements {
  export type Variables = {};

  export type Subscription = {
    __typename?: "Subscription";

    measurement: Maybe<Measurement>;
  };

  export type Measurement = {
    __typename?: "MeasurementSubscriptionPayload";

    node: Maybe<Node>;
  };

  export type Node = {
    __typename?: "Measurement";

    currentUsage: number;

    dateRecorded: DateTime;
  };
}

export namespace GetMinutesPage {
  export type Variables = {
    dateRecorded_gte: DateTime;
    dateRecorded_lte: DateTime;
  };

  export type Query = {
    __typename?: "Query";

    averageMinutes: (Maybe<AverageMinutes>)[];
  };

  export type AverageMinutes = {
    __typename?: "AverageMinute";

    id: string;

    avCurrentUsage: number;

    avGasUsage: number;

    usageHigh: number;

    usageLow: number;

    dateRecorded: DateTime;

    processingTime: number;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class GetDaysPageGQL extends Apollo.Query<
  GetDaysPage.Query,
  GetDaysPage.Variables
> {
  document: any = gql`
    query getDaysPage(
      $dateRecorded_gte: DateTime!
      $dateRecorded_lte: DateTime!
    ) {
      averageDays(
        where: {
          AND: [
            { dateRecorded_gte: $dateRecorded_gte }
            { dateRecorded_lte: $dateRecorded_lte }
          ]
        }
      ) {
        id
        avCurrentUsage
        avGasUsage
        usageHigh
        usageLow
        dateRecorded
        processingTime
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetHoursPageGQL extends Apollo.Query<
  GetHoursPage.Query,
  GetHoursPage.Variables
> {
  document: any = gql`
    query getHoursPage(
      $dateRecorded_gte: DateTime!
      $dateRecorded_lte: DateTime!
    ) {
      averageHours(
        where: {
          AND: [
            { dateRecorded_gte: $dateRecorded_gte }
            { dateRecorded_lte: $dateRecorded_lte }
          ]
        }
      ) {
        id
        avCurrentUsage
        avGasUsage
        usageHigh
        usageLow
        dateRecorded
        processingTime
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetPowerUsagePageGQL extends Apollo.Query<
  GetPowerUsagePage.Query,
  GetPowerUsagePage.Variables
> {
  document: any = gql`
    query getPowerUsagePage($last: Int!) {
      measurements(last: $last) {
        id
        dateRecorded
        currentUsage
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class LiveMeasurementsGQL extends Apollo.Subscription<
  LiveMeasurements.Subscription,
  LiveMeasurements.Variables
> {
  document: any = gql`
    subscription liveMeasurements {
      measurement {
        node {
          currentUsage
          dateRecorded
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetMinutesPageGQL extends Apollo.Query<
  GetMinutesPage.Query,
  GetMinutesPage.Variables
> {
  document: any = gql`
    query getMinutesPage(
      $dateRecorded_gte: DateTime!
      $dateRecorded_lte: DateTime!
    ) {
      averageMinutes(
        where: {
          AND: [
            { dateRecorded_gte: $dateRecorded_gte }
            { dateRecorded_lte: $dateRecorded_lte }
          ]
        }
      ) {
        id
        avCurrentUsage
        avGasUsage
        usageHigh
        usageLow
        dateRecorded
        processingTime
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
