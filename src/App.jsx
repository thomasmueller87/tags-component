import { useState } from "react";
import Tags from "./Tags";

function App() {
  const [tags, setTags] = useState(["ONE", "TWO"]);

  function updateTags(tag) {
    setTags([...tags, tag]);
  }

  function handleDelete(tagToDelete) {
    const newArray = tags.filter((tag) => {
      return tag !== tagToDelete;
    });
    setTags(newArray);
  }

  return (
    <div className="App">
      <form>
        <Tags
          label="Product TagZZZZZ"
          tags={tags}
          onDelete={handleDelete}
          onUpdateTags={updateTags}
        />
      </form>
    </div>
  );
}

export default App;
