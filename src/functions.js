export function resolveAuthError (code) {
    switch(code){
        case "auth/invalid-email":
            return "Invalid E-mail";
        case "auth/user-disabled":
            return "User is disabled";
        case "auth/user-not-found":
            return "User not found";
        case "auth/wrong-password":
            return "Wrong password";
        case "auth/null":
            return "E-mail or password is empty!";
        default:
            break;
    }
};