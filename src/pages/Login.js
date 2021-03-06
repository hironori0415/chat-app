import React, { useState, useContext } from 'react'
import firebase from './../config/firebase'
import { AuthContext } from '../AuthService'　//user情報をとってきている?
import { Redirect } from 'react-router-dom' //リダイレクトを使用する

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //contextの情報を取得してくる
    const user = useContext(AuthContext) //user情報をとってきている

    //userに値が入っていたら　/　へ　リダイレクト
    if (user) {
        return <Redirect to='/' />　//userが入っているとRedirectする
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                //Login済みの場合は'/'に飛ぶ処理
                history.push('/')
            })
            .catch((error) => {
                console.log(error)
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )


}
export default Login