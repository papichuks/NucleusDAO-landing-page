'use client';
import RoundedIcon from '@/assets/icons/roundedIcon.png';
import Image from 'next/image';
import { voters } from './data';
import { Button } from '../ui/button';
import { useState } from 'react';

const AllVoters = () => {
    const [list, setList] = useState<number>(3);
  return (
    <div className="space-y-4">
      <div className="flex justify-between font-light text-defaultText border-b border-[#1E1E1E] pb-4">
        <p role="heading">Wallet address</p>
        <p role="heading">Type</p>
      </div>

<div className='space-y-8 max-h-[400px] overflow-auto'>
      {voters.slice(0, list).map((voter, index) => (
        <div className="flex justify-between" key={`${voter.wallet}-${index}`}>
          <div className="flex space-x-3 items-center">
            <Image src={RoundedIcon} alt="logo" width={20} height={20} />
            <p className="font-light text-sm text-white">{voter.wallet}</p>
          </div>
          <p className="text-white">{voter.type}</p>
        </div>
      ))}
      {list !== voters.length && (
        <Button className='w-full bg-[#1E1E1E] hover:bg-[#212020]' onClick={() => setList(voters.length)}>Show more</Button>
      )}
</div>
    </div>
  );
};

export default AllVoters;
