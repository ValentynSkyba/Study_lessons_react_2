import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/About/About";
import { WelcomeSection } from "./components/WelcomeSection/WelcomeSection";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Profile from "./components/Profile/Profile";
import userData from "./assets/user.json";

const App = () => {
  const titleBtn = "Please click me ";
  const filmsData = [
    { id: "1", title: "Got" },
    { id: "2", title: "Bolt" },
    { id: "3", title: "Lord" },
    { id: "4", title: "MMM" },
    { id: "5", title: "Lamb" },
  ];
  const ToDolist = [
    { id: "5", title: "Sleep" },
    { id: "6", title: "By me a milk" },
    { id: "47", title: "Coffe" },
    { id: "7", title: "Aaaaa" },
  ];

  const online = true;
  const selectedTab = "films";

  return (
    <div>
      <Header />
      <Profile user={userData} />
      <WelcomeSection />
      <AboutMe />
      <Footer />
      <Text text="This is text from props" />
      <Text apple="React is apple" />
      <Text text="Cool level" />
      <Button title="Apple" />
      <Button title="Cherry" />
      <Button title={titleBtn} count={22} />
      <List data={filmsData} />
      <List data={ToDolist} title="Todos section" />
      {online && <h1>Welcome!</h1>}
      {/* {Тернарний рендер} */}
      {online === true ? <h2>HAAAA</h2> : <h2>Ups</h2>}
      {/* {Рендер за умовою} */}
      {selectedTab === "films" ? (
        <List online={online} data={filmsData} title="Movie" />
      ) : (
        <List data={ToDolist} title="Vogon" />
      )}
    </div>
  );
};

export default App;
