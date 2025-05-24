package com.example.vroomgo;

import static android.app.PendingIntent.getActivity;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import android.widget.Button;

import androidx.navigation.ui.AppBarConfiguration;

import com.example.vroomgo.databinding.ActivityCarDetailsBinding;

public class CarDetailsActivity extends AppCompatActivity {

    private AppBarConfiguration appBarConfiguration;
    private ActivityCarDetailsBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityCarDetailsBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        Button bookNowBtn = findViewById(R.id.book_now_btn);

        bookNowBtn.setOnClickListener(v-> startActivity(new Intent(this, BookingDetailsActivity.class)));

    }

}