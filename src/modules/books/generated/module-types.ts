import * as Types from "../../../generated/schema-types";
import * as gm from "graphql-modules";
export namespace BooksModule {
  interface DefinedFields {
    Book: 'id' | 'author' | 'authorId' | 'title';
    Query: 'book' | 'books';
  };
  
  interface DefinedEnumValues {
    BookSortField: 'title';
    BookSortDirection: 'ASC' | 'DESC';
  };
  
  export type Book = Pick<Types.Book, DefinedFields['Book']>;
  export type Author = Types.Author;
  export type BookSortField = DefinedEnumValues['BookSortField'];
  export type BookSortDirection = DefinedEnumValues['BookSortDirection'];
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type BookResolvers = Pick<Types.BookResolvers, DefinedFields['Book'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Book?: BookResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Book?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      author?: gm.Middleware[];
      authorId?: gm.Middleware[];
      title?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      book?: gm.Middleware[];
      books?: gm.Middleware[];
    };
  };
}