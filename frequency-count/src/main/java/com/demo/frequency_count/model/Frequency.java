package com.demo.frequency_count.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.HashMap;
import java.util.LinkedHashMap;

@Entity
public class Frequency {
    @Id
    private String input;

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

}
