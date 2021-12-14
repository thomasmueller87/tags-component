import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function Tags({ label, tags, onDelete, onUpdateTags }) {
  const [tagInput, setTagInput] = useState("");

  const handleChange = (event) => {
    const tagInputValue = event.target.value;
    setTagInput(tagInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onUpdateTags(tagInput.toUpperCase());
      setTagInput("");
    }
  };

  return (
    <TagsContainer>
      <label htmlFor="tags">{label}</label>
      <input
        type="text"
        id="tags"
        name="tags"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag!"
        value={tagInput}
      />
      <TagsWrapper>
        {tags.map((tag) => (
          <TagsStyle>
            {tag}{" "}
            <span
              onClick={() => {
                onDelete(tag);
              }}
            >
              X
            </span>
          </TagsStyle>
        ))}
      </TagsWrapper>
    </TagsContainer>
  );
}

export default Tags;

const TagsContainer = styled.section`
  display: grid;
  label {
    font-weight: bold;
  }

  input {
    padding: 0.5rem 0.2rem;
    margin-top: 0.5rem;
  }
`;

const TagsStyle = styled.span`
  padding: 0.5rem;
  margin: 0.5rem;
  background: purple;
  color: white;
  border-radius: 5px;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
