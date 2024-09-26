import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <NavigationBar />
      <LandingPage />
      <Footer/>
    </main>
  );
}
