"use client";

import { Button } from "@charcoal-ui/react"
import styles from "./topPageComponent.module.css"
import { useRouter } from "next/navigation";

const TopPageComponent = () => {
    const router = useRouter();
    
    const handleClickSignUp = () => {
        router.push("/signUpPage")
    }
    const handleClickLogin = () => {
        router.push("/loginPage")
    }

    return(
        <div>
            <p className={styles.test1}>トップに表示する内容</p>
            <Button variant="Default" onClick={handleClickSignUp}>アカウント作成</Button>
            <Button variant="Primary" onClick={handleClickLogin}>ログイン</Button>
        </div>
    )
}

export default TopPageComponent