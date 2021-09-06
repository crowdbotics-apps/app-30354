import axios from "axios"
const appAPI = axios.create({
  baseURL: "https://app-30354-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(payload) {
  return appAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_create(payload) {
  return appAPI.post(`/api/v1/customtext/`, payload.data)
}
function api_v1_customtext_read(payload) {
  return appAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return appAPI.put(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_partial_update(payload) {
  return appAPI.patch(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_delete(payload) {
  return appAPI.delete(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_dislike_list(payload) {
  return appAPI.get(`/api/v1/dislike/`)
}
function api_v1_dislike_create(payload) {
  return appAPI.post(`/api/v1/dislike/`, payload.data)
}
function api_v1_dislike_read(payload) {
  return appAPI.get(`/api/v1/dislike/${payload.id}/`)
}
function api_v1_dislike_update(payload) {
  return appAPI.put(`/api/v1/dislike/${payload.id}/`, payload.data)
}
function api_v1_dislike_partial_update(payload) {
  return appAPI.patch(`/api/v1/dislike/${payload.id}/`, payload.data)
}
function api_v1_dislike_delete(payload) {
  return appAPI.delete(`/api/v1/dislike/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return appAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return appAPI.post(`/api/v1/homepage/`, payload.data)
}
function api_v1_homepage_read(payload) {
  return appAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return appAPI.put(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_partial_update(payload) {
  return appAPI.patch(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_delete(payload) {
  return appAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_inbox_list(payload) {
  return appAPI.get(`/api/v1/inbox/`)
}
function api_v1_inbox_create(payload) {
  return appAPI.post(`/api/v1/inbox/`, payload.data)
}
function api_v1_inbox_read(payload) {
  return appAPI.get(`/api/v1/inbox/${payload.id}/`)
}
function api_v1_inbox_update(payload) {
  return appAPI.put(`/api/v1/inbox/${payload.id}/`, payload.data)
}
function api_v1_inbox_partial_update(payload) {
  return appAPI.patch(`/api/v1/inbox/${payload.id}/`, payload.data)
}
function api_v1_inbox_delete(payload) {
  return appAPI.delete(`/api/v1/inbox/${payload.id}/`)
}
function api_v1_like_list(payload) {
  return appAPI.get(`/api/v1/like/`)
}
function api_v1_like_create(payload) {
  return appAPI.post(`/api/v1/like/`, payload.data)
}
function api_v1_like_read(payload) {
  return appAPI.get(`/api/v1/like/${payload.id}/`)
}
function api_v1_like_update(payload) {
  return appAPI.put(`/api/v1/like/${payload.id}/`, payload.data)
}
function api_v1_like_partial_update(payload) {
  return appAPI.patch(`/api/v1/like/${payload.id}/`, payload.data)
}
function api_v1_like_delete(payload) {
  return appAPI.delete(`/api/v1/like/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return appAPI.post(`/api/v1/login/`)
}
function api_v1_match_list(payload) {
  return appAPI.get(`/api/v1/match/`)
}
function api_v1_match_create(payload) {
  return appAPI.post(`/api/v1/match/`, payload.data)
}
function api_v1_match_read(payload) {
  return appAPI.get(`/api/v1/match/${payload.id}/`)
}
function api_v1_match_update(payload) {
  return appAPI.put(`/api/v1/match/${payload.id}/`, payload.data)
}
function api_v1_match_partial_update(payload) {
  return appAPI.patch(`/api/v1/match/${payload.id}/`, payload.data)
}
function api_v1_match_delete(payload) {
  return appAPI.delete(`/api/v1/match/${payload.id}/`)
}
function api_v1_message_list(payload) {
  return appAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(payload) {
  return appAPI.post(`/api/v1/message/`, payload.data)
}
function api_v1_message_read(payload) {
  return appAPI.get(`/api/v1/message/${payload.id}/`)
}
function api_v1_message_update(payload) {
  return appAPI.put(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_partial_update(payload) {
  return appAPI.patch(`/api/v1/message/${payload.id}/`, payload.data)
}
function api_v1_message_delete(payload) {
  return appAPI.delete(`/api/v1/message/${payload.id}/`)
}
function api_v1_profile_list(payload) {
  return appAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return appAPI.post(`/api/v1/profile/`, payload.data)
}
function api_v1_profile_read(payload) {
  return appAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return appAPI.put(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_partial_update(payload) {
  return appAPI.patch(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_delete(payload) {
  return appAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function api_v1_setting_list(payload) {
  return appAPI.get(`/api/v1/setting/`)
}
function api_v1_setting_create(payload) {
  return appAPI.post(`/api/v1/setting/`, payload.data)
}
function api_v1_setting_read(payload) {
  return appAPI.get(`/api/v1/setting/${payload.id}/`)
}
function api_v1_setting_update(payload) {
  return appAPI.put(`/api/v1/setting/${payload.id}/`, payload.data)
}
function api_v1_setting_partial_update(payload) {
  return appAPI.patch(`/api/v1/setting/${payload.id}/`, payload.data)
}
function api_v1_setting_delete(payload) {
  return appAPI.delete(`/api/v1/setting/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return appAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_userphoto_list(payload) {
  return appAPI.get(`/api/v1/userphoto/`)
}
function api_v1_userphoto_create(payload) {
  return appAPI.post(`/api/v1/userphoto/`, payload.data)
}
function api_v1_userphoto_read(payload) {
  return appAPI.get(`/api/v1/userphoto/${payload.id}/`)
}
function api_v1_userphoto_update(payload) {
  return appAPI.put(`/api/v1/userphoto/${payload.id}/`, payload.data)
}
function api_v1_userphoto_partial_update(payload) {
  return appAPI.patch(`/api/v1/userphoto/${payload.id}/`, payload.data)
}
function api_v1_userphoto_delete(payload) {
  return appAPI.delete(`/api/v1/userphoto/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return appAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return appAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return appAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return appAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return appAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return appAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return appAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return appAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_read(payload) {
  return appAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return appAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return appAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_create,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_customtext_delete,
  api_v1_dislike_list,
  api_v1_dislike_create,
  api_v1_dislike_read,
  api_v1_dislike_update,
  api_v1_dislike_partial_update,
  api_v1_dislike_delete,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_delete,
  api_v1_inbox_list,
  api_v1_inbox_create,
  api_v1_inbox_read,
  api_v1_inbox_update,
  api_v1_inbox_partial_update,
  api_v1_inbox_delete,
  api_v1_like_list,
  api_v1_like_create,
  api_v1_like_read,
  api_v1_like_update,
  api_v1_like_partial_update,
  api_v1_like_delete,
  api_v1_login_create,
  api_v1_match_list,
  api_v1_match_create,
  api_v1_match_read,
  api_v1_match_update,
  api_v1_match_partial_update,
  api_v1_match_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_setting_list,
  api_v1_setting_create,
  api_v1_setting_read,
  api_v1_setting_update,
  api_v1_setting_partial_update,
  api_v1_setting_delete,
  api_v1_signup_create,
  api_v1_userphoto_list,
  api_v1_userphoto_create,
  api_v1_userphoto_read,
  api_v1_userphoto_update,
  api_v1_userphoto_partial_update,
  api_v1_userphoto_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
