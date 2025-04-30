package com.example.vroomgo;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import com.example.vroomgo.databinding.ActivityMainBinding;
import com.example.vroomgo.fragments.HistoryFragment;
import com.example.vroomgo.fragments.HomeFragment;
import com.example.vroomgo.fragments.ProfileFragment;
import com.example.vroomgo.fragments.RequestFragment;
import com.example.vroomgo.fragments.SettingFragment;

public class MainActivity extends AppCompatActivity {
    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.navView.setOnItemSelectedListener(menuItem -> {
            Fragment fragment;

            if (menuItem.getItemId() == R.id.navigation_profile) {
                fragment = new ProfileFragment();
            } else if (menuItem.getItemId() == R.id.navigation_history) {
                fragment = new HistoryFragment();
            } else if (menuItem.getItemId() == R.id.navigation_setting) {
                fragment = new SettingFragment();
            } else if (menuItem.getItemId() == R.id.navigation_request) {
                fragment = new RequestFragment();
            } else {
                fragment = new HomeFragment();
            }

            loadFragment(fragment);
            return true;
        });

        binding.navView.setSelectedItemId(R.id.navigation_home);
    }
    private void loadFragment(Fragment fragment) {
        getSupportFragmentManager()
                .beginTransaction()
                .replace(R.id.fragment_layout_container, fragment)
                .commit();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        binding = null;
    }
}