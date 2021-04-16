import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awasome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What happend today?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/04/elon-musk.jpeg?fit=1200%2C835&ssl=1"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
