import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

export interface PowerMeasurement {
    id: string;
    currentUsage: number;
    dateRecorded: string;
}

export interface Response {
    measurements: PowerMeasurement[];
}


@Injectable({
    providedIn: 'root',
})
export class PowerUsageGQL extends Query<Response> {
    document = gql`
    	query getPowerUsagePage($last: Int!){
    	  measurements(last: $last) {
    	    id
            dateRecorded
            currentUsage
    	  }
    	}
  `;
}