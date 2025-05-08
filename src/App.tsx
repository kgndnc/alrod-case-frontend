import './App.css'
import { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router'
import Home from './pages/Home'

// TODO: setup react router

function App() {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path='about'
					element={
						<>
							<h1>About</h1>
						</>
					}
				/>

				{/* <Route element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route> */}

				<Route path='projects'>
					<Route index element={<>Projects home</>} />
					<Route
						path=':project_id'
						element={
							<>
								<p>specific project details</p>
							</>
						}
					/>
					<Route
						path='trending'
						element={
							<>
								<h1>Trending projects</h1>
							</>
						}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App

