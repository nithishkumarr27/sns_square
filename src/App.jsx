import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import CTASection from "./components/CTA"; // Import the CTA component
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;
