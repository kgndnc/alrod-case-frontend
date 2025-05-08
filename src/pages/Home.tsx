import { useEffect, useState } from 'react'
import { client } from '../lib/strapi-client'
import {
	MessageCircle,
	Home as LucideHome,
	Star,
	User,
	FileText,
	Phone,
	Wind,
	Droplet,
} from 'lucide-react'

function ___Home() {
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

	return (
		<>
			<div>Home</div>
		</>
	)
}

function Home() {
	const [email, setEmail] = useState('')

	return (
		<div className='flex flex-col min-h-screen bg-gray-50'>
			{/* Header */}
			<header className='w-full py-4 px-6 flex justify-end items-center bg-white'>
				<button className='bg-blue-500 text-white rounded-full px-6 py-2 mr-4'>
					Sign In
				</button>
				<div className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
					<User size={18} />
				</div>
			</header>

			{/* Side Navigation */}
			<div className='fixed left-0 top-20 h-full w-16 flex flex-col items-center'>
				<div className='flex flex-col items-center gap-6 mt-4'>
					<div className='w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white'>
						<LucideHome size={20} />
					</div>
					<div className='w-10 h-10 flex items-center justify-center text-blue-400'>
						<Star size={20} />
					</div>
					<div className='w-10 h-10 flex items-center justify-center text-blue-400'>
						<MessageCircle size={20} />
					</div>
					<div className='w-10 h-10 flex items-center justify-center text-blue-400'>
						<FileText size={20} />
					</div>
					<div className='w-10 h-10 flex items-center justify-center text-blue-400'>
						<MessageCircle size={20} />
					</div>
					<div className='w-10 h-10 flex items-center justify-center text-blue-400'>
						<Phone size={20} />
					</div>
				</div>
			</div>

			{/* Main Content */}
			<main className='flex-1 ml-16 px-10 pt-8'>
				{/* Hero Section */}
				<section className='mb-12'>
					<h1 className='text-3xl font-normal mb-2'>
						<span className='text-blue-500 font-medium'>energy</span>
						<span className='text-gray-600'> starts here</span>
					</h1>
					<p className='text-gray-600 mb-4 max-w-md'>
						The Only Best marketplace to buy or sell a project, find energy
						project that interest you
					</p>
					<button className='bg-blue-500 text-white rounded-full px-8 py-2'>
						Join Us
					</button>
				</section>

				{/* Featured Projects */}
				<section className='relative mb-20 pb-10'>
					<div className='flex gap-6'>
						{/* Project Card 1 */}
						<div className='bg-white rounded-lg p-6 shadow-sm w-64'>
							<div className='flex justify-center mb-4'>
								<Droplet className='text-gray-700' />
							</div>
							<h3 className='font-medium text-gray-700'>Çamlıdere Projesi</h3>
							<p className='text-gray-500 text-sm'>Kayseri, Türkiye</p>
							<div className='mt-4'>
								<span className='text-3xl font-medium text-gray-700'>125</span>
								<span className='text-gray-500 text-sm ml-1'>MWe</span>
							</div>
						</div>

						{/* Project Card 2 */}
						<div className='bg-white rounded-lg p-6 shadow-sm w-64'>
							<div className='flex justify-center mb-4'>
								<Wind className='text-gray-700' />
							</div>
							<h3 className='font-medium text-gray-700'>Rüzgartepe Projesi</h3>
							<p className='text-gray-500 text-sm'>Adana, Türkiye</p>
							<div className='mt-4'>
								<span className='text-3xl font-medium text-gray-700'>43</span>
								<span className='text-gray-500 text-sm ml-1'>MWe</span>
							</div>
						</div>
					</div>

					{/* Pagination Dots */}
					<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-6'>
						<div className='w-4 h-4 bg-blue-500 rounded-full'></div>
						<div className='w-4 h-4 bg-blue-400 rounded-full'></div>
					</div>
				</section>

				{/* Explore Projects Section */}
				<section className='mb-20'>
					<h2 className='text-2xl font-normal mb-8'>
						<span className='text-blue-500 font-medium'>explore</span>
						<span className='text-gray-600'> project</span>
					</h2>

					<div className='flex gap-6'>
						<div className='max-w-xs'>
							<p className='text-gray-600 text-sm'>
								Lorem ipsum dolor sit amet consectetur. Elementum risus tempor
								at vivamus curabitur viverra diam nec.
							</p>
						</div>

						{/* Project Cards Row */}
						<div className='flex gap-4 flex-1'>
							{/* Project 1 */}
							<div className='bg-gray-50 rounded-lg p-6 flex-1'>
								<div className='flex justify-between items-center mb-4'>
									<div>
										<h3 className='font-medium text-gray-700'>
											Güneşiği Projesi
										</h3>
										<p className='text-gray-500 text-xs'>Diyarbakır, Türkiye</p>
									</div>
									<div className='flex items-center justify-center w-8 h-8'>
										<svg
											viewBox='0 0 24 24'
											width='24'
											height='24'
											className='text-gray-700'
										>
											<circle
												cx='12'
												cy='12'
												r='5'
												stroke='currentColor'
												fill='none'
												strokeWidth='1.5'
											/>
											<line
												x1='12'
												y1='3'
												x2='12'
												y2='5'
												stroke='currentColor'
												strokeWidth='1.5'
											/>
											<line
												x1='12'
												y1='19'
												x2='12'
												y2='21'
												stroke='currentColor'
												strokeWidth='1.5'
											/>
											<line
												x1='21'
												y1='12'
												x2='19'
												y2='12'
												stroke='currentColor'
												strokeWidth='1.5'
											/>
											<line
												x1='5'
												y1='12'
												x2='3'
												y2='12'
												stroke='currentColor'
												strokeWidth='1.5'
											/>
										</svg>
									</div>
								</div>
								<div className='mb-4'>
									<span className='text-3xl font-medium text-gray-700'>84</span>
									<span className='text-gray-500 text-sm ml-1'>MWe</span>
								</div>
								<button className='bg-blue-500 text-white rounded-full px-6 py-2 text-sm'>
									İncele
								</button>
							</div>

							{/* Project 2 */}
							<div className='bg-gray-50 rounded-lg p-6 flex-1'>
								<div className='flex justify-between items-center mb-4'>
									<div>
										<h3 className='font-medium text-gray-700'>
											Çamlıdere Projesi
										</h3>
										<p className='text-gray-500 text-xs'>Kayseri, Türkiye</p>
									</div>
									<div className='flex items-center justify-center w-8 h-8'>
										<Droplet className='text-gray-700' size={20} />
									</div>
								</div>
								<div className='mb-4'>
									<span className='text-3xl font-medium text-gray-700'>
										125
									</span>
									<span className='text-gray-500 text-sm ml-1'>MWe</span>
								</div>
								<button className='bg-blue-500 text-white rounded-full px-6 py-2 text-sm'>
									İncele
								</button>
							</div>

							{/* Project 3 */}
							<div className='bg-gray-50 rounded-lg p-6 flex-1'>
								<div className='flex justify-between items-center mb-4'>
									<div>
										<h3 className='font-medium text-gray-700'>
											Rüzgartepe Projesi
										</h3>
										<p className='text-gray-500 text-xs'>Adana, Türkiye</p>
									</div>
									<div className='flex items-center justify-center w-8 h-8'>
										<Wind className='text-gray-700' size={20} />
									</div>
								</div>
								<div className='mb-4'>
									<span className='text-3xl font-medium text-gray-700'>43</span>
									<span className='text-gray-500 text-sm ml-1'>MWe</span>
								</div>
								<button className='bg-blue-500 text-white rounded-full px-6 py-2 text-sm'>
									İncele
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className='mb-16'>
					<div className='flex items-center gap-4 bg-gray-50 p-6 rounded-lg'>
						<div className='flex-1'>
							<p className='text-gray-700 font-medium'>
								Helping sales, marketing and recruiting teams find new leads.
							</p>
						</div>
						<div className='flex-1 flex gap-2'>
							<input
								type='email'
								placeholder='Your work e-mail here...'
								className='flex-1 px-4 py-2 border border-gray-300 rounded'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<button className='bg-blue-500 text-white rounded px-4 py-2 text-sm whitespace-nowrap'>
								Find New Customer
							</button>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className='bg-gray-50 py-12 px-10 mt-auto'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-4 gap-8 mb-10'>
						<div>
							<h4 className='font-medium text-gray-700 mb-4'>Services</h4>
							<ul className='space-y-2'>
								<li className='text-gray-600 text-sm'>Overview</li>
								<li className='text-gray-600 text-sm'>Features</li>
								<li className='text-gray-600 text-sm'>Solutions</li>
								<li className='text-gray-600 text-sm'>Tutorials</li>
								<li className='text-gray-600 text-sm'>Pricing</li>
								<li className='text-gray-600 text-sm'>Releases</li>
							</ul>
						</div>
						<div>
							<h4 className='font-medium text-gray-700 mb-4'>Company</h4>
							<ul className='space-y-2'>
								<li className='text-gray-600 text-sm'>About Us</li>
								<li className='text-gray-600 text-sm'>Careers</li>
								<li className='text-gray-600 text-sm'>Press</li>
								<li className='text-gray-600 text-sm'>News</li>
								<li className='text-gray-600 text-sm'>Media Kit</li>
								<li className='text-gray-600 text-sm'>Contact</li>
							</ul>
						</div>
						<div>
							<h4 className='font-medium text-gray-700 mb-4'>Resources</h4>
							<ul className='space-y-2'>
								<li className='text-gray-600 text-sm'>Blog</li>
								<li className='text-gray-600 text-sm'>Newsletter</li>
								<li className='text-gray-600 text-sm'>Events</li>
								<li className='text-gray-600 text-sm'>Help Centre</li>
								<li className='text-gray-600 text-sm'>Tutorials</li>
								<li className='text-gray-600 text-sm'>Support</li>
							</ul>
						</div>
						<div className='flex items-end'>
							<div className='flex gap-4'>
								<div className='w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-blue-500'>
									<span>in</span>
								</div>
								<div className='w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-blue-500'>
									<span>ig</span>
								</div>
								<div className='w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-blue-500'>
									<span>tw</span>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-between pt-6 border-t border-gray-200 text-xs text-gray-500'>
						<div className='flex gap-6'>
							<span>Terms & Condition</span>
							<span>Privacy Policy</span>
						</div>
						<span>© Copyright 2025 Endavris - All Right Reserved</span>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Home

