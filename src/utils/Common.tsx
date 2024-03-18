import data from '../data/data.json';

export function statusData(): string[] {
  const statusData = data.map(item => item.state);
  return Array.from(new Set(statusData))
}

export function typeData(): string[] {
  const statusData = data.map(item => item.type);
  return Array.from(new Set(statusData))
}

export function serviceOffering(): string[] {
  const statusData = data.map(item => item.serviceOffering);
  return Array.from(new Set(statusData))
}
