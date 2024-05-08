'use client';
import Image from 'next/image';
import EmptyDAO from '@/assets/icons/empty-icon.png';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { cn } from '@/libs/utils';

const ErrorFetchingComponent = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <div className={cn('min-h-[80vh] w-full p-8', className)}>
      <div className="w-[90%] space-y-4 font-light text-sm">
        <h1 className="dark:text-white text-dark text-[28px]">
          This site can’t be reached
        </h1>
        <p>We cannot connect to the server at www.nucluesDAO.com</p>
        <p>Try again later.</p>
        <p> Check your network connection.</p>
        <p>
          If you're connected but facing firewall restrictions, ensure Firefox
          has the necessary permissions to access the internet.
        </p>
        {/* <p className="mt-2">
          ...Seems like you're having troubles while connecting to our contract
          address. Kindly try again later...
        </p> */}

        <Button className="" onClick={() => router.refresh()}>
          Try again!
        </Button>
      </div>
    </div>
  );
};

export default ErrorFetchingComponent;
