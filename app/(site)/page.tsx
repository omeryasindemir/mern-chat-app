import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="120"
          width="120"
          className="mx-auto w-auto"
          src="/images/logo2.png"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
          >
            Hoşgeldin...
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
