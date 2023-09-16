"use client";

import React from "react";
import styles from "../../styles/dokumenter.module.scss";
import Tillbaka from "../utils/Tillbaka";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../globalRedux/store";
import { tabActions } from "../globalRedux/features/tab/tabSlice";
import PdfFiles from "../utils/PdfFiles";
import LogOut from "../utils/LogOut";
import ForsattaLaddaup from "../utils/ForsattaLaddaup";
import { useSession } from "next-auth/react";

const Dokumenter = () => {
  const session = useSession();
  const dispatch = useDispatch();
  const getData = useSelector((state: RootState) => state.tab.getData);

  const fetcher = (...args: any) =>
    fetch(...([args] as const)).then((res) => res.json());
  const { data, error } = useSWR("/api/showfile", fetcher);
  dispatch(tabActions.getDataHandler(data?.files));

  const router = useRouter();

  const handelLoggain = (e: any) => {
    e.preventDefault();
    router.push("/dokumenter/loggain");
  };

  return (
    <div className={styles.dokumenter}>
      <div className={styles.dokumenter_header}>
        <Tillbaka />
        {session.status === "authenticated" ? (
          <div>
            <ForsattaLaddaup /> <LogOut />
          </div>
        ) : (
          <Link
            onClick={handelLoggain}
            href="/dokumenter/loggain"
            className={styles.loggain_link}
          >
            <p>Logga in</p>
          </Link>
        )}
      </div>
      <div className={styles.dokumenter_file}>
        {getData && getData.length > 0 ? (
          getData.map((item: any) => (
            <PdfFiles
              key={item._id}
              id={item._id}
              title={item.title}
              file={item.image}
            />
          ))
        ) : (
          <div>
            <p className={styles.dokumenter_text}>Ingen dokument</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dokumenter;
