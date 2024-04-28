'use client';
import { useContext, useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ConnectWalletContext } from '@/context/connect-wallet-context';
import { IConnectWalletContext } from '@/libs/types';
import { toast } from 'sonner';
import Lottie from 'react-lottie';
import { defaultSuccessOption } from '../animation-options';

const VotingProcess = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const { user } = useContext<IConnectWalletContext>(ConnectWalletContext);
  const connected: boolean = user.isConnected;
  const hasVoted: boolean = false;

  const votingOptions = ['yes', 'no'];

  const handleOptionChange = (option: string) => {
    if (connected) {
      setSelectedOption(option);
    } else {
      toast.error('Connect to you wallet!');
    }
  };

  return (
    <div>
      {hasVoted && (
        <p className="dark:text-white text-dark">
          You have casted your vote. The result will be shown if the proposal
          reach its quorum
        </p>
      )}
      {!hasVoted && (
        <div className="space-y-5">
          {votingOptions.map((option) => (
            <RadioGroup
              defaultValue={selectedOption}
              value={selectedOption}
              key={option}
              onValueChange={() => handleOptionChange(option)}
              role="button"
            >
              <div
                className="border dark:border-[#292929] p-4 rounded-lg items-center flex justify-between border-[#CCCCCC99]"
                onClick={() => handleOptionChange(option)}
              >
                <Label
                  htmlFor={option}
                  id={option}
                  className="capitalize dark:text-white font-medium text-dark"
                >
                  {option}
                </Label>
                <RadioGroupItem
                  className="rounded-full"
                  id={option}
                  value={option}
                />
              </div>
            </RadioGroup>
          ))}
          <Dialog onOpenChange={setShowModal} open={showModal}>
            <DialogTrigger asChild>
              <Button className="w-full" disabled={!selectedOption}>
                Vote
              </Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-[#191919] bg-white">
              <DialogHeader>
                <DialogTitle className="dark:text-white font-medium py-1 text-center text-dark ">
                  <Lottie
                    options={defaultSuccessOption}
                    height={150}
                    width={150}
                  />
                  <p className='-mt-2'>Vote Casted</p>
                </DialogTitle>
                <DialogDescription className="py-2 text-center">
                  You have casted your vote. The result will be shown if the
                  proposal reaches its quorum
                </DialogDescription>
              </DialogHeader>
              <Button className="w-full" onClick={() => setShowModal(false)}>
                Done
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default VotingProcess;
