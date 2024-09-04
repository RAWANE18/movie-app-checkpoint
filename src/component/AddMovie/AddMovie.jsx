import { useState } from "react";
import "./AddMovie.css";
export default function AddMovie({ AddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    AddMovie({
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Movie Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        min="0"
        max="10"
        step="0.1"
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}
