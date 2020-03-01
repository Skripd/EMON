import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GraphQLError } from 'graphql';

@Component({
  selector: 'app-gas-usage-card',
  templateUrl: './gas-usage-card.component.html',
  styleUrls: ['./gas-usage-card.component.scss']
})
export class GasUsageCardComponent implements OnInit {

  data: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        {
          measurements(last: 10) {
            id
            gasUsage
          }
        }`,
    }).valueChanges.subscribe(result => {
      this.data = result.data as [];
      this.loading = result.loading;
      this.error = result.errors;
      console.log('[Gas-Usage-Card] [result] errors', this.error);
      console.log('[Gas-Usage-Card] [result] data', this.data);
    }, error => {
      const e = error as GraphQLError;
      console.log('[Gas-Usage-Card] [error] ', JSON.stringify(error));
    });
  }

}
