export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserPhone = (state) => state.auth.user.phone;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserAvatar = (state) => state.auth.user.avatar;
export const selectToken = (state) => state.auth.user.token;

export const selectUserNoticesViewed = (state) => state.auth.user.noticesViewed;
export const selectUserPetsImgURL = (state) => state.auth.user.pets.imgURL;

export const selectUserPets = (state) => state.auth.user.pets;
