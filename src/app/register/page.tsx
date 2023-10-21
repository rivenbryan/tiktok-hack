"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/lib/auth";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AuthError } from "@supabase/supabase-js";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSucccess(false);
    try {
      await signUpWithEmail(email, password);
      setSucccess;
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      if (err instanceof AuthError) {
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
      {isLoading && (
        <div className="fixed w-screen h-full items-center flex justify-center bg-white opacity-30">
          <Image
            src={"/Loading.svg"}
            alt="Loading..."
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}
