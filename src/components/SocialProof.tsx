import { cn } from '@/lib/utils';
import { SocialProofProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Image from 'next/image';
import {
  companyAdobe,
  companyCisco,
  companyClicklab,
  companyGoogle,
  companyRazorpay,
  companySamsung,
  companyMicrosoft,
  companyVirtusa,
  companyBlackrock,
  companyAmazon,
} from '@/assets';

const SocialProof = ({ className, ...props }: SocialProofProps) => {
  const companies = [
    companyAmazon,
    companyBlackrock,
    companyVirtusa,
    companyMicrosoft,
    companySamsung,
    companyRazorpay,
    companyGoogle,
    companyAdobe,
    companyCisco,
    companyClicklab,
  ];
  return (
    <section className={cn(className, 'py-12 md:py-16 lg:py-20')} {...props}>
      <ViewContainer>
        <h2 className="text-gray-500 font-medium text-center">
          My students work at
        </h2>
        <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-16 mt-6 md:mt-7 lg:mt-8">
          {companies.map((image, key) => (
            <Image
              src={image}
              key={key}
              alt="Company logo"
              className="max-w-24 md:max-w-28 lg:max-w-32"
            />
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default SocialProof;
