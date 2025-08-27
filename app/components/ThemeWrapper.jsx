import ThemeToggle from "./ThemeToggle";

export default function ThemeWrapper({ children }) {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}