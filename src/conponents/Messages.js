const Messages = ({ message }) => {
    return (
        <li>{message.user} : {message.content}
            <button>削除</button>
        </li>
    )
}

export default Messages