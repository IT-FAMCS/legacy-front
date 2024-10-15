import { useEffect, useState } from "react";

export default function useFormGuard(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
    const [isFormDirty, setIsFormDirty] = useState(false);
  
    useEffect(() => {
      const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        if (isFormDirty) {
          event.preventDefault();
          event.returnValue = "";
        }
      };
  
      window.addEventListener("beforeunload", handleBeforeUnload);
  
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, [isFormDirty]);
  
    return [isFormDirty, setIsFormDirty];
  }