import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  let mappedBox;
  let faceCount;
  let displayFaceCount;
  if(box.length) {
    faceCount = box.length;
    displayFaceCount = `The number of faces detected in the image are: ${faceCount}`;
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
  } else {
    displayFaceCount = "";
  }

  return (
    <div className="center ma">
      <div className="absolute mt4">
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
      <div className = "mt1 f4">{displayFaceCount}</div>
    </div>
  )
}

export default FaceRecognition;
