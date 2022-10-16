export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccessful = (user) => ({
    type: "LOGIN_SUCCESSFUL",
    payload: user,
})

export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
    payload: user,
})