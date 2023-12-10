import React from "react";
import ReactPlayer from "react-player";
const Test = () => {
  return (
    <>
      {/* <ReactPlayer url="https://files.lighthouse.storage/viewFile/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP" /> */}
      <video controls width="640" height="360">
        <source
          src="https://files.lighthouse.storage/viewFile/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP"
          type="video/mp4"
        />
          Your browser does not support the video tag.
        {/* </source> */}
      </video>
    </>
  );
};

export default Test;
