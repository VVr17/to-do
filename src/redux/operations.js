import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://636a77a5c07d8f936d9ee251.mockapi.io';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  // payloadCreator(arg, thunkAPI)
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // success - return promise results
      return response.data;
    } catch (error) {
      // error - return error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', {
        id: nanoid().slice(0, 8),
        completed: false,
        text,
      });
      return response.data;
    } catch (error) {
      // error - return error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      // error - return error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'todos/toggleCompleted',
  async (todo, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${todo.id}`, {
        completed: !todo.completed,
      });
      return response.data;
    } catch (error) {
      // error - return error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
