import React, { useEffect, useState } from 'react';
import './work-time.css';

const WorkTime = () => {
	const [workTime, setWorkTime] = useState(180);

	const hours = Math.floor(workTime / 60);
	const minutes = workTime - (hours * 60);
	return (
		<div className='work-time-area'>
			<div className='text'>Сегодня Вы поработали:</div>
			<div className='time'>{hours}ч {minutes === 0 ? '00' : minutes}м</div>
		</div>
	)
};

export default WorkTime;
