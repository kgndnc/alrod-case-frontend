import type React from 'react'

export const Hero: React.FC = () => (
	<section className='mb-12'>
		<h1 className='text-3xl font-normal mb-2'>
			<span className='text-blue-500 font-medium'>energy</span>
			<span className='text-gray-600'> starts here</span>
		</h1>
		<p className='text-gray-600 mb-4 max-w-md'>
			The Only Best marketplace to buy or sell a project, find energy project
			that interest you
		</p>
		<button className='bg-blue-500 text-white rounded-full px-8 py-2'>
			Join Us
		</button>
	</section>
)
