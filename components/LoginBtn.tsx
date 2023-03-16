"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { LoginBtn } from ".";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => signOut() : () => signIn()}
      >
        {session ? "Sign out" : "Sign in"}
      </button>
      <LoginBtn />
    </div>
  );
}
