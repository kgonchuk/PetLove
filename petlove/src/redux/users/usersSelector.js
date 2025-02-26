export const selectFullUserInfo = (state) => state.userProfile.userInfo;
export const selectUserName = (state) => state.userProfile.userInfo.name;
export const selectUserAvatar = (state) => state.userProfile.userAvatar;
console.log(selectFullUserInfo);
