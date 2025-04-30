package com.example.vroomgo;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.widget.ArrayAdapter;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.vroomgo.databinding.ActivitySignupBinding;

public class SignupActivity extends AppCompatActivity {
    private ActivitySignupBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivitySignupBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setupSpinner();

        binding.btnRegister.setOnClickListener(v -> {
            if (validateInputs()) {
                Toast.makeText(this, "Registration successful!", Toast.LENGTH_SHORT).show();
                startActivity(new Intent(SignupActivity.this, MainActivity.class));
                finish();
            }
        });
    }

    private void setupSpinner() {
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.user_roles, android.R.layout.simple_dropdown_item_1line);

        binding.roleSpinner.setAdapter(adapter);
    }


    private boolean validateInputs() {
        String name = binding.fullNameEditText.getText().toString().trim();
        String mobile = binding.mobileNumberEditText.getText().toString().trim();
        String email = binding.emailEditText.getText().toString().trim();
        String password = binding.passwordEditText.getText().toString();
        String confirmPassword = binding.confirmPasswordEditText.getText().toString();
        String role = binding.roleSpinner.getText().toString().trim();

        if (TextUtils.isEmpty(name)) {
            binding.fullNameLayout.setError("Name is required");
            return false;
        } else {
            binding.fullNameLayout.setError(null);
        }

        if (TextUtils.isEmpty(mobile)) {
            binding.mobileNumberLayout.setError("Mobile number is required");
            return false;
        } else {
            binding.mobileNumberLayout.setError(null);
        }

        if (TextUtils.isEmpty(email)) {
            binding.emailLayout.setError("Email is required");
            return false;
        } else {
            binding.emailLayout.setError(null);
        }

        if (TextUtils.isEmpty(role)) {
            binding.roleContainerLayout.setError("Please select a role");
            return false;
        } else {
            binding.roleContainerLayout.setError(null);
        }

        if (TextUtils.isEmpty(password)) {
            binding.passwordLayout.setError("Password is required");
            return false;
        } else {
            binding.passwordLayout.setError(null);
        }

        if (!password.equals(confirmPassword)) {
            binding.confirmPasswordLayout.setError("Passwords do not match");
            return false;
        } else {
            binding.confirmPasswordLayout.setError(null);
        }

        return true;
    }

}
