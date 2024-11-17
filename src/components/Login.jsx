import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const{userLogin,setUser,setError,error}=useContext(AuthContext)
  const location= useLocation()
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
      const form =e.target
      const email= form.email.value
      const password=form.password.value
      console.log({email,password})
      userLogin(email,password)
      .then(result=>{
        const user =result.user
        setUser(user);
        navigate(location?.state ? location.state :'/')

      })
      .catch((err) => {
        setError({...error,login:err.code})
        // ..
      });

    

  }
    return (
        <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          {
            error.login && (
              <label className="label text-red-500 text-xs">invalid password or email
          </label>
            )
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>if you dont have an account please <Link className='text-red-500' to='/auth/register'>register</Link></p>
    </div>
        </div>
    );
};

export default Login;