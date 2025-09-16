import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface OpinionCartProps {
  title: string;
  description: string;
  imageSrc: string;
  name: string;
}

const OpinionCart = ({
  title,
  description,
  imageSrc,
  name,
}: OpinionCartProps) => {
  return (
    <Card className="m-0.5 grid h-[375px] items-center border-transparent shadow-sm shadow-black/30">
      <CardHeader className="text-center">
        <CardDescription>★★★★★</CardDescription>
        <CardTitle className="font-extrabold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-base font-extralight">
        {description}
      </CardContent>
      <CardFooter className="justify-center">
        <div className="flex flex-col items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage alt="Avatar do Cliente" src={imageSrc} />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
          <p className="pt-2 text-xs font-extralight">{name}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OpinionCart;
