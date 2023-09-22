import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  const result = await prisma.book.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.book.findUnique({
    where: {
      id
    }
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const { title, author, publisher, purchaseDate, cover} = book;

  const result = await prisma.book.create({
    data: {
    title,
    author,
    publisher,
    purchaseDate,
    cover
  }})

  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const result = await prisma.book.update({
    data:{
      grade,
      review
    },
    where:{
      id: bookId
    }
  })
  return result;
}