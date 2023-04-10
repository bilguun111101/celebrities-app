import Input from "../Input";
import Modal from "../Modal";
import { useCallback, useState } from "react";
import { useLogInModal, useRegisterModal } from "@/hooks";
import { toast } from "react-hot-toast";
import axios from "axios";

export const LoginModal = () => {
    const loginModal = useLogInModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) return;
        
        loginModal.onClose()
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async() => {
        if(!email || !password) {
            toast.error("You must input you authentication!!!");
            return;
        }
        try {
            setIsLoading(true);
            loginModal.onClose();
        } catch (error) { console.log(error) } finally {
            setIsLoading(false);
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(ev) => setEmail(ev.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p className="text-inherit">First time using Twitter?
                <span className="text-white cursor-pointer hover:underline ml-2" onClick={onToggle}>
                    Create an account
                </span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    );
}