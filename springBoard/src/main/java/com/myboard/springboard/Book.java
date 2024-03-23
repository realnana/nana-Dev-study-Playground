package com.myboard.springboard;

// 롬복으로 메서드 만들기 연습

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Book {
    private String title;
    private String author;

    public static void main(String[] args) {
        Book book = new Book();
        book.setTitle("HelloNana");
        book.setAuthor("Nana");
        System.out.println(book.getTitle());
        System.out.println(book.getAuthor());
    }
}
