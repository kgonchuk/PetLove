export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserPhone = (state) => state.auth.user.phone;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserAvatar = (state) => state.auth.user.avatar;
