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

//get all topics and send id to get particular topic
export const topic  = 'topics/'
//get topics created by user , paas username as parameter
export const userTopic = 'topics/user/'
// get topics saved by user and send the username as parameter
export const savedTopics = 'topics/saved/' 
//to find out initially topic saved or not, send saver username and toic_id as parameter
export const isSavedTopic = 'topics/issaved/' 
//update or save topics for user , post on 
export const saveUserTopics = 'savetopic/'
// delete saved topic of user and send id as parameter
export const deleteSavedTopic = 'topics/delete/'

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