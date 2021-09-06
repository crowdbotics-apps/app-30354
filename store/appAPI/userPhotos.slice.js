import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userphoto_list = createAsyncThunk(
  "userPhotos/api_v1_userphoto_list",
  async payload => {
    const response = await apiService.api_v1_userphoto_list(payload)
    return response.data
  }
)
export const api_v1_userphoto_create = createAsyncThunk(
  "userPhotos/api_v1_userphoto_create",
  async payload => {
    const response = await apiService.api_v1_userphoto_create(payload)
    return response.data
  }
)
export const api_v1_userphoto_read = createAsyncThunk(
  "userPhotos/api_v1_userphoto_read",
  async payload => {
    const response = await apiService.api_v1_userphoto_read(payload)
    return response.data
  }
)
export const api_v1_userphoto_update = createAsyncThunk(
  "userPhotos/api_v1_userphoto_update",
  async payload => {
    const response = await apiService.api_v1_userphoto_update(payload)
    return response.data
  }
)
export const api_v1_userphoto_partial_update = createAsyncThunk(
  "userPhotos/api_v1_userphoto_partial_update",
  async payload => {
    const response = await apiService.api_v1_userphoto_partial_update(payload)
    return response.data
  }
)
export const api_v1_userphoto_delete = createAsyncThunk(
  "userPhotos/api_v1_userphoto_delete",
  async payload => {
    const response = await apiService.api_v1_userphoto_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userPhotosSlice = createSlice({
  name: "userPhotos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_userphoto_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_userphoto_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_userphoto_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_userphoto_list,
  api_v1_userphoto_create,
  api_v1_userphoto_read,
  api_v1_userphoto_update,
  api_v1_userphoto_partial_update,
  api_v1_userphoto_delete,
  slice: userPhotosSlice
}
