"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginInput, useLoginUserMutation } from "@/generated";
import { useTodo } from "@/app/_contexts/TodoContext";

export default function LoginForm() {
  const router = useRouter();
  const { setUserId } = useTodo();
  const [loginUserMutation, { loading }] = useLoginUserMutation();
  const [loginInput, setLoginInput] = useState({} as LoginInput);
  const handleLogin = async () => {
    try {
      console.log("login data", loginInput);
      const { data } = await loginUserMutation({
        variables: { input: loginInput },
      });
      if (data) {
        console.log("user: ", data);
        localStorage.setItem("ui", data?.loginUser._id as string);
        setUserId(data?.loginUser._id as string);
        router.push("/");
      }
    } catch (err) {
      console.log("Error during Login", err);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) =>
                setLoginInput((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="password"
              required
              onChange={(e) =>
                setLoginInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
          <div className="mt-4 text-center text-sm">
            Need an account ?
            <div
              className="w-full underline"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
