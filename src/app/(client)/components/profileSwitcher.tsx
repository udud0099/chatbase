import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiArrowsUpDown } from "react-icons/hi2";

type ProfileSwitcherProps = {
  name: string;
  email: string;
  avatarUrl?: string;
};

export default function ProfileSwitcher({
  name,
  email,
  avatarUrl,
}: ProfileSwitcherProps) {
  const fallback = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex gap-1 items-center">
      <div className="flex gap-1 items-center">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-[14px]">{name}</h1>
          <p className="text-[#94A3B8] text-[12px] font-light">{email}</p>
        </div>
      </div>
      <HiArrowsUpDown />
    </div>
  );
}
