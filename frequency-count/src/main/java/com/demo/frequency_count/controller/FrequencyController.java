package com.demo.frequency_count.controller;

import com.demo.frequency_count.model.Frequencies;
import com.demo.frequency_count.model.Frequency;
import com.demo.frequency_count.repository.FrequenciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.demo.frequency_count.repository.FrequencyRepository;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:5173")
public class FrequencyController {

    @Autowired
    private FrequenciesRepository frequenciesRepo;

    @PostMapping("/input")
    List<Frequencies> frequency(@RequestBody Frequency frequency){
        frequenciesRepo.deleteAll();
        LinkedHashMap<Character,Integer> map=new LinkedHashMap<>();
        String[] words=frequency.getInput().split(" ");
        for (String word : words) {
            for (int j = 0; j < word.length(); j++) {
                char ch = word.charAt(j);
                if (map.containsKey(ch)) map.put(ch, map.get(ch) + 1);
                else map.put(ch, 1);
            }
        }
        List<Frequencies> frequenciesList = new ArrayList<>();
        for (Map.Entry<Character,Integer> entry: map.entrySet()){
            Frequencies frequencies = new Frequencies();
            frequencies.setLetter(entry.getKey());
            frequencies.setFrequency(entry.getValue());
            frequenciesList.add(frequencies);
        }
        System.out.println(frequenciesList);
        return frequenciesRepo.saveAll(frequenciesList);
    }
//    Frequency frequency(@RequestBody Frequency frequency){
//        return frequencyRepo.save(frequency);
//    }
    @GetMapping("/inputs")
    List<Frequencies> getAllInputs(){
        return frequenciesRepo.findAll();
    }
//    @GetMapping("/input/{id}")
//    Frequencies getInputById(@PathVariable Character id){
//        return frequenciesRepo.findById(id).orElseThrow();
//    }

}
