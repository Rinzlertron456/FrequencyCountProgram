package com.demo.frequency_count.controller;

import com.demo.frequency_count.model.Frequency;
import com.demo.frequency_count.response.FrequencyResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.frequency_count.repository.FrequencyRepository;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class FrequencyController {

    @Autowired
    private FrequencyRepository frequencyRepo;

    @PostMapping("/input")
    Frequency frequency(@RequestBody Frequency frequency){
        return frequencyRepo.save(frequency);
    }
    @GetMapping("/inputs")
    List<Frequency> getAllInputs(){
        return frequencyRepo.findAll();
    }
    @GetMapping("/input/{id}")
    Frequency getInputById(@PathVariable String id){
        return frequencyRepo.findById(id).orElseThrow();
    }

}
