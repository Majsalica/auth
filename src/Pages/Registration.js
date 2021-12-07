import Input from "../Components/Input";
import Label from "../Components/Label";
import Button from "../Components/Button";

export default function Registration() {
    const handleRegistration = (e) => {
        e.preventDefault()
        // do Registration logic
    }

    return (
        <div className="container">
            <form onSubmit={handleRegistration} className="col-6 offset-3">
                <h3 className="mt-5">Registration</h3>
                <hr />
                <div className="mb-3">
                    <Label className="form-label" htmlFor="name" text="Name:" />
                    <Input className="form-control" name="name" type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <Label className="form-label" htmlFor="email" text="Email:" />
                    <Input className="form-control" name="email" type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <Label className="form-label" htmlFor="password" text="Password:" />
                    <Input className="form-control" name="password" type="password" id="password" placeholder="Enter your password"/>
                </div>
                <Button type="submit" className="btn btn-outline-primary mt-3" text="Register"/>
            </form>
        </div>
    )
}