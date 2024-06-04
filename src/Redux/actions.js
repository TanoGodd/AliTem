import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await axios.get('http://endingapi2.somee.com/api/Adjudicado/lista');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get('http://endingapi2.somee.com/api/Adjudicado/lista');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.delete('http://endingapi2.somee.com/api/Adjudicado/lista'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const addUser = createAsyncThunk("users/addUser",
    async (user, {rejectWithValue}) => {
        try
        {      
            const resp = await axios.post('http://endingapi2.somee.com/api/Adjudicado/lista', user);

            return resp.data;
        } 
        catch (error) 
        {
            return rejectWithValue(`Error: ${error.message}`);
        }
    }
);

export const editUSer = createAsyncThunk("users/editUSer",
    async (data) => {
        try
        {      
            const resp = await axios.put('http://endingapi2.somee.com/api/Adjudicado/lista'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);