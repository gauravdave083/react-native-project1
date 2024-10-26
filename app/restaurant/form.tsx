import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import   
 { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';

export default function RestaurantFormScreen() {
  const router = useRouter();

  const initialValues = {
    name: '',
    owner: '',
    streetName: '',
    city: '',
    zipCode: '',
    type: '',
    contact: '',
    email: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Restaurant Name is required'),
    owner: Yup.string().required('Owner Name is required'),
    streetName: Yup.string().required('Street Name is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    type: Yup.string().required('Restaurant Type is required'),
    contact: Yup.string().required('Contact is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
  });

  const handleSubmit = async (values) => {
    try {
      // Send data to API or handle locally
      // ... API call logic here

      // Successful submission, show notification and redirect
      Alert.alert('Success', 'Restaurant Onboarded Successfully!', [
        {
          text: 'OK',
          onPress: () => router.push('/'),
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show error message to the user
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            {/* Restaurant Name */}
            <Text style={styles.label}>Restaurant Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Enter restaurant name"
            />
            {touched.name && errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}

            {/* Owner Name */}
            <Text style={styles.label}>Owner Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('owner')}
              onBlur={handleBlur('owner')}
              value={values.owner}
              placeholder="Enter owner name"
            />
            {touched.owner && errors.owner ? <Text style={styles.errorText}>{errors.owner}</Text> : null}

            {/* Street Name */}
            <Text style={styles.label}>Street Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('streetName')}
              onBlur={handleBlur('streetName')}
              value={values.streetName}
              placeholder="Enter street name"
            />
            {touched.streetName && errors.streetName ? <Text style={styles.errorText}>{errors.streetName}</Text> : null}

            {/* City */}
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
              placeholder="Enter city"
            />
            {touched.city && errors.city ? <Text style={styles.errorText}>{errors.city}</Text> : null}

            {/* Zip Code */}
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('zipCode')}
              onBlur={handleBlur('zipCode')}
              value={values.zipCode}
              keyboardType="numeric"
              placeholder="Enter zip code"
            />
            {touched.zipCode && errors.zipCode ? <Text style={styles.errorText}>{errors.zipCode}</Text> : null}

            {/* Restaurant Type */}
            <Text style={styles.label}>Restaurant Type</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('type')}
              onBlur={handleBlur('type')}
              value={values.type}
              placeholder="Enter restaurant type"
            />
            {touched.type && errors.type ? <Text style={styles.errorText}>{errors.type}</Text> : null}

            {/* Contact */}
            <Text style={styles.label}>Contact</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('contact')}
              onBlur={handleBlur('contact')}
              value={values.contact}
              keyboardType="numeric"
              placeholder="Enter contact number"
            />
            {touched.contact && errors.contact ? <Text style={styles.errorText}>{errors.contact}</Text> : null}

            {/* Email */}
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              placeholder="Enter email address"
            />
            {touched.email && errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF6F00',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
