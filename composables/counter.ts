const counter: CounterState = {
    offline: 0,
    online: 0,
    offlineLimit: 100,
    onlineLimit: 500
}

export const useCounter = () => {
    return useState<CounterState>('counter', () => counter)
}