import debounce from "lodash.debounce";
import { EventInfo } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Handler types for Motion Hover Event.
type MotionHoverHandler = (event: MouseEvent, info: EventInfo) => void;

export function useDebounceMotionHover(delay = 200) {
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(false);

  const debouncedSetHovering = useMemo(
    () =>
      debounce((value: boolean) => {
        setIsHovering(value);
      }, delay),
    [delay]
  );

  // Clean up debounced function
  useEffect(() => {
    return () => {
      debouncedSetHovering.cancel();
    };
  }, [debouncedSetHovering]);

  const handleMouseEnter: MotionHoverHandler = useCallback(
    (_event, _info) => {
      isHoveringRef.current = true;
      debouncedSetHovering(true);
    },
    [debouncedSetHovering]
  );

  const handleMouseLeave: MotionHoverHandler = useCallback(
    (_event, _info) => {
      isHoveringRef.current = false;
      debouncedSetHovering(false);
    },
    [debouncedSetHovering]
  );

  return { isHovering, handleMouseEnter, handleMouseLeave };
}
