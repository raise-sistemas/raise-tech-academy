import {storeNamePattern } from '../../stringPatterns/storePattern.js'
import { parseChunk } from '../parseChunk.js'

export const companyName = (chunk) => parseChunk(chunk, storeNamePattern);