import React from "react";
import AuthLayout from "../../../components/layouts/auth";
import { HeadComponent } from "../../../components/utils/head";
import useStatusLogged from "../../../hooks/useStatusLogged";
import LoginMod from "../../../modules/auth/login";

export default function Login() {
  const user = useStatusLogged();
  return (
    <AuthLayout>
      <HeadComponent title={"Login | Felcy"} />
      <LoginMod user={user} />
    </AuthLayout>
  );
}
