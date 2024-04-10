"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { UserType, useUserAuth } from "./authContext";
import { Typography } from "@mui/material";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserAuth();
  const router = useRouter();
  const message = (
    <Typography textAlign="center" variant="h1">
      You do not have rights to see this page
    </Typography>
  );

  // useEffect(() => {
  //   if (!user?.uid) {
  //     router.push("../signin");
  //   }
  // }, [user?.uid]);

  // if (!user?.uid) {
  //   return router.push("../signin");
  // }

  return <>{user.uid && user.userRole === UserType.ADMIN ? children : message}</>;
};

export default AdminRoute;
