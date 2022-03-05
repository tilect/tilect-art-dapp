import GithubIcon from "./icons/Github";
import InstagramIcon from "./icons/Instagram";
import SoundcloudIcon from "./icons/Soundcloud";
import TelegramIcon from "./icons/Telegram";
import { IconProps } from "./types";

const ICONS = {
  telegram: TelegramIcon,
  soundcloud: SoundcloudIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
};

const Icon: React.FC<IconProps> = ({
  icon,
  color = "white",
  size = "100%",
}) => {
  const IconComponent = ICONS[icon];
  return <IconComponent color={color} size={size} />;
};

export default Icon;
