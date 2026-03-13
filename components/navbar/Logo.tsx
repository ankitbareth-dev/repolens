"use client";

import { memo, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "@/assets/app-logo-dark.png";
import LogoLight from "@/assets/app-logo-light.png";

const useIsClient = () => {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
};

const NavbarLogo = memo(() => {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const src = isClient && resolvedTheme === "dark" ? LogoDark : LogoLight;

  return (
    <Link
      href="/"
      className="flex items-center z-20 shrink-0 pt-1.5 relative h-[100px] w-[150px]"
    >
      <Image
        src={src}
        alt="RepoLens Logo"
        className="h-[100px] w-auto object-contain"
        priority
      />
    </Link>
  );
});

NavbarLogo.displayName = "NavbarLogo";

export default NavbarLogo;
