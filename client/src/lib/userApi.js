import axios from 'axios';
import { ref } from 'process';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Utility function to serialize MongoDB documents
const serializeMongoDoc = (doc) => {
  if (!doc) return doc;
  
  if (Array.isArray(doc)) {
    return doc.map(serializeMongoDoc);
  }
  
  if (typeof doc === 'object' && doc !== null) {
    const serialized = {};
    for (const [key, value] of Object.entries(doc)) {
      if (value && typeof value === 'object') {
        // Handle ObjectId - check multiple possible formats
        if (value._bsontype === 'ObjectID' || value.$oid || 
            (typeof value === 'object' && value.toString && value.toString().match(/^[0-9a-fA-F]{24}$/))) {
          serialized[key] = value.toString();
        }
        // Handle Date objects - check multiple possible formats
        else if (value instanceof Date || value.$date || 
                 (typeof value === 'string' && !isNaN(Date.parse(value)))) {
          serialized[key] = new Date(value).toISOString();
        }
        // Handle nested objects
        else if (Array.isArray(value)) {
          serialized[key] = value.map(serializeMongoDoc);
        }
        else {
          serialized[key] = serializeMongoDoc(value);
        }
      } else {
        serialized[key] = value;
      }
    }
    return serialized;
  }
  
  return doc;
};

// Response interceptor to automatically serialize MongoDB documents
api.interceptors.response.use(
    (response) => {
        // Serialize the response data
        if (response.data) {
            response.data = serializeMongoDoc(response.data);
        }
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Dispatch an event that AuthContext can listen to
            window.dispatchEvent(new CustomEvent('auth:unauthorized', {
                detail: { message: error.response?.data?.message || 'Session expired' }
            }));
        }
        return Promise.reject(error);
    }
);

//signup function
export const signup = async ({ 
    email,
    username,
    fullName,
    profile,
    phoneNumber,
    gender,
    dateOfBirth,
    password,
    referenceCode}) => {

    try {
        const formattedData = {
            email: email?.trim(),
            username: username?.trim(),
            fullName: fullName?.trim(),
            profile: profile?.trim(),
            phoneNumber: phoneNumber?.trim(),
            gender,
            dateOfBirth,
            password,
            referenceCode
        };
        const response = await api.post('/users/register?role=user', formattedData);
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            if (typeof error.response.data === 'string') {
                throw new Error(error.response.data);
            }
            throw error.response.data;
        }
        throw new Error('Network error');
    }
}

//login function
export const login = async ({ email, password }) => {
    try {
        const formattedData = {
            email: email?.trim(),
            password
        };
        console.log("Sending login data:", { email: formattedData.email, password: '[HIDDEN]' });
        const response = await api.post('/users/sign', formattedData);
        console.log('input received to the backend')
        return response.data;
    } catch (error) {
        console.error("Login API error:", error.response?.data || error.message);
        if (error.response?.data) {
            if (typeof error.response.data === 'string') {
                throw new Error(error.response.data);
            }
            throw error.response.data;
        }
        throw new Error('Network error', error);
    }
}

//logout function        
export const logout = async () => {
    try {
        const response = await api.post('/auth/logout');
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            if (typeof error.response.data === 'string') {
                throw new Error(error.response.data);
            }
            throw error.response.data;
        }
        throw new Error('Network error');
    }
}

// Function to get the current user
export const getCurrentUser = async () => {
    try {
        const response = await api.get('/auth/status/user');
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            if (typeof error.response.data === 'string') {
                throw new Error(error.response.data);
            }
            throw error.response.data;
        }
        throw new Error('Network error');
    }
}