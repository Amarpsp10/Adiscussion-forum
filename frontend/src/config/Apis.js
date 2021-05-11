//here, you can configure base url and all endpoints of API

export const baseurl = 'http://127.0.0.1:8000/'
export const login  = 'rest-auth/login/'
export const logout = 'rest-auth/logout/'
export const signup = 'rest-auth/registration/'

// create profile 
export const createProfile = 'profile/create/'

// all profiles
export const profiles = 'profiles/'

//send id of user to update profile 
export const updateProfile = 'profile/update/'

// all topics 
export const topic  = 'topics/'

// allc user's coin
export const coins = 'coins/'

//send id wich user's coins you want to update
export const updateCoin = 'coins/update/'

// send email to reset password
export const resetPasswordEmail = 'rest-auth/password/reset/'
// send id,toeken, new password1,new password2 to confirm password
export const resetPasswordConfirm = 'rest-auth/password/reset/confirm/'