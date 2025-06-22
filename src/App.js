import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badges } from "./Badges";
import { Breadcrumbs } from "./Breadcrumbs";
function App() {
  return (
    <div>
      <Header />
      <div>Home</div>
      <Footer />
      <Badges></Badges>
      <Breadcrumbs></Breadcrumbs>
    </div>
  );
}
