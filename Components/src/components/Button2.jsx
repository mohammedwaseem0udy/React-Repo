function withLogger(WrappedComponent) {
    return (props) => {
        function login() {
            console.log("logged in");
        }

        function logout() {
            console.log("logout");
        }

        return (
            <div>
                <p>Name: {props.name}</p>
                <WrappedComponent {...props} login={login} logout={logout} />
            </div>
        )
    }
}

function Button2(props) {
    return (
        <div>
            <button onMouseOver={props.login}>{props.LoginName}</button>
            <button onMouseOver={props.logout}>{props.LogoutName}</button>
        </div>
    )
}

export default withLogger(Button2)