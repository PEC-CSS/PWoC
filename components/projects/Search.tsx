import React from 'react';

interface searchProps {
	onSearch: (e: React.FormEvent<HTMLFormElement>) => void,
	searchTerm: string,
	setSearchTerm: (searchTerm: string) => void,
}

export const Search = ({onSearch, searchTerm, setSearchTerm} : searchProps) => {
	return (
		<div className='flex justify-center items-center'>
			<div className='glassmorphism container m-auto mx-2 my-4 sm:m-8 bg-[rgba(32,38,87,0.70)] rounded-lg py-14 px-3 md:px-14'>
				<form onSubmit={onSearch} >
					<h1 className='text-center font-bold text-white text-4xl'>
						Search a project name or tech stack
						<p className='mx-auto font-normal text-sm my-6 max-w-lg'></p>
					</h1>
					<label
						htmlFor='default-search'
						className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
					>
						Search
					</label>
					<div className='relative m-auto w-auto sm:w-3/4 lg:w-1/2'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								aria-hidden='true'
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								></path>
							</svg>
						</div>
						<input
							type='search'
							id='default-search'
							name='search'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search Projects, Tech Stacks...'
						/>
						<button
							type='submit'
							className='text-white absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};