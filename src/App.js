import { useEffect, useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:8000/items";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }
      catch (err) {
        setFetchError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    setTimeout(async () => {
      await fetchItems();
    }, 1000);

  }, []);

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handledelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  const handleAddItem = async (newItemText) => {
    const newItem = {
      id: items.length + 1,
      checked: false,
      item: newItemText
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="App">
      <Header />
      <AddItem handleAddItem={handleAddItem} />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleChange={handleChange}
            handledelete={handledelete}
          />
        )}
      </main>
      <Footer
        length={items.length} />
    </div>
  );
}

export default App;
