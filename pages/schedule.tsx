import React from 'react';

import { useGetScheduleByMonth } from 'api/schedule';

export default function Schedule() {
	const { schedule } = useGetScheduleByMonth(1);

    return(
        <div>
            {schedule? schedule.map((com)=>(
                <div>{com.date}</div>
            )):null }
        </div>
    )
}
