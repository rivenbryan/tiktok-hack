"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/lib/auth";
import { useState, FormEvent } from "react";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signUpWithEmail(email, password);
  };
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="flex-col">
        <form onSubmit={(e) => handleRegister(e)}>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}
