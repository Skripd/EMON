import { Injectable } from '@angular/core';
import { Apollo, Subscription } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root',
})
export class PowerUsageLiveService extends Subscription {
  document = gql`
  subscription {
    measurement {
      node {
        currentUsage
        dateRecorded
      }
    }
  }
  `
}