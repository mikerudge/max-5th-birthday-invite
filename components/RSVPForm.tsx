import { useEffect, useState } from "react"

const RSVPForm = () => {
	// only render the form if its not SSR

	// get the width of the window and if its less than 768px, don't render the form
	const [width, setWidth] = useState(0)
	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])

	// set a listener to update the width if the window is resized
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	if (!width) {
		return <div />
	}

	return (
		<iframe
			title="max's birthday form"
			src='https://docs.google.com/forms/d/e/1FAIpQLSeuMGaPDIYupxnQb4_97dQbwL0kyc7WR3GU_iRKX1D0s68P6w/viewform?embedded=true'
			width={width - 50}
			height='1000'
			frameBorder='0'
			marginHeight={0}
			marginWidth={0}
		>
			Loading…
		</iframe>
	)
}

export default RSVPForm
