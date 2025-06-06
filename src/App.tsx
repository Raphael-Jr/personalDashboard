import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // let items = ["New York", "San Francisco", "London", "Tokyo", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
      {menuVisible && <Navbar></Navbar>}
      <Button color="primary" onclick={() => setMenuVisible(!menuVisible)}>
        Navbar Toggle
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Button is Clicked</Alert>
      )}
      <Button color="dark" onclick={() => setAlertVisible(true)}>
        Click to see alert
      </Button>
    </div>
  );
}

export default App;
