import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <div>Auth {children}</div>;
};

export default AuthLayout;
