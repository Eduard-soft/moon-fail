'use client'

import styles from './Auth.module.scss'
import { useState } from "react"
import { useAuthForm } from "./useAuthForm"


export function Auth() {

	const [isReg, setIsReg] = useState(false)

	// const { onSubmit, form, isPending } = useAuthForm(isReg)

	return <div className={styles.wrapper}>
		<div className={styles.left}>
			<Image 
					src='/images/auth.svg'
					alt='Auth Logo'
					width={100}
					height={100}
			/>
			</div>
		<div className={styles.right}></div>
	</div>
}