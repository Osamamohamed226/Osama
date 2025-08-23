import "./AuthPage.css";

export default function AuthPage()
{
    return(
        <>
        
        <section className="authPage">
            <div className="container mb-5">
                <div className="authContainer d-flex container">
                    <div className="row">

                        <div className="left  col-md-4 col-12  p-3 d-flex flex-column gap-4 py-4 px-3">
                            <h1 className="text-white fs-3 fw-bold"> <i class=" p-2  rounded fa-solid fa-question" style={{backgroundColor:"var(--focusBar)"}}></i>  Pyramids Path</h1>
                            <p className="text-white fs-5">Discover the ancient wonders of Egypt with your personal travel companion.</p>
                            <div className="imgContainer overflow-hidden rounded-3 w-75 m-auto">
                                <img src="/img/AuthPage/right.png" className="w-100" alt="" />
                            </div>
                            <p className="text-white">"The journey of a thousand miles begins with a single step into the sands of time."</p>
                        </div>

                        <div className="right col-md-8   col-12  p-5">
                            <div className="headers d-flex justify-content-center align-items-center">
                                <button className="flex-grow-1">Welcome Back</button>
                                <button className="flex-grow-1">Create Your Adventure</button>
                            </div>
                            <div className="formContainer">
                                <h2 className="fw-bold">Sign in to your account</h2>
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label  htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="form-control px-5 mt-2" placeholder="Enter your email" />
                                    </div>

                                    <div className="form-group">
                                        <label  htmlFor="Password">Password</label>
                                        <input type="Password" name="Password" id="Password" className="form-control px-5 mt-2" placeholder="Enter your Password" />
                                    </div>
                                    <input className="btn w-100 mt-2" type="submit" value="Log In ->" />
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="bottomBar  bottom-0 position-fixed w-100 p-2  d-flex justify-content-between align-items-center">
                <div>
                    <i class="text-white fa-solid fa-ankh"></i>
                </div>
                
                <div>
                    <i className="text-white fa-solid fa-ankh"></i>
                </div>

                <div>
                    <i className="text-white fa-solid fa-ankh"></i>
                </div>
                <div>
                    <i className="text-white fa-solid fa-ankh"></i>
                </div>
                
                <div>
                    <i className="text-white fa-solid fa-ankh"></i>
                </div>

                <div>
                    <i className="text-white fa-solid fa-ankh"></i>
                </div>

            </div>
        </section>
        </>
    )
}