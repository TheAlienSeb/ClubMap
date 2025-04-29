'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from './styles/main.module.css'

export default function Page() {

    const router = useRouter();

    useEffect(() => {
        router.push('/login');
    }, [router]);

    return (
        <div className={styles.container}>
            <p>Redirecting to Log In...</p>
        </div>
    )

}
