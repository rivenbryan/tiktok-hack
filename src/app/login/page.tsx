"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/auth";
import { useState, FormEvent } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };
  return (
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
          <Button className="border bg-red-500 text-white" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
