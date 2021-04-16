import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://static01.nyt.com/images/2018/05/15/science/05TB-TURING/merlin_137611185_519449c5-f25b-425c-93fe-a3aa31a955be-articleLarge.jpg?quality=75&auto=webp&disable=upscale)",
        }}></div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">Un Nuevo Dia</p>
            <p className="journal__entry-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ratione!</p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  );
};
