import { useCallback, useState, React } from "react";
import { Link } from 'react-router-dom';
import { useSession } from "../Contexts/SessionContext";

const LoginForm = (props) => {
  const { login } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      if (!disabled) {
        setDisabled(true);
        try {
          await login(username, password);
        } catch (err) {
          alert(err?.message);
          setDisabled(false);
        }
      }
    },
    [disabled, login, password, username]
  );
  return (
    //form
    <section className="#">
    <div class="container">
        <div class="px-2 mt-5 border-index">
        <div class="row justify-content-center">          
          <div class="mt-3 col-md-4 px-5 col-md-4">
            <img class="mt-5 px-2" src={'./logo.png'}></img>
          </div>
          <div class="mt-5 px-5 col-md-4">
          <form className="text-center" onSubmit={handleLogin}>
              <div class="mt-5 form-group">
                <br></br>
                <label for="Username">Username</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Enter your room number" 
                onChange={handleUsernameChange}
                />
                <br></br>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                class="form-control" 
                placeholder="Password"
                onChange={handlePasswordChange}
                 />
              </div>
              <br></br>
              <button type="submit" class="btn btn-warning">Login</button>
            </form>            
          </div>          
        </div>
      </div>
    </div>
    </section>
  );
};
export default LoginForm;
