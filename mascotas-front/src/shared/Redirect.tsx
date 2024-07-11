import { useAuthStore } from "@/store/auth/user.store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Redirect = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  useEffect(() => {
    if (!user && !token) {
      setRedirectToLogin(true);
    }
  }, [user, token]);
  useEffect(() => {
    if (redirectToLogin) {
      router.push("/login");
    }
  }, [redirectToLogin, router]);
  return <></>;
};
