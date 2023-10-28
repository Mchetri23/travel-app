import auth from '@react-native-firebase/auth';

const signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        alert('Please fill in the details')
    }
    else{
        return auth().createUserWithEmailAndPassword(email.trim(), password)
        .then(item =>{
            const {uid} = item?.user;
            auth().currentUser.updateProfile({
                displayName: fullName
            })
            return uid
        })
        .catch(
            err => alert(err?.code, err?.message)
        )
    }
}

const signIn = (email, password) =>{
    if(!email || !password){
        alert('Enter details')
    }else{
        return auth().signInWithEmailAndPassword(email.trim(), password)
        .then(() =>{
            console.log(auth()?.currentUser?.uid)
        })
        .catch(
            err => alert(err.code, err.message) 
        ) 
    }
}

const signOut = () =>{
    return auth().signOut()
}

const Auth = {
    signIn, signOut, signUp
}

export default Auth