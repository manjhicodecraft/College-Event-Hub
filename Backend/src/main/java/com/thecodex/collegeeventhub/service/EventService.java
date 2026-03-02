package com.thecodex.collegeeventhub.service;

import com.thecodex.collegeeventhub.model.Event;
import com.thecodex.collegeeventhub.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findByIsActiveTrue();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
        
        event.setName(eventDetails.getName());
        event.setDescription(eventDetails.getDescription());
        event.setEventDate(eventDetails.getEventDate());
        event.setLocation(eventDetails.getLocation());
        event.setEventType(eventDetails.getEventType());
        event.setMaxParticipants(eventDetails.getMaxParticipants());
        event.setIsActive(eventDetails.getIsActive());

        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found with id: " + id));
        event.setIsActive(false); // Soft delete
        eventRepository.save(event);
    }

    public List<Event> getEventsByType(String eventType) {
        return eventRepository.findByEventType(eventType);
    }

    public List<Event> getEventsByDate(LocalDate eventDate) {
        return eventRepository.findByEventDate(eventDate);
    }

    public List<Event> searchEventsByName(String name) {
        return eventRepository.findByNameContainingIgnoreCase(name);
    }
}
