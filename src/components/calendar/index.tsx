import React, { useEffect, useState } from 'react';
import './calendar.css'
import { weekDays, months } from './constants';

const Calendar = () => {
	const [month, setMonth] = useState('');
	const [days, setDays] = useState(1);

	useEffect(() => {
		const date = new Date();
		const month = date.getMonth();
		const year = date.getFullYear();

		setMonth(months[month]);
		setDays(new Date(year, month+1, 0).getDate());
	}, []);

	const displayWeekDays = weekDays.map((el, i) => <div className='week-day' key={i}>{el}</div>);
	const daysArray = [];
	//
	const date = new Date();
	const mon = date.getMonth();
	const year = date.getFullYear();
	const day = new Date(year, mon,1).getDay();
	const weeks = Math.ceil((days + day) / 7);
	//
	for (let i = 1; i <= weeks * 7; i++) {
		if (i < day) daysArray.push(<div className='day'></div>);
		else if (i >= days + day) daysArray.push(<div className='day'></div>);
		else daysArray.push(<div className='day'>{i-day+1}</div>);
	}

	return (
		<>
			<div className='month-area'>
				<div className='arrow'>{'<-'}</div>
				<div className='month'>{month}</div>
				<div className='arrow'>{'->'}</div>
			</div>
			<div className='calendar-area'>
				<div className='week-day-area'>{displayWeekDays}</div>
				<div className='day-area'>{daysArray}</div>
			</div>
		</>
	)
};

export default Calendar;
