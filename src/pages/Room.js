import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthService'
import firebase from './../config/firebase'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Button } from '@material-ui/core';
import styled from "styled-components"
import Messages from '../conponents/Messages';


const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    // const user = useContext(AuthContext)
    // console.log(user)

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy("time")
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])
    console.log(messages)
    const user = useContext(AuthContext)
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        if (!value.trim()) { //もしvalueから最初と最後から空白文字列を取り除いた値がfalsyだったら、函数の実行を止める
            return
        }
        //入力後に空白に戻す処理
        setValue('')
    }


    return (
        <>
            <RedH1>Room</RedH1>
            <ul>
                {/* <li>
                    sample user : sample message
                </li> */}
                {messages ?
                    messages.map((message => {
                        return (
                            // <Li>{message.user} : {message.content}</Li>
                            <Messages message={message} />
                            // <Messages user={message.user} message={message.message} />
                        )
                    })) :
                    <CircularProgress />
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">送信</Button>

            </form>
            <button onClick={() => firebase.auth().signOut()}>ログアウト</button>
        </>
    )
}

const RedH1 = styled.h1`
color: red;
`
const Li = styled.li`
font-size:20px;
`
const Input = styled.input`
width: 100px;
height: 30px;
`

export default Room