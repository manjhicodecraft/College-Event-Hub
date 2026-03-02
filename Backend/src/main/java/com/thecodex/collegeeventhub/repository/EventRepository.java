package com.thecodex.collegeeventhub.repository;

import com.thecodex.collegeeventhub.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByIsActiveTrue();
    List<Event> findByEventType(String eventType);
    List<Event> findByEventDate(LocalDate eventDate);
    List<Event> findByNameContainingIgnoreCase(String name);
}
