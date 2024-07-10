import React from "react";
const withLogger = (WrappedComponent, type) => {
    return class extends React.Component {

        login = () => {
            console.log("logged In");
        }

        logout = () => {
            console.log("logout")
        }

        render() {
            return (
                <>
                    <p>{type}</p>
                    <WrappedComponent login={this.login} logout={this.logout} />
                </>
            )
        }
    }
}


class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.login}>Login</button>
                <button onClick={this.props.logout}> Login </button>
            </div>
        )
    }
}

export default withLogger(Button, "Class")