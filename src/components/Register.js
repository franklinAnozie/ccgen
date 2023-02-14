import { useRegContext } from '../context/regContext'

const Register = () => {
    const {
        regInput,
        setRegInput,
        greenClass,
        enabler,
        username,
        email,
        fullname,
        policy,
        buttonEnabler,
        comparePassword,
        regUser
    } = useRegContext()

  return (
    <div className='container'>
        <div className="cols">
            <form onSubmit={(e)=>regUser(e)}>
                <div className="row">
                    <label htmlFor="full-name">Full Name: </label>
                    <input type="text" id="full-name" name="full-name" required onChange={(e) => setRegInput({...regInput, fullname: e.target.value})} ref={fullname}/> 
                </div>
                <div className="row">
                    <label htmlFor="reg_user-name">User Name: </label>
                    <input type="text" id="reg_user-name" name="reg_user-name" required onChange={(e) => setRegInput({...regInput, username: e.target.value})}ref={username}/>
                </div>
                <div className="row">
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" id="email" name="email" required onChange={(e) => setRegInput({...regInput, email: e.target.value})} ref={email}/>
                </div>
                <div className="row">
                    <label htmlFor="reg_password">Password: </label>
                    <input type="password" id="reg_password" name="password" required onChange={(e) => setRegInput({...regInput, password: e.target.value})}/>
                </div>
                <div className="row">
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <input type="password" id="confirm-password" name="confirm-password" required onChange={(e)=>{comparePassword(e)}} className={greenClass.color} />
                    <span>{greenClass.confirmation}</span>
                </div>
                <div className="row">
                    <label htmlFor="accept-policy">Accept Policy: </label>
                    <input type="checkbox" id="accept-policy" onClick={()=>buttonEnabler()} required ref={policy}/>
                </div>
                <div className="row">
                    <button id="submit" disabled ref={enabler}>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register