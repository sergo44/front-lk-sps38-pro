import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Строй Проект Сервис - Личный кабинет",
    description: "Срой Проект Сервис - Личный кабинет",
};

export default function DefaultLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
