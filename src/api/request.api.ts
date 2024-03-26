import { AxiosResponse } from 'axios'
import { axiosClassic, instance } from './axios.api'

type T = <T>(options: {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	url: string
	body?: any
}) => Promise<AxiosResponse<T>>

export const classicRequest: T = async <T>(options: {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	url: string
	body?: any
}): Promise<AxiosResponse<T>> => {
	const response = await axiosClassic({
		...options,
		data: options.body,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	return response as AxiosResponse<T>
}

export const accessRequest: T = async <T>(options: {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	url: string
	body?: any
}): Promise<AxiosResponse<T>> => {
	const response = await instance({
		...options,
		data: options.body,
		headers: {
			'Content-Type': 'application/json',
		},
	})

	return response as AxiosResponse<T>
}

export const filesRequest: T = async <T>(options: {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
	url: string
	body?: any
}): Promise<AxiosResponse<T>> => {
	const response = await instance({
		...options,
		data: options.body,
		headers: {
			'Content-Type': 'multipart/form',
		},
	})

	return response as AxiosResponse<T>
}
