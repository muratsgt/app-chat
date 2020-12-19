import { Alert } from "react-native";

// alert message acc. to server error
export function resolveAuthError(code) {
    switch (code) {
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


// validates the input from login page
export function validateInputs(email, pass) {
    if (email === "" || pass === "") {
        Alert.alert("Commune Chat", "E-mail or password cannot be empty.")
        return false;
    } else if (pass.length < 6) {
        Alert.alert("Commune Chat", "Password must be at least 6 characters")
        return false;
    } else if (!(email.includes('@') && email.includes('.'))) {
        Alert.alert("Commune Chat", "E-mail is invalid")
        return false;
    } else {
        return true;
    }
};


export function validateNewInputs(email, pass, pass2) {
    if (email === "" || pass === "") {
        Alert.alert("Commune Chat", "E-mail or password cannot be empty.")
        return false;
    } else if (pass !== pass2) {
        Alert.alert("Commune Chat", "Passwords do not match.")
        return false;
    } else if (pass.length < 6) {
        Alert.alert("Commune Chat", "Password must be at least 6 characters")
        return false;
    } else if (!(email.includes('@') && email.includes('.'))) {
        Alert.alert("Commune Chat", "E-mail is invalid")
        return false;
    } else {
        return true;
    }
};