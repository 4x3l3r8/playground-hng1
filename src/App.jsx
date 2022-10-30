import "./App.css";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Profile from "./components/ProfileImage";
import Socials from "./components/Socials";
import { LinkData } from "./data";

function App() {
  return (
    <div className="container mx-auto">
      <Profile />
      <div className="container w-[95%] md:w-4/5 mx-auto flex flex-col space-y-5">
        {LinkData.map((link) => {
          return (
            <Button to={link.link} htmlId={link.id} key={link.id}>
              {link.name}
            </Button>
          );
        })}
      </div>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
