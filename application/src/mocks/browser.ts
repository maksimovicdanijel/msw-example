// src/mocks/browser.js

// src/mocks/browser.ts
import { setupWorker } from 'msw'

import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
