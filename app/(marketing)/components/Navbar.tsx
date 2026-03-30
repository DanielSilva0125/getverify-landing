import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";

export default function Navbar() {
  return (
    <header className="w-full border-b border-dark-teal/[0.06] bg-white">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Verify" className="flex shrink-0 items-center py-1">
          <Image
            src="/brand/1 finality4.svg"
            alt="Verify"
            width={1124}
            height={292}
            priority
            className="block h-auto w-[122px] sm:w-[110px]"
            sizes="(min-width: 640px) 138px, 122px"
          />
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center">
          <Button
            as={Link}
            href="#waitlist"
            variant="light"
            radius="lg"
            className="inline-flex text-[13px] font-medium text-dark-teal/50 hover:text-dark-teal"
          >
            Iniciar sesión
          </Button>
        </div>
      </nav>
    </header>
  );
}
