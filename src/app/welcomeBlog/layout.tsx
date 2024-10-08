"use client";

import SideSearchLayer from "@/components/common/SideLayer/SideSearchLayer/SideSearchLayer";
import MainNavigation from "@/components/common/layouts/SidebarNav/MainNavigation/MainNavigation";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./layout.module.scss";

export default function TabsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { workspaceID: string };
}) {
  const isOpen = useSelector((state: RootState) => state.searchReducer.isOpen);
  const isMaximize = useSelector(
    (state: RootState) => state.searchReducer.isMaximize
  );
  return (
    <div className={styles.layoutContainer}>
      <MainNavigation currentTab={params.workspaceID} />
      {children}
      {isOpen && <div className={styles.overlay}></div>}
      <div
        className={`${isMaximize ? styles.sideSearchLayerMaximize : styles.sideSearchLayer}`}
      >
        {isOpen && <SideSearchLayer />}
      </div>
    </div>
  );
}
