import React, { createContext, useReducer, useEffect } from 'react';
import { getCurrentUser, login as loginApi, logout as logoutApi, signup as signupApi } from '../lib/userApi';

export const AuthContext = createContext();

const initialState = {
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload, loading: false, error: null, isAuthenticated: true };
        case 'SET_LOADING':
            return { ...state, loading: true, error: null };
        case 'SET_ERROR':
            return { ...state, loading: false, error: action.payload, isAuthenticated: false };
        case 'CLEAR_USER':
            return { ...state, user: null, loading: false, error: null, isAuthenticated: false };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Get current user function
    const getUser = async () => {
        try {
            // Check if we have any auth cookies before making the request
            const cookies = document.cookie;
            if (!cookies.includes('SESSION_ACCESS_TOKEN') && !cookies.includes('SESSION_REFRESH_TOKEN')) {
                return { user: null, isAuthenticated: false };
            }

            const res = await getCurrentUser();
            if (res.success && res.data && res.data.user) {
                dispatch({ type: 'SET_USER', payload: res.data.user });
                return { user: res.data.user, isAuthenticated: true };
            } else {
                dispatch({ type: 'CLEAR_USER' });
                return { user: null, isAuthenticated: false };
            }
        } catch (error) {
            console.error('Error getting user:', error);
            dispatch({ type: 'CLEAR_USER' });
            return { user: null, isAuthenticated: false };
        }
    };

    // Login function
    const login = async (email, password) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            console.log('AuthContext login called with:', { email, password: password ? '[HIDDEN]' : 'undefined' });
            const res = await loginApi({ email, password });
            console.log('AuthContext login API response:', res);
            if (res.success && res.data) {
                dispatch({ type: 'SET_USER', payload: res.data });
            } else {
                throw new Error('Login failed');
            }
        } catch (err) {
            console.error('AuthContext login error:', err);
            dispatch({ type: 'SET_ERROR', payload: err.message || 'Login error' });
            throw err;
        }
    };

    // Signup function
    const signup = async (userData) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await signupApi(userData);
            if (res.success && res.data && res.data.user) {
                dispatch({ type: 'SET_USER', payload: res.data.user });
            } else {
                throw new Error('Signup failed');
            }
        } catch (err) {
            dispatch({ type: 'SET_ERROR', payload: err.message || 'Signup error' });
            throw err;
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await logoutApi();
        } finally {
            dispatch({ type: 'CLEAR_USER' });
        }
    };

    // Check current user on mount - only if we have cookies
    useEffect(() => {
        let isMounted = true;

        const handleUnauthorized = () => {
            if (isMounted) dispatch({ type: 'CLEAR_USER' });
        };

        window.addEventListener('auth:unauthorized', handleUnauthorized);

        // Only check for existing session if we have cookies
        const checkExistingSession = async () => {
            try {
                // Check if we have any auth cookies before making the request
                const cookies = document.cookie;
                if (cookies.includes('SESSION_ACCESS_TOKEN') || cookies.includes('SESSION_REFRESH_TOKEN')) {
                    const res = await getCurrentUser();
                    if (isMounted && res.data && res.data.user) {
                        dispatch({ type: 'SET_USER', payload: res.data.user });
                    } else if (isMounted) {
                        dispatch({ type: 'CLEAR_USER' });
                    }
                } else {
                    // No auth cookies, set as not authenticated
                    if (isMounted) {
                        dispatch({ type: 'CLEAR_USER' });
                    }
                }
            } catch {
                if (isMounted) dispatch({ type: 'CLEAR_USER' });
            }
        };

        checkExistingSession();

        return () => {
            isMounted = false;
            window.removeEventListener('auth:unauthorized', handleUnauthorized);
        };
    }, []);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            isLoading: state.loading,
            error: state.error,
            getUser,
            login,
            signup,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use in components
