"use client";

import { Form, Input, Text, SubmitButton, Button, Spacer } from "~/hyezo";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
import LoginModal from "~/components/LoginModal";
import { signIn, signOut } from "next-auth/react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3 p-10">
        <Text variant="2xl/bold" color="#fff">
          Create an account
        </Text>
        <Text variant="md/normal">Enter your email to create a new account</Text>
        <div className="mt-5 flex w-full flex-col gap-2 px-14">
          <Form onSubmit={({ email, text, password }) => {}}>
            <Input type="email" label="email" color="twitter" placeholder=" " />
            <Input type="password" label="password" color="twitter" placeholder=" " />
            <Input type="text" label="username" color="twitter" placeholder=" " />
            <SubmitButton>Submit</SubmitButton>
          </Form>
        </div>
        <Spacer msg="or continue with" wrapperClassName="my-4" />
        <Button
          onClick={() => signIn("github")}
          color="black"
          className="flex items-center gap-3"
          outline
          fullWidth
        >
          <FiGithub /> Github
        </Button>
        <div className="mt-3">
          <span>Already have an account? &nbsp;Login </span>
          <span
            onClick={openModal}
            className="cursor-pointer italic underline underline-offset-4"
          >
            here
          </span>
        </div>
      </div>
      <LoginModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}
