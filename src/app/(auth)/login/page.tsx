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

export default function LoginForm() {
  const router = useRouter();
  const [loginUserMutation, { loading }] = useLoginUserMutation();
  const [loginInput, setLoginInput] = useState({} as LoginInput);
  const handleLogin = async () => {
    try {
      console.log("login data", loginInput);
      const { data } = await loginUserMutation({
        variables: { input: loginInput },
      });
      if (!loading) {
        console.log("user: ", data);
        localStorage.setItem("ui", data?.loginUser.token as string);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
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
              required
              onChange={(e) =>
                setLoginInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
