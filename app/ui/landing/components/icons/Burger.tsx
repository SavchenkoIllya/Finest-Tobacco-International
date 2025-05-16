import { cn } from "@/app/ui";

interface BurgerProps {
  open: boolean;
  onClick: () => void;
}

export const Burger = ({ open, onClick }: BurgerProps) => {
  return (
    <div>
      <button onClick={onClick} className="relative group">
        <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all ring-0 ring-opacity-30 duration-200">
          <div
            className={cn(
              "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden",
              open && "-translate-x-1.5 rotate-180",
            )}
          >
            <div
              className={cn(
                "bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left delay-150",
                open && "rotate-[42deg] w-2/3",
              )}
            />
            <div
              className={cn(
                "bg-primary h-[2px] w-7 rounded transform transition-all duration-300",
                open && "translate-x-10",
              )}
            />
            <div
              className={cn(
                "bg-primary h-[2px] w-7 transform transition-all duration-300 origin-left delay-150",
                open && "-rotate-[42deg] w-2/3",
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
};
