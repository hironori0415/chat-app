import React, { useState, useContext } from 'react'
import firebase from './../config/firebase'
import { AuthContext } from '../AuthService'
import FacebookProvider from '../config/Facebook'
import { Redirect } from 'react-router-dom' //リダイレクトを使用する


const SignUp = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to='/' />　//userが入っているとRedirectする
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // console.log(user)
                user.updateProfile({
                    displayName: name
                    // Signed in
                    // ...

                })
                history.push('/')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                // ..
            });
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='name'>name</label>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        placeholder='name'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
            <button onClick={FacebookProvider}>Facebookアカウントでログイン</button>
        </div>
    )

}

export default SignUp