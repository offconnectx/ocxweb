import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <NavigationBar />
      <Header />
      <AboutUs />
      <Features/>
    </main>
  );
}
