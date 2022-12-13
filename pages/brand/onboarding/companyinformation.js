import React, { useState } from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Fragment, useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const steps = [
	{ name: 'Personal Details', description: ' Enter your personal details', href: '#', status: 'complete' },
	{
		name: 'Company Information',
		description: 'Let’s get started with any of your preferred account',
		href: '#',
		status: 'current',
	},
	{ name: 'Social Connection', description: 'Let’s get started with any of your preferred account', href: '#', status: 'upcoming' },


]
const city = [
	{ id: 1, name: 'Select Country' },
	{ id: 2, name: 'Andalusia' },
	{ id: 3, name: 'Anniston' },
	{ id: 4, name: 'Atmore' },
	{ id: 5, name: 'Palmer' },
	{ id: 6, name: 'Prescott' },
	{ id: 7, name: 'Arkadelphia' },
	{ id: 8, name: 'Alameda' },

]
const Country = [
	{ id: 1, name: 'Select Region/City' },
	{ id: 2, name: 'Andalusia' },
	{ id: 3, name: 'Anniston' },
	{ id: 4, name: 'Atmore' },
	{ id: 5, name: 'Palmer' },
	{ id: 6, name: 'Prescott' },
	{ id: 7, name: 'Arkadelphia' },
	{ id: 8, name: 'Alameda' },

]
const Currency = [
	{ id: 1, name: 'Select Currency' },
	{ id: 2, name: '₦ - NGN ' },
	{ id: 3, name: '$ - AUD' },
	{ id: 4, name: '€ - EUR' },
	{ id: 5, name: '£ - GBP' },
	{ id: 6, name: 'GH₵  - GHS' },
	{ id: 7, name: '$ - USD' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}


const CompanyInformation = () => {
	const [selected, setSelected] = useState(city[0])
	const [country, setCountry] = useState(Country[0])
	const [currency, setCurrency] = useState(Currency[0])
	const router = useRouter()
	const initialValues = {
		name: "",
		website:"",
		postcode: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required("Company Name is required!"),
		website: Yup.string().required("Company Website is required!"),
		postcode: Yup.string().required("Post Code is required!"),
		// Country: Yup.string().required("Country is required!"),	
		// city: Yup.string().required("City is required!")

	});
	return (
		<div className=" grid bg-white lg:grid-cols-2 lg:col-rows-1">
			<div div className="relative h-screen overflow-hidden p-[60px] hidden lg:block items-center after:top-0 after:bottom-0  after:left-0 after:right-0  after:absolute after:content-[' '] after:bg-violet600" >
				<div className='relative z-[5]'>
					<img src="/assets/images/Logo.svg" alt="logo" className='' />
					<div className='mt-20'>
						<nav aria-label="Progress">
							<ol role="list" className="overflow-hidden">
								{steps.map((step, stepIdx) => (
									<li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
										{step.status === 'complete' ? (
											<>
												{stepIdx !== steps.length - 1 ? (
													<div className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-white" aria-hidden="true" />
												) : null}
												<a href={step.href} className="group relative flex items-start">
													<span className="flex h-9 items-center">
														<span className="relative items-center justify-center rounded-full ">
															<div className='w-[26px] ml-[1px] rounded-full flex items-center justify-center bg-violet600 border-2 broder-white h-[26px]'>
																<img src="/assets/icons/check-white.svg" />
															</div>
														</span>
													</span>
													<span className="ml-4 flex min-w-0 flex-col">
														<h3 className='font-semibold mb-2  text-xl text-[#ffffffe6]'>{step.name}</h3>
														<span className='text-[#ffffffcc] text-[15px] font-medium'>{step.description}</span>
													</span>
												</a>
											</>
										) : step.status === 'current' ? (
											<>
												{stepIdx !== steps.length - 1 ? (
													<div className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-[#FFFFFF80]" aria-hidden="true" />
												) : null}
												<a href={step.href} className="group relative flex items-start" aria-current="step">
													<span className="flex h-9 ml-[0.032rem] items-center" aria-hidden="true">
														<span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#5B26CF]">
															<span className="h-3 w-3 rounded-full bg-white" />
														</span>
													</span>
													<span className="ml-4 flex min-w-0 flex-col">
														<h3 className='font-semibold mb-2  text-xl text-[#ffffffe6]'>{step.name}</h3>
														<span className='text-[#ffffffcc] text-[15px] font-medium'>{step.description}</span>
													</span>
												</a>
											</>
										) : (
											<>
												{stepIdx !== steps.length - 1 ? (
													<div className="absolute top-4 left-[0.7rem] -ml-px mt-0.5 h-full w-2 bg-[#FFFFFF80]" aria-hidden="true" />
												) : null}
												<a href={step.href} className="group relative flex items-start">
													<span className="flex h-9 ml-[0.032rem] items-center" aria-hidden="true">
														<span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-[#FFFFFF80] bg-[#5B26CF]">
															<span className="h-3 w-3 rounded-full rounded-full bg-transparent " />
														</span>
													</span>
													<span className="ml-4 flex min-w-0 flex-col">
														<h3 className='font-semibold mb-2  text-xl text-[#ffffff73]'>{step.name}</h3>
														<span className='text-[#ffffff73] text-[15px] font-medium'>{step.description}</span>
													</span>
												</a>
											</>
										)}
									</li>
								))}
							</ol>
						</nav>
					</div>
				</div>
			</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				// enableReinitialize={true}
				onSubmit={(values) => {
					console.log(values, "valuesvaluesvalues")
					router.push('/brand/onboarding/connections')
				}}
			>
				{(formik) => {
					return (
						<Form action="#" method="POST" className=' h-screen overflow-auto'>
							<div className=' flex-col py-12'>

								<div className="flex  flex-col justify-center items-center flex-1 ">
									<div className="mx-auto w-full ">
										<div className='text-center'>
											<p className=" text-[13px] font-medium text-gray600">
												Step 2
											</p>
											<h2 className=" mt-2 text-xl font-semibold tracking-tight text-dark900">Company Information</h2>
											<p className="mt-4 text-[15px] font-medium text-gray800">Connect your social media accounts so that brands can view your account</p>
										</div>



										<div className="space-y-5 mt-[52px] px-4 sm:px-6  lg:px-20 xl:px-[134px]">

											<div>
												<label htmlFor="email" className="block text-[13px] font-medium text-gray700">
													Company Name
												</label>
												<div className="mt-1">
													<Field
														id="name"
														name="name"
														placeholder='Enter your ompany name'
														type="text"
														className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
													/>
													<div style={{ color: "red" }}>
														<ErrorMessage
															name="name" component="span" className='error text-[13px] font-medium leanding-[20px] text-red500' />
													</div>
												</div>
											</div>
											<div>
												<label htmlFor="email" className="block text-[13px] font-medium text-gray700">
													Company Website
												</label>
												<div className="mt-1">
													<Field
														id="website"
														name="website"
														placeholder='Website link'
														type="text"
														className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
													/>
													<div style={{ color: "red" }}>
														<ErrorMessage
															name="website" component="span" className='error text-[13px] font-medium leanding-[20px] text-red500' />
													</div>
												</div>
											</div>
											<div>
												<Listbox value={country} onChange={setCountry} className="">
													{({ open }) => (
														<>
															<Listbox.Label htmlFor="email" className="block text-[13px] font-medium text-gray700">Country</Listbox.Label>
															<div className="relative mt-1 ">
																<Listbox.Button className="relative text-[#090415] w-full h-[48px]  cursor-default rounded border border-slate-300 bg-white px-3 py-2 pr-10 text-left placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium">
																	<span className="block truncate text-[#090415]">{country.name}</span>
																	<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
																		<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
																	</span>
																</Listbox.Button>
																<Transition
																	show={open}
																	as={Fragment}
																	leave="transition ease-in duration-100"
																	leaveFrom="opacity-100"
																	leaveTo="opacity-0"
																>
																	<Listbox.Options className="absolute selectpalceholde z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																		{Country.map((person) => (
																			<Listbox.Option
																				key={person.id}
																				className={({ active }) =>
																					classNames(
																						active ? 'text-white bg-indigo-600' : 'text-gray-900',
																						'relative cursor-default select-none py-2 pl-8 pr-4'
																					)
																				}
																				value={person}
																			>
																				{({ selected, active }) => (
																					<>
																						<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
																							{person.name}
																						</span>

																						{selected ? (
																							<span
																								className={classNames(
																									active ? 'text-white' : 'text-indigo-600',
																									'absolute inset-y-0 left-0 flex items-center pl-1.5'
																								)}
																							>
																								<CheckIcon className="h-5 w-5" aria-hidden="true" />
																							</span>
																						) : null}
																					</>
																				)}
																			</Listbox.Option>
																		))}
																	</Listbox.Options>
																</Transition>
															</div>
														</>
													)}
												</Listbox>
											</div>
											<div>
												<Listbox value={selected} onChange={setSelected}>
													{({ open }) => (
														<>
															<Listbox.Label htmlFor="email" className="block text-[13px] font-medium text-gray700">State/City</Listbox.Label>
															<div className="relative mt-1 ">
																<Listbox.Button className="relative w-full text-[#090415] h-[48px]  cursor-default rounded border border-slate-300 bg-white px-3 py-2 pr-10 text-left placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium">
																	<span className="block text-[#090415] truncate">{selected.name}</span>
																	<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
																		<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
																	</span>
																</Listbox.Button>

																<Transition
																	show={open}
																	as={Fragment}
																	leave="transition ease-in duration-100"
																	leaveFrom="opacity-100"
																	leaveTo="opacity-0"
																>
																	<Listbox.Options className="absolute selectpalceholde z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																		{city.map((person) => (
																			<Listbox.Option
																				key={person.id}
																				className={({ active }) =>
																					classNames(
																						active ? 'text-white bg-indigo-600' : 'text-gray-900',
																						'relative cursor-default select-none py-2 pl-8 pr-4'
																					)
																				}
																				value={person}
																			>
																				{({ selected, active }) => (
																					<>
																						<span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
																							{person.name}
																						</span>

																						{selected ? (
																							<span
																								className={classNames(
																									active ? 'text-white' : 'text-indigo-600',
																									'absolute inset-y-0 left-0 flex items-center pl-1.5'
																								)}
																							>
																								<CheckIcon className="h-5 w-5" aria-hidden="true" />
																							</span>
																						) : null}
																					</>
																				)}
																			</Listbox.Option>
																		))}
																	</Listbox.Options>
																</Transition>
															</div>
														</>
													)}
												</Listbox>
											</div>
											<div>
												<Listbox value={currency} onChange={setCurrency}>
													{({ open }) => (
														<>
															<Listbox.Label htmlFor="email" className="block text-[13px] font-medium text-gray700">Preferred Currency</Listbox.Label>
															<div className="relative mt-1 ">
																<Listbox.Button className="relative w-full text-[#090415] h-[48px]  cursor-default rounded border border-slate-300 bg-white px-3 py-2 pr-10 text-left placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium">
																	<span className="block text-[#090415] truncate">{currency.name}</span>
																	<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
																		<ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
																	</span>
																</Listbox.Button>

																<Transition
																	show={open}
																	as={Fragment}
																	leave="transition ease-in duration-100"
																	leaveFrom="opacity-100"
																	leaveTo="opacity-0"
																>
																	<Listbox.Options className="absolute selectpalceholde py-[13px] px-[7px] z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-dark150 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																		{Currency.map((person) => (
																			<Listbox.Option
																				key={person.id}
																				className={({ active }) =>
																					classNames(
																						active ? 'text-white bg-violet600 cursor-pointer' : 'text-gray-900',
																						'relative cursor-default select-none cursor-pointer rounded-lg py-1.5 px-3'
																					)
																				}
																				value={person}
																			>
																				{({ currency, active }) => (
																					<>
																						<span className={classNames(currency ? 'font-semibold ' : 'font-normal', 'block cursor-pointer truncate')}>
																							{person.name}
																						</span>

																					</>
																				)}
																			</Listbox.Option>
																		))}
																	</Listbox.Options>
																</Transition>
															</div>
														</>
													)}
												</Listbox>
											</div>
											<div>
												<label htmlFor="email" className="block text-[13px] font-medium text-gray700">
													Company Post Code
												</label>
												<div className="mt-1">
													<Field
														id="postcode"
														name="postcode"
														placeholder=''
														type="number"
														className="block bg-white text-[#090415] w-full h-[48px] appearance-none rounded border border-slate-300 px-3 py-2 placeholder-gray-400 placeholder:italic focus:border-slate-300 focus:outline-none focus:ring-slate-300 sm:text-[15px] font-medium"
													/>
													<div style={{ color: "red" }}>
														<ErrorMessage
															name="postcode" component="span" className='error text-[13px] font-medium leanding-[20px] text-red500' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex px-[60px] mt-20  justify-between'>
									<button
										// type="submit"
										className="flex justify-center rounded border border-transparent bg-transparent  py-3 px-[20px] text-[15px] flex items-center font-semibold text-violet600 focus:outline-none focus:ring-0 "
										onClick={() => router.push('/brand/onboarding/personaldetail')}
									>
										<img src="/assets/icons/left.svg" className='mr-3.5' /> Back
									</button>

									<button
										type="submit"
										className="flex justify-center rounded border border-transparent bg-violet600 py-3 px-[30px] text-[15px] font-semibold text-white shadow-sm  focus:outline-none focus:ring-0 "
									>
										Next
									</button>
								</div>
							</div>
						</Form>
					)
				}}
			</Formik>
		</div>
	)
}

export default CompanyInformation