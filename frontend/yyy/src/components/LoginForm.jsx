import InputField from './InputField';

const LoginForm = () => {
  return (
    <form className="max-w-sm mx-auto">
      <InputField label="Username:" type="text" name="username" id="username" />
      <InputField label="Password:" type="password" name="password" id="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
