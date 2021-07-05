import axios from 'axios'

import { IQuizRequest } from '../types/quiz'

const fetchQuizApi = (params: IQuizRequest) => axios.get('', { params })
export { fetchQuizApi }
