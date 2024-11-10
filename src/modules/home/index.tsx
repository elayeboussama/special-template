import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(); // You cqn specify the namespace in parameter ( in this case "home")

  return (
    <div>
      <h1>{t("title", { ns: "home" })}</h1>
      <p>{t("description", { ns: "home" })}</p>
    </div>
  );
}

export default Home;
