import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, demographicData }) => {
  let faceCount;
  let displayFaceCount;
  let mappedBox;
  let age = '';
  let gender = '';
  let culture = '';
  if (box.length === 1) {
    age = demographicData.age;
    gender = demographicData.gender;
    culture = demographicData.culture;
  }
  if (box.length) {
    faceCount = box.length;
    displayFaceCount = `Faces Detected: ${faceCount}`;
    mappedBox = box.map((singleBox, id) => {
      return (
        <div
          key={id}
          className="bounding_box"
          style={{
            top: singleBox.topRow,
            right: singleBox.rightCol,
            bottom: singleBox.bottomRow,
            left: singleBox.leftCol,
          }}
        />
      );
    });
  } else {
    displayFaceCount = '';
  }

  return (
    <div>
      <div className="center ma1">
        <div className="absolute mt5">
          <img
            id="inputImage"
            src={imageUrl}
            alt=" "
            width="500px"
            height="auto"
          />
          <div className="bounding_box_set">{mappedBox}</div>
        </div>
      </div>
      <div className="mt1 f3">{displayFaceCount}</div>
      <div className="mt1 f3">
        {'Age:' + age + ', Gender:' + gender + ', Culture:' + culture}
      </div>
    </div>
  );
};

export default FaceRecognition;
