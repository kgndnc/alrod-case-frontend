import './App.css'
import { useEffect, useState } from 'react'

import { client } from './lib/strapi-client'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const result = await client.fetch('projects', { method: 'GET' })
				const projects = await result.json()
				setData(projects?.data ?? [])
			} catch (error) {
				console.error('Catched error')
				console.error(error)
				setData([])
			}
		})()
	}, [])

	console.log(data)

	return (
		<>
			<p className='p-2'>Hello, World!</p>
			<div>
				<h2>Data from Strapi</h2>
				<div className=''>
					<pre>{JSON.stringify(data)}</pre>
				</div>
			</div>
		</>
	)
}

export default App

