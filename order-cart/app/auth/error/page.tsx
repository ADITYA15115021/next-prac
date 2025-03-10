
"use client"
import { useSearchParams } from "next/navigation";

export default function AuthError() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    return (
        <div>
            <h1>Authentication Error</h1>
            {error && <p style={{ color: "red" }}>{decodeURIComponent(error)}</p>}
        </div>
    );
}
