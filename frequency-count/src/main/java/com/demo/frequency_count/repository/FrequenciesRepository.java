package com.demo.frequency_count.repository;

import com.demo.frequency_count.model.Frequencies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FrequenciesRepository extends JpaRepository<Frequencies,Character> {
}
