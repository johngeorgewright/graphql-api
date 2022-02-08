import * as Types from "../../../generated/schema-types";
import * as gm from "graphql-modules";
export namespace AuthorsModule {
  interface DefinedFields {
    Author: 'id' | 'email' | 'name' | 'books';
    Query: 'author' | 'authors';
  };
  
  interface DefinedEnumValues {
    AuthorSortField: 'email' | 'name';
    AuthorSortDirection: 'ASC' | 'DESC';
  };
  
  export type Author = Pick<Types.Author, DefinedFields['Author']>;
  export type Book = Types.Book;
  export type BookSortField = Types.BookSortField;
  export type BookSortDirection = Types.BookSortDirection;
  export type AuthorSortField = DefinedEnumValues['AuthorSortField'];
  export type AuthorSortDirection = DefinedEnumValues['AuthorSortDirection'];
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type AuthorResolvers = Pick<Types.AuthorResolvers, DefinedFields['Author'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Author?: AuthorResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Author?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      email?: gm.Middleware[];
      name?: gm.Middleware[];
      books?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      author?: gm.Middleware[];
      authors?: gm.Middleware[];
    };
  };
}