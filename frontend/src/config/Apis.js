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
//get the profile of particular user and send username as parameter
export const getProfile = 'profile/get/'

//get all topics 
export const topic  = 'topics/'
// get topics saved by user and send the username as parameter
export const savedTopics = 'topics/saved/'

//  post new user coin on this endpoint
export const coins = 'coins/'
// get the Coins of particular user and send with username as parameter
export const getCoins = 'coins/get/'
//update the coins of user and send parameter as id 
export const updateCoins = 'coins/update/'



// send email to reset password
export const resetPasswordEmail = 'rest-auth/password/reset/'
// send id,toeken, new password1,new password2 to confirm password
export const resetPasswordConfirm = 'rest-auth/password/reset/confirm/'