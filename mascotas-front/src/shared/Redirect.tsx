import { useAuthStore, usePageContextStore } from "@/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Redirect = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const setPageContext = usePageContextStore((state) => state.setPageContext);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  useEffect(() => {
    setPageContext(router.asPath);
  }, [router.asPath]);
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
