package com.demo.frequency_count.repository;

import com.demo.frequency_count.model.Frequency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FrequencyRepository extends JpaRepository<Frequency,String> {
}
