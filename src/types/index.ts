import type { ComponentType } from "react";

export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

export interface IBookData extends IBook {
  description: string;
  price: number;
  photo: string;
  updatedAt?: Date;
}

export type TBookData = {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  price: number;
  available: boolean;
  photo: string;
};

export interface IBorrowSummary {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    Component: ComponentType;
  }[];
}
