package com.demo.frequency_count.response;

import com.demo.frequency_count.model.Frequency;

import java.util.Map;

public class FrequencyResponse {
    private Frequency frequency;
    private Map<Character, Integer> letterFrequencies;

    // Getters and setters
    public Frequency getFrequency() {
        return frequency;
    }

    public void setFrequency(Frequency frequency) {
        this.frequency = frequency;
    }

    public Map<Character, Integer> getLetterFrequencies() {
        return letterFrequencies;
    }

    public void setLetterFrequencies(Map<Character, Integer> letterFrequencies) {
        this.letterFrequencies = letterFrequencies;
    }
}

