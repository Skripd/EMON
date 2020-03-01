import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import { KeycloakService } from 'keycloak-angular';
import { StatusCodeError } from '../models/graphqlError.model';
import { AlertService } from '../alert/alert.service';

const uri = 'http://localhost:3000/graphql';


@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
})
export class GraphQLModule {

  uri = 'http://localhost:3000/graphql';

  constructor(
    private kcService: KeycloakService,
    private apollo: Apollo,
    private http: HttpLink,
    private alert: AlertService
  ) {

    const basic = http.create({
      uri
    });

    const auth = setContext(async (_, { headers }) => {
      const token = await this.kcService.getToken();

      return {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };
    });

    // Error handling for GraphQL client
    const error = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {

          const ua = JSON.parse(JSON.stringify(message)) as StatusCodeError;
          if (ua.statusCode) {
            switch (ua.statusCode) {
              case 401: alert.addAlert('You do not have authorization to access this', 'danger');
                        break;
              default: console.log('[GraphQL Error Handler] [StatusCode Unhandled Error] message:', ua);
            }
          }
        });
      }

      if (networkError) { console.log(`[Network error]: ${networkError}`); }
    });

    const link = ApolloLink.from([auth, error, basic]);
    const cache = new InMemoryCache();

    apollo.create({
      link,
      cache,
    });
  }
}
