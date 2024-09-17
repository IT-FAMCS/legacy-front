import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { NotificationProps } from "../interfaces/notification";

export const NotificationComponent = ({ message, severity, open, onClose }: NotificationProps) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
          <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
    );
};