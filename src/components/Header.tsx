import Image from "next/image";

export default function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Image src="/vercel.svg" alt="logo" width={32} height={32} />
      <h1 style={{ fontSize: 24, margin: 0 }}>nr-westside-template</h1>
    </header>
  );
}