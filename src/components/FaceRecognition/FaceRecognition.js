import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  let mappedBox;
  if(box.length) {
    mappedBox = box.map((singleBox, id) => {
      return (
        <div
          key = {id}
          className="bounding_box"
          style={{
            top: singleBox.topRow,
            right: singleBox.rightCol,
            bottom: singleBox.bottomRow,
            left: singleBox.leftCol
          }}
        />
      );
    })
  }
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=" "
          width="500px"
          height="auto"
        />
        <div className = "bounding_box_set">
           { mappedBox }
        </div>
      </div>
    </div>
  )
}

export default FaceRecognition;
