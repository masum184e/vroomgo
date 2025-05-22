package com.example.vroomgo.fragments;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.fragment.app.Fragment;

import com.example.vroomgo.AvailabilityCalendarActivity;
import com.example.vroomgo.BookingDetailsActivity;
import com.example.vroomgo.ChangePasswordActivity;
import com.example.vroomgo.ComplaintActivity;
import com.example.vroomgo.R;
import com.example.vroomgo.UploadVehicleActivity;

public class ProfileFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_profile, container, false);

        setClickListener(view, R.id.complain, ComplaintActivity.class);
        setClickListener(view, R.id.change_password, ChangePasswordActivity.class);
        setClickListener(view, R.id.vehicle, UploadVehicleActivity.class);
        setClickListener(view, R.id.availability, AvailabilityCalendarActivity.class);
        setClickListener(view, R.id.logout, BookingDetailsActivity.class);

        return view;
    }

    private void setClickListener(View view, int layoutId, Class<?> targetActivity) {
        view.findViewById(layoutId).setOnClickListener(v ->
                startActivity(new Intent(getActivity(), targetActivity)));
    }
}
