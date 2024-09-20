import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function HomeView() {
  return (
    <div
      className={`flex w-full bg-secondary flex-col justify-center items-center`}
    >
      <div className={`container`}>
        {/*  */}
        <div className={`grid grid-cols-3 gap-5`}>
          <div
            className={`flex flex-col justify-center items-center border-1 border-gray-500 px-8 rounded-2xl py-5`}
          >
            <div>xx</div>
            <Link href={"/mood"}>
              <Button color={`default`} variant={`ghost`}>
                Mood
              </Button>
            </Link>
          </div>
          <div
            className={`flex flex-col justify-center items-center border-1 border-gray-500 px-8 rounded-2xl py-5`}
          >
            <div>xx</div>
            <Link href={"/profile"}>
              <Button color={`default`} variant={`ghost`}>
                Profile
              </Button>
            </Link>
          </div>
          <div
            className={`flex flex-col justify-center items-center border-1 border-gray-500 px-8 rounded-2xl py-5`}
          >
            <div>xx</div>
            <Link href={"/curhat"}>
              <Button color={`default`} variant={`ghost`}>
                Curhat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
