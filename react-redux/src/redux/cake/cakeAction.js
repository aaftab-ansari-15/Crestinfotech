import { BUY_CAKE } from "./cakeType";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};

export default buyCake;
