"use client";

import { useState } from "react";
import { NewUserInput, useCreateNewUserMutation } from "@/generated";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [createNewUserMutation, { loading }] = useCreateNewUserMutation();
  const [signUpInput, setSignUpInput] = useState({} as NewUserInput);
  const handleSignUp = async () => {
    try {
      console.log("signup", signUpInput);
      const { data } = await createNewUserMutation({
        variables: { input: signUpInput },
      });
      console.log("new user: ", data);
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Username</Label>
              <Input
                id="first-name"
                placeholder="username"
                required
                onChange={(e) =>
                  setSignUpInput((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) =>
                  setSignUpInput((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setSignUpInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSignUp}>
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?
            <div
              className="w-full underline"
              onClick={() => router.push("/login")}
            >
              Login
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
