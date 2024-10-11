import { Link } from "react-router-dom";
import Input from "../../components/Input.tsx";
import Button from "../../components/Button.tsx";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <section className="w-screen h-screen bg-bg-log bg-cover bg-center flex flex-row-reverse">
        <div className="w-6/12 h-full bg-white shadow-xl flex flex-col gap-20 items-center justify-center">
          <h2 className="text-5xl font-bold">Faça seu Login</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-4/12 flex flex-col gap-4"
          >
            <label>
              <Input
                register={register}
                name="email"
                type="email"
                placeholder="E-mail"
              />
            </label>
            <label>
              <Input
                register={register}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </label>

            <Button text="Entrar" />
          </form>
          <Link
            to="/"
            className="font-medium text-sky-400 hover:text-sky-600 ease-in duration-150 focus:outline-none focus:text-sky-600"
          >
            Não possuí uma conta? Faça seu cadastro
          </Link>
        </div>
      </section>
    </>
  );
}

export default Login;
