import * as React from "react";

export default function useIntersectionObserver({
  rootRef,
  targetRef,
  onIntersect,
  threshold = 1.0,
  rootMargin = "150px",
  enabled = true,
  ready,
}: {
  targetRef: React.RefObject<HTMLElement>;
  onIntersect: () => void;
  rootRef?: React.RefObject<HTMLElement>;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
  ready?: boolean;
}) {
  React.useEffect(() => {
    const root = rootRef?.current;
    const target = targetRef?.current;

    if (!enabled || !target) {
      return () => {
        return;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log('isIntersecting !!!!!');
            onIntersect();
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [enabled, targetRef, rootRef, rootMargin, threshold, onIntersect, ready]);
}
