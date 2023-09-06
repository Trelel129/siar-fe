import clsx from 'clsx';
import * as React from 'react';

import { getPercentage } from '@/lib/helper';

import SimpleCard from '@/components/cards/SimpleCard';
import UnderlineLink from '@/components/links/UnderlineLink';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

type MissionContentType = { title: string; percentage: number };
const MISSION_CONTENT: MissionContentType[] = [
  {
    title: 'Menyelesaikan sertifikasi 1 UMKM',
    percentage: 50,
  },
  {
    title: 'Sertifikasi UMKM di Daerah Keputih',
    percentage: 80,
  },
  {
    title: 'Lengkapi Profil Anda',
    percentage: 100,
  },
];

export default function MisiSection() {
  return (
    <SimpleCard className='overflow-hidden flex flex-col h-1/2'>
      <div className='flex justify-between items-center'>
        <Typography variant='s1'>Misi Anda</Typography>
        <UnderlineLink href='/misi'>Lihat Semua</UnderlineLink>
      </div>
      <div className='mt-2 inline-flex items-center gap-1'>
        <Tag color='primary'>4</Tag>{' '}
        <Typography variant='b3' color='secondary'>
          / 6 misi selesai
        </Typography>
      </div>
      <div className='mt-4 overflow-y-auto scrollbar-hide  flex flex-col gap-2'>
        {MISSION_CONTENT.map((mission, i) => (
          <MissionListItem key={i} data={mission} />
        ))}
      </div>
    </SimpleCard>
  );
}
function MissionListItem({ data }: { data: MissionContentType }) {
  return (
    <div className='bg-gray-50 rounded-lg p-3'>
      <div>
        <Typography variant='s3'>{data.title}</Typography>
      </div>
      <div className='flex items-center gap-3 mt-1'>
        <div className='w-full min-w-[12rem] relative h-2 overflow-hidden rounded-full bg-light shadow-inner'>
          <span
            title='2500'
            className={clsx([
              data.percentage === 100 ? 'bg-green-400 ' : 'bg-secondary-400 ',
              'absolute left-0 h-2 shrink-0 rounded-r-full',
            ])}
            style={{
              width: `${getPercentage(data.percentage, 100)}%`,
            }}
          >
            &nbsp;
          </span>
        </div>
        <Typography
          variant='c1'
          color='secondary'
          className='whitespace-nowrap'
        >
          {data.percentage === 100 ? 'selesai' : `${data.percentage}%`}
        </Typography>
      </div>
    </div>
  );
}
