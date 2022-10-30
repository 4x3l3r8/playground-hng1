import { ReactComponent as Slack } from "../assets/slack.svg";
import { ReactComponent as Github } from "../assets/github.svg";

const Socials = () => {
  return (
    <div className="flex justify-center my-8">
      <Slack className="mx-3"/>
      <Github className="mx-3"/>
    </div>
  );
};

export default Socials;
