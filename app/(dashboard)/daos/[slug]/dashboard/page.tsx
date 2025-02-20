'use client';
import { ChevronUp } from 'lucide-react';
import { dashboardTab, tabView } from './config';
import { useContext, useState } from 'react';
import { cn } from '@/libs/utils';
import { useSearchParams } from 'next/navigation';
import { ApiContext } from '@/context/api-context';
import { EachDaoContext } from '@/context/each-dao-context';

const EachDaoDashboard = () => {
  const [selectedTab, setSelectTab] = useState<number>(0);
  const { getAEPrice } = useContext(ApiContext);
  const { currentDAO } = useContext(EachDaoContext);
  const searchParams = useSearchParams();

  return (
    <div className="md:flex space-x-0 md:space-x-8 space-y-4 md:space-y-0">
      <div className="md:w-[25%] space-y-4">
        {dashboardTab({
          aeAmount: 0,
          usdAmount: 0,
          totalProposals: Number(currentDAO.totalProposals),
          totalMembers: currentDAO.members.length,
        }).map((tab, index) => (
          <div
            key={tab.title}
            className={cn(
              'p-4 dark:bg-gradient-to-r dark:from-[#1E1E1E] dark:via-[#1E1E1E] dark:to-[#252525] bg-white rounded-lg flex items-center space-x-4 space-y-4 border trans border-white dark:border-[#191919] dark:hover:border-[#292929] hover:border-[#CCCCCC99]',
              selectedTab === index &&
                'border-primary dark:border-primary dark:hover:border-primary hover:border-primary'
            )}
            role="button"
            onClick={() => setSelectTab(index)}
          >
            <div>{tab.icon}</div>
            <div className="space-y-2">
              <div className="space-y-2">
                <p className="text-defaultText text-sm">{tab.title}</p>
                <div className="flex space-x-2 items-center">
                  <p className="dark:text-white text-dark font-bold text-2xl">
                    {tab.amount}
                  </p>
                  {!tab.value && (
                    <div className="flex items-center space-x-2 text-[#1CA013] ">
                      <ChevronUp size={16} />
                      <p className="font-medium text-xs">{tab.increase}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="text-xs text-defaultText">{tab.value}</p>
                {tab.value && (
                  <div className="flex items-center space-x-2 text-[#1CA013] ">
                    <ChevronUp size={16} />
                    <p className="font-medium text-sm">{tab.increase}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-[75%] dark:bg-gradient-to-r dark:from-[#1E1E1E] dark:via-[#1E1E1E] dark:to-[#252525] bg-white p-4 rounded-lg h-[60vh]">
        {tabView[selectedTab]}
      </div>
    </div>
  );
};

export default EachDaoDashboard;
