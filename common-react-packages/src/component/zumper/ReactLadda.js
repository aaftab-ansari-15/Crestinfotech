// import React, { useState, Component } from "react";
// import { LaddaButton, XL, SLIDE_UP } from "react-ladda";
// import "ladda/dist/ladda-themeless.min.css"; // Import Ladda styles
// const ReactLadda = () => {
//   const [loading, setLoading] = useState(false);
//   const [progress, setProgress] = useState(0.5);
//   const onClick = () => {
//     setLoading(true);
//     let progressValue = 0;
//     const interval = setInterval(() => {
//       progressValue += 10;
//       setProgress(progressValue);

//       if (progressValue >= 100) {
//         clearInterval(interval);
//         setLoading(false);
//       }
//     }, 1000);
//   };
//   return (
//     <LaddaButton
//       loading={loading}
//       progress={progress / 100} // Ladda expects progress between 0 and 1
//       onClick={onClick}
//       color="mint"
//       size={XL}
//       style={SLIDE_UP}
//       spinnerSize={30}
//       spinnerColor="#ddd"
//       spinnerLines={12}
//     >
//       Click Here!
//     </LaddaButton>
//   );
// };

// export default ReactLadda;
