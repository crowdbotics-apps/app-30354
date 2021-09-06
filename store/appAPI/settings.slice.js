import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_setting_list = createAsyncThunk(
  "settings/api_v1_setting_list",
  async payload => {
    const response = await apiService.api_v1_setting_list(payload)
    return response.data
  }
)
export const api_v1_setting_create = createAsyncThunk(
  "settings/api_v1_setting_create",
  async payload => {
    const response = await apiService.api_v1_setting_create(payload)
    return response.data
  }
)
export const api_v1_setting_read = createAsyncThunk(
  "settings/api_v1_setting_read",
  async payload => {
    const response = await apiService.api_v1_setting_read(payload)
    return response.data
  }
)
export const api_v1_setting_update = createAsyncThunk(
  "settings/api_v1_setting_update",
  async payload => {
    const response = await apiService.api_v1_setting_update(payload)
    return response.data
  }
)
export const api_v1_setting_partial_update = createAsyncThunk(
  "settings/api_v1_setting_partial_update",
  async payload => {
    const response = await apiService.api_v1_setting_partial_update(payload)
    return response.data
  }
)
export const api_v1_setting_delete = createAsyncThunk(
  "settings/api_v1_setting_delete",
  async payload => {
    const response = await apiService.api_v1_setting_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_setting_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_setting_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_setting_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_setting_list,
  api_v1_setting_create,
  api_v1_setting_read,
  api_v1_setting_update,
  api_v1_setting_partial_update,
  api_v1_setting_delete,
  slice: settingsSlice
}
