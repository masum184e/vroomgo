package com.example.vroomgo;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import androidx.navigation.ui.AppBarConfiguration;

import com.example.vroomgo.databinding.ActivityAvailabilityCalendarBinding;

public class AvailabilityCalendarActivity extends AppCompatActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivityAvailabilityCalendarBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityAvailabilityCalendarBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());


    }


}