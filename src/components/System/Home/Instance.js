import {React} from "./imports";
import {HomePageBody} from "./contents/HomePageBody";

export default (instance) => ({
  render: function HomPage() {
    return <HomePageBody instance={instance}/>;
  }
});
