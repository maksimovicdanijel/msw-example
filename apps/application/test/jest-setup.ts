import '@testing-library/jest-dom'
import 'whatwg-fetch'

import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });