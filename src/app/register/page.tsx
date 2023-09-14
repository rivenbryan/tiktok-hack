"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/lib/auth";
import { useState, FormEvent } from "react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSucccess(false);
    try {
      await signUpWithEmail(email, password, username);
      setSucccess;
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <form onSubmit={(e) => handleRegister(e)} className="w-8/12">
        <h1 className="text-xl font-bold text-center mb-10 drop-shadow-xl">
          Create your account.
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
              Account successfully created! Redirecting you to login page...
            </p>
          )}
          <Button className="border bg-red-500 text-white" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
