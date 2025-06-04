import Image from "next/image";
import Header from "./components/header";
import BankCard from "./components/bank-card";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="mt-6 sm:mt-8 lg:mt-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1600px",
        }}
      >
        <BankCard currency="USD" balance="$4,297.00" last4="7432" />
      </section>
    </>
  );
}
