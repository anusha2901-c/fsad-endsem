package com.edulearn.repository;

import com.edulearn.entity.Course;
import com.edulearn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByEducator(User educator);
    List<Course> findByCategory(String category);
}
