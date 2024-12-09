"use client";
import { useEffect, useState } from "react";
import { checkAuthentication } from "@/lib/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthentication(localStorage.getItem("token") || "").then((verify) => {
      if (!verify) {
        toast.error("User is not authorized !!");
        router.push("/login");
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />;

  return <>{children}</>;
}
