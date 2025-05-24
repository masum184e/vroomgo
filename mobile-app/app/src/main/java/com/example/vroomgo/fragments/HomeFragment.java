package com.example.vroomgo.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.fragment.app.Fragment;

import com.example.vroomgo.CarDetailsActivity;
import com.example.vroomgo.R;

public class HomeFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_home, container, false);

        ImageView notificationBtn = view.findViewById(R.id.notification_btn);
        notificationBtn.setOnClickListener(v -> {
            Intent intent = new Intent(getActivity(), CarDetailsActivity.class);
            startActivity(intent);
        });

        return view;
    }
}
