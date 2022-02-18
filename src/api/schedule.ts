import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { delay } from 'utils/helper';
import { Competition } from 'type/schedule';

export function useGetScheduleByMonth(month: number) {
	const [schedule, setSchedule] = useState<Competition[] | undefined>(
		undefined
	);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const updateSchedule = async () => {
			await delay(3000);
			setSchedule(
				mockSchedule.filter((com) => {
					const date = moment(com.date);
					return date.month() === month;
				})
			);
		};

		updateSchedule();
	}, [month]);

	return { schedule, error };
}

const mockSchedule: Competition[] = [
	{
		date: moment('2022-02-21').format(),
		place: '桃園市立綜合體育館',
		type: '例行賽',
		home: { name: '新竹街口工程獅', icon: '/images/logo3.png' },
		away: { name: '台北富邦勇士', icon: '/images/logo4.png' },
	},
];
