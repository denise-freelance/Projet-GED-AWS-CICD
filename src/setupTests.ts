import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock SVG imports
vi.mock('/vite.svg', () => ({
  default: 'mocked-vite-logo'
}))

vi.mock('./assets/react.svg', () => ({
  default: 'mocked-react-logo'
}))

// Mock CSS imports
vi.mock('./App.css', () => ({}))
vi.mock('./index.css', () => ({}))