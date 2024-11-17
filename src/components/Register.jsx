import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createNewUser, setUser,error,setError,updateUserProfile}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const form = new FormData(e.target)
    const name= form.get('name')
    if(name.length<5){
      setError({...error,name:'must be 5 character'})
      return;
    }
    const email= form.get('email')
    const photo= form.get('photo')
    const password= form.get('password')
     console.log({name,email,password,photo})
     createNewUser(email,password)
     .then((result)=>{
      const user  = result.user
      setUser(user)
      console.log(user)
      updateUserProfile({displayName:name,photoURL:photo})
      .then(()=>{
        navigate('/');

      })
      .catch(error=>{
        console.log(error)
      })
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      // ..
    });
  }
    return (
        <div>
             <div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        {
          error.name&&(
          <label className="label text-xs text-red-500">
          {error.name}
          </label>)
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo-url" className="input input-bordered" required />
        </div>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
      <p className="px-4 text-xs pb-2">if you have allready  an account please <Link className='text-red-500' to='/auth/login'>login</Link></p>
    </div>
        </div>
        </div>
    );
};

export default Register;