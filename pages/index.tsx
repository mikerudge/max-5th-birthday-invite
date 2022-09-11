import type { NextPage } from "next"

import Image from "next/image"
import * as Add2Calendar from "add2calendar"

import RSVPForm from "../components/RSVPForm"
// import RSVPForm from "../components/RSVPForm"

const openMaps = () => {
	if (
		navigator &&
		/* if we're on iOS, open in Apple Maps */
		(navigator.platform.indexOf("iPhone") != -1 ||
			navigator.platform.indexOf("iPad") != -1 ||
			navigator.platform.indexOf("iPod") != -1)
	) {
		window.open(
			`https://maps.apple.com/?address=Unit%203,%20Ryan%20Buildings,%20Cardiff%20Road,%20Taffs%20Well,%20CF15%207SR,%20Cymru&auid=13104448965366231939&ll=51.558023,-3.270358&lsp=9902&q=All%20Stars%20Gymnastics%20Club&_ext=CjMKBQgEEOEBCgQIBRADCgUIBhCgAwoECAoQAAoECFIQAwoECFUQDgoECFkQAQoFCKQBEAESJilVuru/3MZJQDFM9DxChjgKwDnTj+EbA8hJQEEYVY3l7hoKwFAE`
		)
	} else {
		window.open("https://g.page/Allstarsgym1?share")
	}
}

const addEventToCalendar = () => {
	var singleEventArgs = {
		title: "Max's 5th Birthday Party",
		start: "October 9, 2022 13:30",
		end: "October 9, 2022 15:30",
		location:
			"All-Star Gymnastics Club, Unit 3, Ryan Buildings, Cardiff Road, Taffs Well, CF15 7SR",
		description:
			"Max is turning 5! Come and celebrate with us at All Stars Gymnastics Club",
		isAllDay: false,
	}

	var singleEvent = new Add2Calendar(singleEventArgs)

	window.open(singleEvent.getICalUrl())
}

const Home: NextPage = () => {
	return (
		<main className='flex min-h-screen items-center justify-center overflow-hidden p-8'>
			<div className='prose prose-xl flex flex-col items-center text-center text-blue-100'>
				<div className='my-8 flex justify-between'>
					<div className='mt-8 h-28 w-28 rotate-6 overflow-hidden rounded-2xl shadow animate-rotateInDownLeft'>
						<Image
							width={378}
							height={504}
							src='/max-3.jpeg'
							alt='max at the zoo'
						/>
					</div>
					<div className='z-10 mb-8 h-28 w-28 -rotate-2 animate-slideInDown overflow-hidden rounded-2xl shadow-xl'>
						<Image
							width={378}
							height={504}
							src='/max-2.jpeg'
							alt='max in a super man outfit'
						/>
					</div>
					<div className='mb-8 h-28 w-28 -rotate-12 overflow-hidden rounded-2xl shadow animate-rotateInDownRight'>
						<Image
							width={378}
							height={504}
							src='/max-4.jpg'
							alt='max drinking coffee'
						/>
					</div>
				</div>
				<h1 className='mb-1 mt-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 bg-clip-text py-2 text-transparent'>
					Max is turning{" "}
					<span className='inline-block animate-tada text-blue-50 animate-slower'>
						5
					</span>
				</h1>
				<p className='mt-0 font-semibold text-blue-100'>
					Sun 9th Oct 1:30pm @ All Star{" "}
					<span className='inline-block animate-bounce animate-slower'>
						Gymnastics
					</span>{" "}
					Club
				</p>
				<div
					id='call_to_actions'
					className='my-8 flex w-full flex-wrap items-center justify-center text-center'
				>
					{/* Add to calendar button */}
					<a
						onClick={addEventToCalendar}
						id='add_to_calendar'
						className='mb-4 mr-4 flex cursor-pointer items-center text-center text-sm text-blue-100 transition-all duration-100 hover:text-base hover:text-blue-50'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='mr-2 h-6 w-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
							/>
						</svg>
						Add to Calendar
					</a>

					{/* RSVP button */}
					<a
						href='#rsvp'
						className='mr-4 mb-4 flex items-center text-center text-sm text-blue-100 transition-all duration-100 hover:text-base hover:text-blue-50'
					>
						<svg
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='mr-2 h-6 w-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
							/>
						</svg>
						RSVP
					</a>
					<a
						onClick={openMaps}
						className='mb-4 flex cursor-pointer items-center text-sm text-blue-100 transition-all duration-100 hover:text-base hover:text-blue-50'
					>
						<svg
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='h-6 w-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
							/>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
							/>
						</svg>
						Unit 3, Ryan Buildings, CF15 7SR
					</a>
				</div>

				<div className='rounded bg-blue-100 p-8 shadow-xl'>
					<Image
						width={189 * 2}
						height={504 / 1.2}
						src='/party.svg'
						alt='max at a party'
						className='my-0'
					/>
					<h3 className='font-bold text-blue-900'>You&apos;re Invited!</h3>
					<p className='text-blue-900'>
						We are going to bounce, balance and stretch through Max&apos;s 5th
						birthday party @ All-Star Gymnastics Club, Treforest. We will be
						there from 1:30 pm until 3:30 pm and we would love for you to join
						us.
						<br />
						<br />
						There will be party food and drinks along with free play, games, and
						activities.
					</p>
				</div>

				<div>
					<h2 id='rsvp'>RSVP</h2>
					<RSVPForm />
				</div>
			</div>
		</main>
	)
}

export default Home
