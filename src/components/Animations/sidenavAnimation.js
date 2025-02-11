import gsap from "gsap";

export const openSideNav = (sideNavRef, navItemRefs) => {
  gsap.to(sideNavRef.current, {
    left: 0,
    duration: 0.6,
    ease: "power3.out",
  });

  gsap.fromTo(
    navItemRefs.current,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, stagger: 0.2, delay: 0.2, ease: "power3.out" }
  );
};

export const closeSideNav = (sideNavRef) => {
  gsap.to(sideNavRef.current, {
    left: "-120%",
    duration: 0.6,
    ease: "power3.in",
  });
};
