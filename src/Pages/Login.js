import Input from "../Components/Input";
import Label from "../Components/Label";
import Button from "../Components/Button";

export default function Login() {

    const login = async (email, password) => {
        let response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if (!response.ok) {
            // Do some error handling
        }
        return response.json()
    }

    const handleLogin = (e) => {
        e.preventDefault()
        // do Login logic
    }

    return (
        <div className="container">
            <form onSubmit={handleLogin} className="col-6 offset-3">
                <h3 className="mt-5">Login</h3>
                <hr />
                <div className="mb-3">
                    <Label className="form-label" htmlFor="email" text="Email:"/>
                    <Input className="form-control" name="email" type="email" id="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-3">
                    <Label className="form-label" htmlFor="password" text="Password:" />
                    <Input className="form-control" name="password" type="password" id="password" placeholder="Enter your password" />
                </div>
                <Button type="submit" className="btn btn-outline-primary mt-3" text="Login"/>
            </form>
        </div>
    )
}