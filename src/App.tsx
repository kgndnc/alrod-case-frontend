import './App.css'

import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import type React from 'react'
import ProjectFormPage from './pages/ProjectFormPage'


/*
	TODO:
		- split Home to components	(DONE)
		- make sidebar buttons functional (LATER)
		- add "add project multi-step form" (WIP)
		- add project details page
		- make final touches and fixes
		- deploy (ship it 🚀 :D) 		
*/


const App: React.FC =  () => {
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
						path='new'
						element={<ProjectFormPage />}
					/>
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

