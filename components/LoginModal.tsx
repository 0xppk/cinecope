import { Form, Input, Text, SubmitButton, Button, Spacer, Modal } from "~/hyezo";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { ModalProps } from "~/hyezo/Modal";
import { signIn } from "next-auth/react";

export default function LoginModal({ isOpen, setIsOpen }: ModalProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex h-full items-center justify-center text-black">
        <div className="flex flex-col items-center gap-3 p-5">
          {/* 모달 타이틀 */}
          <Text variant="xl/bold">Welcome to Cinecope</Text>
          {/* 로그인 폼 */}
          <div className="mt-3 flex w-full flex-col gap-2">
            <Form onSubmit={({ email, text, password }) => {}}>
              <div className="flex">
                <span className="blue-dot"></span>
                <Text variant="xs/normal">Sign in to your account</Text>
              </div>
              <Input type="email" label="email" color="twitter" placeholder=" " />
              <SubmitButton>Submit</SubmitButton>
            </Form>
          </div>
          {/* 구분선 */}
          <Spacer
            msg="or continue with"
            wrapperClassName="my-4"
            textClassName="bg-white text-black"
            borderClassName="border-black"
          />
          {/* 깃허브 버튼 */}
          <Button
            onClick={() => signIn("github")}
            color="black"
            className="flex items-center gap-3"
            fullWidth
          >
            <FiGithub /> Github
          </Button>
          {/* 회원가입 링크 */}
          <div className="mt-3">
            <span>Don&apos;t have an account? Sign up </span>
            <Link href="/register">
              <span
                className="italic underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
