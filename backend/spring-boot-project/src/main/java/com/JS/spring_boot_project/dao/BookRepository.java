package com.JS.spring_boot_project.dao;

import com.JS.spring_boot_project.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
