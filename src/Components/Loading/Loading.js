import Lottie from "react-lottie";
import animationData from "../../Lottie/lottie_loading.json";
import "./Loading.css";

export function Loading() {
  const VictoryDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-wrapper">
      <div className="lottie">
        <Lottie options={VictoryDefaultOptions} height={100} width={100} />
      </div>
      <span className="loading-text">
        REQUESTING LATEST CONVERSION RATES...
      </span>
    </div>
  );
}
