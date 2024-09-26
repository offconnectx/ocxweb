import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <NavigationBar />
      <Header />
      <AboutUs />
      <Features/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
