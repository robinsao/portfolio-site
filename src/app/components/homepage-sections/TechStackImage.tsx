import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import Image from "next/image";

type PropsType = React.ComponentProps<typeof Image> & {
  alt: string;
  tooltipText: string;
};

export default function TechStackImage({
  tooltipText,
  alt,
  ...imageProps
}: PropsType) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Image {...imageProps} alt={alt} />
      </TooltipTrigger>
      <TooltipContent className="[&_*]:font-medium">
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
