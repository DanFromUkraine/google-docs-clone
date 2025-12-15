import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    Icon: LucideIcon;
}

const ToolbarButton = ({ onClick, isActive, Icon }: ToolbarButtonProps) => {
    return 
};

export const Toolbar = () => {
    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            Toolbar
        </div>
    );
};
