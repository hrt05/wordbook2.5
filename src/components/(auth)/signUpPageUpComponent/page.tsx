"use client";

import { Button, TextField } from "@charcoal-ui/react";
import styles from "./signUpComponent.module.css";
import { useState } from "react";
import signUp from "@/lib/firebase/auth/signUp";
import { useRouter } from "next/navigation";

const SignUpPageComponent = () => {
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const success = await signUp(email, password);
    if(success) router.push("/")
  };

  return (
    <div>
      <p className={styles.test1}>これはサインアップです。</p>
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

export default SignUpPageComponent;
