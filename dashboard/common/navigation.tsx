"use client";
import Avatars from "@/components/Common/Avatar";
import ButtonComponent from "@/components/Common/Button";
import AnimateDialog from "@/components/Common/Dialog";
import PaperWrapper from "@/components/Layout/Paper";
import StackLayout from "@/components/Layout/Stack";
import AdminRoute from "@/database/authentication/adminRoute";
import { useUserAuth } from "@/database/authentication/authContext";
import { useAppSelector } from "@/store/hook";
import { LogoutOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

const DashboardNavigation = () => {
  const { logOut, user } = useUserAuth();

  return (
    <AdminRoute>
      <StackLayout
        noOfItems={[
          user?.fullName && (
            <AnimateDialog
              key="animateDialog"
              buttonProps={{
                children: <Avatars name={user?.fullName} />,
                variant: "text",
                sx: { borderRadius: "50%" },
              }}
              dialogTitle="User Profile"
              dialogContentText={
                <PaperWrapper sx={{ padding: "8px" }}>
                  <Typography variant="subtitle1">{user?.fullName}</Typography>
                  <Typography variant="subtitle1">{user?.userName}</Typography>
                  <Typography variant="subtitle1">{user?.userRole}</Typography>
                </PaperWrapper>
              }
            />
          ),
          <ButtonComponent
            variant="outlined"
            endIcon={<LogoutOutlined />}
            key="logout"
            onClick={logOut}
          >
            logout
          </ButtonComponent>,
        ]}
        stackProps={{
          direction: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          spacing: 2,
          sx: { position: "sticky", top: "82px", zIndex: 1 },
        }}
      />
    </AdminRoute>
  );
};
export default DashboardNavigation;
