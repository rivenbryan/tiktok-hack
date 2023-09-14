"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/auth";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import Image from "next/image";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSucccess] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    setSucccess(false);
    setError("");
    try {
      await signInWithEmail(email, password);
      setSucccess(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <>
      <div className="h-full w-full flex opacity-50 bg-white justify-center items-center">
        <Image
          src={"/Loading.svg"}
          alt="Loading..."
          width={100}
          height={100}
          className="bg-none"
        />
      </div>
    </>
  ) : (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={(e) => handleLogin(e)} className="w-8/12">
        <h1 className="text-xl font-bold text-center mb-10 drop-shadow-xl">
          Log in into your account.
        </h1>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className=""
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error !== "" && (
            <p className="mt-4 text-red-600 text-center">{error}</p>
          )}
          {success && (
            <p className="mt-4 text-green-600 text-center">
              You are logged in. Redirecting you to the home page...
            </p>
          )}
          <Button className="border bg-red-500 text-white" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
