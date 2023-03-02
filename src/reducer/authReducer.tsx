type userMetaInfo = {
  loggedIn: boolean;
  userId: string;
};

export const initialStateUser: userMetaInfo = {
  loggedIn: false,
  userId: null,
};
export type ACTIONTYPE =
  | { type: "user_login"; payload: string }
  | { type: "user_logout" };

const authReducer = (state: userMetaInfo = initialStateUser, action: any) => {
  switch (action.type) {
    case "user_login":
      return {
        loggedIn: true,
        userId: action.payload,
      };
    case "user_logout":
      return {
        loggedIn: false,
        userId: null,
      };
    default:
      throw new Error();
  }
};
export default authReducer;
