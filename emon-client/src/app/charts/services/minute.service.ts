import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root',
})
export class MinuteService extends Query<Response> {
    document = gql`
query{
  averageMinutes(where: {
    AND: [
      { dateRecorded_gte: "2020-03-26T02:53:17Z" },
      { dateRecorded_lte: "2020-03-26T03:53:17Z" }
    ]
  }) {
    id
    avGasUsage
    usageHigh
    usageLow
    returnHigh
    returnLow
    avCurrentUsage
    processingTime
    dateRecorded
    dateAddedToDatabase
  }
}
  `;
}
