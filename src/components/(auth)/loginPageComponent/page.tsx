"use client";

import { Button, TextField } from "@charcoal-ui/react";
import styles from "./loginComponent.module.css";
import { useState } from "react";
import login from "@/lib/firebase/auth/login";
import { useRouter } from "next/navigation";

const LoginPageComponent = () => {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const result = await login(email, password);
    if(result?.success && result?.token) 
      {
        localStorage.setItem("auth-token", result.token)
        console.log("ログインページでトークンを保存しました",result.token)
        router.push("/")
      }
  };

  return (
    <div>
      <p className={styles.test1}>これはログインです。</p>
      <TextField
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={setEmail}
      ></TextField>
      <TextField
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={setPassword}
      ></TextField>
      <Button variant="Primary" onClick={handleSubmit}>
        Charcoal
      </Button>
    </div>
  );
};

export default LoginPageComponent;
